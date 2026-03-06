import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Polyline, Tooltip, useMap, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import { Wine } from 'lucide-react';
import { oceanCurrents } from './data/oceanCurrents';

// Create a custom glass icon HTML
const wineGlassIconHtml = `
  <div style="background: var(--accent-ruby); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(121, 31, 56, 0.4); border: 2px solid white; transition: all 0.3s ease;">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M12 15v7"/><path d="M12 15a7.5 7.5 0 0 0 7.5-7.5C19.5 4.5 16 2 12 2S4.5 4.5 4.5 7.5 12 15 12 15z"/><path d="M4.5 7.5h15"/></svg>
  </div>
`;

const hoverGlassIconHtml = `
  <div style="background: var(--accent-gold); color: var(--background); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(212, 175, 55, 0.5); border: 2px solid white; transform: scale(1.1); transition: all 0.3s ease; z-index: 1000;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M12 15v7"/><path d="M12 15a7.5 7.5 0 0 0 7.5-7.5C19.5 4.5 16 2 12 2S4.5 4.5 4.5 7.5 12 15 12 15z"/><path d="M4.5 7.5h15"/></svg>
  </div>
`;

const defaultIcon = L.divIcon({
    html: wineGlassIconHtml,
    className: 'custom-wine-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

const hoverIcon = L.divIcon({
    html: hoverGlassIconHtml,
    className: 'custom-wine-marker hover',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
});


// Utility component to handle clicks on the empty map areas
function MapEvents({ onEmptyClick }) {
    const map = useMap();
    useEffect(() => {
        const handleClick = (e) => {
            const isClickOnMarker = e.originalEvent.target.closest('.custom-wine-marker');
            if (!isClickOnMarker) {
                onEmptyClick();
            }
        };
        map.on('click', handleClick);
        return () => map.off('click', handleClick);
    }, [map, onEmptyClick]);
    return null;
}

// Animated arrow markers along current paths
function AnimatedArrows({ path, color, type }) {
    const map = useMap();
    useEffect(() => {
        if (!path || path.length < 2) return;
        const markers = [];
        const step = Math.max(1, Math.floor(path.length / 4));
        for (let i = step; i < path.length; i += step) {
            const prev = path[i - 1];
            const curr = path[i];
            const angle = Math.atan2(curr[1] - prev[1], curr[0] - prev[0]) * (180 / Math.PI);

            const isWind = type === 'wind';
            const icon = L.divIcon({
                html: `<div class="current-arrow ${type}-arrow" style="
                    transform: rotate(${angle}deg);
                    color: ${color};
                    font-size: ${isWind ? '14px' : '18px'};
                    filter: drop-shadow(0 0 4px ${color}80);
                    animation: arrowPulse 2s ease-in-out infinite;
                    animation-delay: ${i * 0.3}s;
                ">${isWind ? '→' : '▸'}</div>`,
                className: 'arrow-decorator-icon',
                iconSize: [18, 18],
                iconAnchor: [9, 9]
            });
            const marker = L.marker(curr, { icon, interactive: false, pane: 'overlayPane' }).addTo(map);
            markers.push(marker);
        }
        return () => markers.forEach(m => map.removeLayer(m));
    }, [map, path, color, type]);
    return null;
}

const styleConfig = {
    warm: { color: '#e84057', glow: 'rgba(232, 64, 87, 0.35)', label: 'Warm Current', emoji: '🔴' },
    cold: { color: '#3d8bcc', glow: 'rgba(61, 139, 204, 0.35)', label: 'Cold Current', emoji: '🔵' },
    wind: { color: '#4aab6a', glow: 'rgba(74, 171, 106, 0.3)', label: 'Wind Pattern', emoji: '🌬️' }
};

export default function WineMap({ regions, onRegionHover, onRegionClick, onEmptyClick, showCurrents }) {
    const center = [35.0, 10.0];
    const zoom = 2.5;

    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, { icon: defaultIcon });
    };

    const onEachFeature = (feature, layer) => {
        layer.bindTooltip(`<div class="wine-map-tooltip">${feature.properties.name}</div>`, {
            sticky: true,
            direction: 'top',
            offset: [0, -20],
            opacity: 1
        });

        layer.on({
            mouseover: (e) => {
                const trgt = e.target;
                trgt.setIcon(hoverIcon);
                if (onRegionHover) onRegionHover(feature.properties);
            },
            mouseout: (e) => {
                const trgt = e.target;
                trgt.setIcon(defaultIcon);
                if (onRegionHover) onRegionHover(null);
            },
            click: (e) => {
                if (e.originalEvent && e.originalEvent.stopPropagation) {
                    e.originalEvent.stopPropagation();
                }
                if (onRegionClick) onRegionClick(feature.properties);
            }
        });
    };

    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <MapContainer
                center={center}
                zoom={zoom}
                minZoom={2}
                maxZoom={12}
                maxBounds={[[-85, -180], [85, 180]]}
                maxBoundsViscosity={1.0}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
            >
                {onEmptyClick && <MapEvents onEmptyClick={onEmptyClick} />}

                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Voyager (Light)">
                        <TileLayer
                            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            noWrap={true}
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite (Esri Imagery)">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            noWrap={true}
                            maxZoom={17}
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Terrain (OpenTopoMap)">
                        <TileLayer
                            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                            noWrap={true}
                            maxZoom={17}
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                {/* Ocean Currents & Wind Overlays */}
                {showCurrents && oceanCurrents.map((c, i) => {
                    const cfg = styleConfig[c.type];
                    return (
                        <React.Fragment key={i}>
                            {/* Glow layer behind */}
                            <Polyline
                                positions={c.path}
                                pathOptions={{
                                    color: cfg.glow,
                                    weight: c.type === 'wind' ? 8 : 12,
                                    opacity: 0.5,
                                    lineCap: 'round',
                                    lineJoin: 'round',
                                    dashArray: c.type === 'wind' ? '6, 10' : undefined,
                                    interactive: false
                                }}
                            />
                            {/* Main line */}
                            <Polyline
                                positions={c.path}
                                pathOptions={{
                                    color: cfg.color,
                                    weight: c.type === 'wind' ? 2 : 3,
                                    opacity: 0.85,
                                    lineCap: 'round',
                                    lineJoin: 'round',
                                    dashArray: c.type === 'wind' ? '8, 6' : undefined,
                                    className: 'animated-current-line'
                                }}
                            >
                                <Tooltip sticky className="current-tooltip">
                                    <div style={{ padding: '4px 2px', minWidth: '180px', maxWidth: '260px' }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: cfg.color, marginBottom: '2px' }}>
                                            {cfg.emoji} {c.name}
                                        </div>
                                        <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                                            {cfg.label}
                                        </div>
                                        <div style={{ fontSize: '0.78rem', lineHeight: 1.5, color: '#444' }}>
                                            {c.desc}
                                        </div>
                                    </div>
                                </Tooltip>
                            </Polyline>
                            <AnimatedArrows path={c.path} color={cfg.color} type={c.type} />
                        </React.Fragment>
                    );
                })}

                {regions && regions.features && (
                    <GeoJSON
                        data={regions}
                        pointToLayer={pointToLayer}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
}

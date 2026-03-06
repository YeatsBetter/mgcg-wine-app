import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Polyline, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Wine, Waves } from 'lucide-react';
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

// Arrow decorator for polylines
function ArrowDecorator({ path, color }) {
    const map = useMap();
    useEffect(() => {
        if (!path || path.length < 2) return;
        const arrows = [];
        // Place arrows every few segments
        const step = Math.max(1, Math.floor(path.length / 3));
        for (let i = step; i < path.length; i += step) {
            const prev = path[i - 1];
            const curr = path[i];
            const angle = Math.atan2(curr[0] - prev[0], curr[1] - prev[1]) * (180 / Math.PI);
            const icon = L.divIcon({
                html: `<div style="color:${color};font-size:16px;transform:rotate(${-angle + 90}deg);opacity:0.8;text-shadow:0 0 3px rgba(0,0,0,0.3);">➤</div>`,
                className: 'arrow-decorator',
                iconSize: [16, 16],
                iconAnchor: [8, 8]
            });
            const marker = L.marker(curr, { icon, interactive: false }).addTo(map);
            arrows.push(marker);
        }
        return () => arrows.forEach(m => map.removeLayer(m));
    }, [map, path, color]);
    return null;
}

const currentColors = {
    warm: '#e05555',
    cold: '#4488cc',
    wind: '#66aa66'
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

                <TileLayer
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    noWrap={true}
                />

                {/* Ocean Currents & Wind Overlays */}
                {showCurrents && oceanCurrents.map((c, i) => {
                    const color = currentColors[c.type];
                    const dashArray = c.type === 'wind' ? '8, 8' : undefined;
                    return (
                        <React.Fragment key={i}>
                            <Polyline
                                positions={c.path}
                                pathOptions={{
                                    color: color,
                                    weight: c.type === 'wind' ? 2.5 : 3.5,
                                    opacity: 0.7,
                                    dashArray: dashArray,
                                    lineCap: 'round',
                                    lineJoin: 'round'
                                }}
                            >
                                <Tooltip sticky>
                                    <div style={{ maxWidth: '240px' }}>
                                        <strong style={{ color: color }}>
                                            {c.type === 'warm' ? '🔴' : c.type === 'cold' ? '🔵' : '🌬️'} {c.name}
                                        </strong>
                                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', marginTop: 2 }}>
                                            {c.type === 'wind' ? 'Wind Pattern' : c.type === 'warm' ? 'Warm Current' : 'Cold Current'}
                                        </span>
                                        <p style={{ margin: '6px 0 0', fontSize: '0.8rem', lineHeight: 1.4 }}>{c.desc}</p>
                                    </div>
                                </Tooltip>
                            </Polyline>
                            <ArrowDecorator path={c.path} color={color} />
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

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Wine } from 'lucide-react';

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
            // We check if we clicked on the marker container instead of 'path'
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

export default function WineMap({ regions, onRegionHover, onRegionClick, onEmptyClick }) {
    const center = [35.0, 10.0];
    const zoom = 2.5;

    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, { icon: defaultIcon });
    };

    const onEachFeature = (feature, layer) => {
        // Add custom tooltip
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
                // Pass event back to App so hover information triggers
                if (onRegionHover) onRegionHover(feature.properties);
            },
            mouseout: (e) => {
                const trgt = e.target;
                trgt.setIcon(defaultIcon);
                // Clear hover so App fallback drops to null (or keeps selectedRegion)
                if (onRegionHover) onRegionHover(null);
            },
            click: (e) => {
                // Prevent bubbling which causes App.jsx background clicks to fire and clear Selection
                if (e.originalEvent && e.originalEvent.stopPropagation) {
                    e.originalEvent.stopPropagation();
                }
                if (onRegionClick) onRegionClick(feature.properties);
            }
        });
    };

    const maxBounds = [
        [-90, -180],
        [90, 180]
    ];

    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <MapContainer
                center={center}
                zoom={zoom}
                minZoom={2}
                maxZoom={12}
                maxBounds={maxBounds}
                maxBoundsViscosity={1.0}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
            >
                {onEmptyClick && <MapEvents onEmptyClick={onEmptyClick} />}

                {/* Bright/Clean Base Map */}
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    noWrap={true}
                />

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

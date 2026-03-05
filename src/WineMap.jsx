import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

// Utility component to handle clicks on the empty map areas
function MapEvents({ onEmptyClick }) {
    const map = useMap();
    useEffect(() => {
        const handleClick = (e) => {
            // Only fire if the click was directly on the map container
            if (e.originalEvent && !e.originalEvent.defaultPrevented) {
                onEmptyClick();
            }
        };
        map.on('click', handleClick);
        return () => map.off('click', handleClick);
    }, [map, onEmptyClick]);
    return null;
}

export default function WineMap({ regions, onRegionHover, onRegionClick, onEmptyClick }) {
    // Center map on Europe roughly to show France/Italy, but zoom far out
    const center = [35.0, 10.0];
    const zoom = 2.5;

    const getStyle = (feature) => {
        return {
            color: 'var(--accent-ruby)',
            weight: 2,
            opacity: 0.6,
            fillColor: 'var(--accent-ruby)',
            fillOpacity: 0.15,
            className: 'wine-region-polygon'
        };
    };

    const onEachFeature = (feature, layer) => {
        // Add custom tooltip
        layer.bindTooltip(`<div class="wine-map-tooltip">${feature.properties.name}</div>`, {
            sticky: true,
            direction: 'top',
            offset: [0, -10],
            opacity: 1
        });

        layer.on({
            mouseover: (e) => {
                const trgt = e.target;
                trgt.setStyle({
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.4,
                    fillColor: 'var(--accent-gold)',
                    color: 'var(--accent-gold)'
                });
                trgt.bringToFront();
                // Pass event back to App so hover information triggers
                if (onRegionHover) onRegionHover(feature.properties);
            },
            mouseout: (e) => {
                const trgt = e.target;
                trgt.setStyle(getStyle(feature));
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

    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <MapContainer
                center={center}
                zoom={zoom}
                minZoom={2}
                maxZoom={12}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
            >
                {onEmptyClick && <MapEvents onEmptyClick={onEmptyClick} />}

                {/* Bright/Clean Base Map */}
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {regions && regions.features && (
                    <GeoJSON
                        data={regions}
                        style={getStyle}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
}

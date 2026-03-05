import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';

export default function WineMap({ regions, onRegionHover, onRegionClick }) {
    // Center map on Europe roughly to show France/Italy, but zoom far out enough to pan to US.
    const center = [40.0, -10.0];
    const zoom = 3;

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
                if (onRegionHover) onRegionHover(feature.properties);
            },
            mouseout: (e) => {
                const trgt = e.target;
                // Check if tooltip is being closed (to not override click selections)
                trgt.setStyle(getStyle(feature));
                if (onRegionHover) onRegionHover(null);
            },
            click: (e) => {
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

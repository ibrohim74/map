import React, { useEffect, useState, useRef } from 'react'; // useRef ni import qiling
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const customMarkerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = (props) => {
    const { selectPosition, setSelectPosition } = props;
    const [clicked, setClicked] = useState(false);
    const mapRef = useRef(null); // map o'zgaruvchisini useRef() orqali tanlang

    const search = async () => {
        const params = {
            q: props.searchText,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
        };
        const queryString = new URLSearchParams(params).toString();
        try {
            const res = await axios.get(`${NOMINATIM_BASE_URL}${queryString}`);
            props.setListPlace(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchLocationName = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
            );
            const data = await response.json();
            const name = data.display_name;
            return name;
        } catch (error) {
            console.error("Error fetching location name:", error);
            alert('error: ' + error)
        }
    };

    const handleMarkerDrag = (e) => {
        const newLocation = e.target.getLatLng();
        fetchLocationName(newLocation.lat, newLocation.lng).then((r) => {
            setSelectPosition({
                ...selectPosition,
                display_name: r,
                lat: newLocation.lat,
                lon: newLocation.lng,
            });
        });
    };

    useEffect(() => {
        search();
        if (clicked) {
            setClicked(false);
        }
    }, [props.searchText, selectPosition, clicked]);

    useEffect(() => {
        const map = mapRef.current; // map o'zgaruvchisini mapRef.current orqali aniqlang
        if (map && selectPosition && selectPosition.lat && selectPosition.lon) {
            map.flyTo([selectPosition.lat, selectPosition.lon], map.getZoom());
        }
    }, [selectPosition]);

    return (
        <div>
            <MapContainer
                ref={mapRef} // map ni ref propertiyasiga qo'shing
                zoom={9}
                center={selectPosition && selectPosition.lat && selectPosition.lon ? [selectPosition.lat, selectPosition.lon] : [41.34557, 69.284599]}
                style={props.style}
            >
                <TileLayer
                    attribution="by khasanov_ibroxim"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />
                <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
                {selectPosition && selectPosition.lat && selectPosition.lon && (
                    <Marker
                        position={[selectPosition.lat, selectPosition.lon]}
                        icon={customMarkerIcon}
                        draggable={true}
                        eventHandlers={{ dragend: handleMarkerDrag }}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default Map;
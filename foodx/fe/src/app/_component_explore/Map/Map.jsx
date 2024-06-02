import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import StarRating from '@/app/_helpers/StarRating';

// Default icon URLs provided by Leaflet
const defaultIconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const defaultIconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
const defaultIconShadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

const Map = ({ center,restaurant,width,height }) => {
  const mapRef = useRef(null);
  const defaultZoom = 16;

  const generateStars = (rating) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = fullStar.repeat(Math.floor(rating));
    const emptyStars = emptyStar.repeat(5 - Math.floor(rating));
    return `${fullStars}${emptyStars}`;
  };

  const generatePopupContent = (restaurant) => {
    if (!restaurant) {
      return 'You are here!';
    }
    <div>
      
    </div>

    return `
      <div className="">
        <img src="${restaurant.image}" alt="${restaurant.restaurant_name}" style="width:100%;height:auto;"/>
        <h3 class=" font-bold text-xl mt-1">${restaurant.restaurant_name}</h3>
        <span class="m-0 text-yellow-500">${generateStars(restaurant.rate)}</span>
      </div>
    `;
  };

  useEffect(() => {
    if (mapRef.current === null) {
      // Initialize the map with the default zoom level
      mapRef.current = L.map('map').setView([center.lat, center.lng], defaultZoom);

      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Define the custom icon using the default icon URLs
      const defaultIcon = L.icon({
        iconUrl: defaultIconUrl,
        iconRetinaUrl: defaultIconRetinaUrl,
        shadowUrl: defaultIconShadowUrl,
        iconSize: [25, 41], // Size of the icon
        iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
        shadowSize: [41, 41], // Size of the shadow
        shadowAnchor: [13, 41], // Point of the shadow which will correspond to marker's location
        popupAnchor: [0, -41] // Point from which the popup should open relative to the iconAnchor
      });

      // Add a marker to the map using the custom icon
      L.marker([center.lat, center.lng], { icon: defaultIcon }).addTo(mapRef.current)
        .bindPopup('You are here!')
        .openPopup();
    } else {
      // Update the map view with the default zoom level
      mapRef.current.setView([center.lat, center.lng], defaultZoom);

      // Clear all markers
      mapRef.current.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      // Add a new marker to the map using the custom icon
      const defaultIcon = L.icon({
        iconUrl: defaultIconUrl,
        iconRetinaUrl: defaultIconRetinaUrl,
        shadowUrl: defaultIconShadowUrl,
        iconSize: [25, 41], // Size of the icon
        iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
        shadowSize: [41, 41], // Size of the shadow
        shadowAnchor: [13, 41], // Point of the shadow which will correspond to marker's location
        popupAnchor: [0, -41] // Point from which the popup should open relative to the iconAnchor
      });

      L.marker([center.lat, center.lng], { icon: defaultIcon }).addTo(mapRef.current)
        .bindPopup(generatePopupContent(restaurant))
        .openPopup();
    }
  }, [center]);

  return <div id="map" style={{ height: height, width: width }}></div>;
};

export default Map;

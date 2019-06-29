import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import './App.css';

const App = () => (
  <Map className="map" center={[45, -122]} zoom={5}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    />
  </Map>
);

export default App;

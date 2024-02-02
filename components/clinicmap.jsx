import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import { BiMap } from "react-icons/bi";

const ClinicMap = ({ position }) => {

  let Icon;

  function createSvgIcon(svg) {

    L = require('leaflet');
    Icon = L.Icon;

    const svgString = ReactDOMServer.renderToString(svg);
    const iconUrl = new URL(`data:image/svg+xml;base64,${btoa(svgString)}`);

    if (Icon) {
      return new Icon({
        iconUrl: iconUrl.href,
        iconSize: [30, 30]
      });
    }
    return null;
  }

  const beerIcon = createSvgIcon(<BiMap color='red' />);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={beerIcon}>
        <Popup>
          A localização da clínica. <br /> {position.join(', ')}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ClinicMap;

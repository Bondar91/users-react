import React, {useEffect, useState} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import './UserMap.css';

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

function UserMap({ localization }) {
  const [position, setPosition] = useState(null);
  const [zoom] = useState(8);

  useEffect(() => {
    console.log(localization)
    localization &&  setPosition([
      parseFloat(localization.latitude),
      parseFloat(localization.longitude)
    ]);
  }, [localization])

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return  (
    position !== null &&
      <Map center={position} zoom={zoom} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customMarker} ref={initMarker}>
          <Popup>
             Moja pozycja
          </Popup>
        </Marker>
      </Map>
  )
}

export default UserMap;
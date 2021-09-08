import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent } from 'react-leaflet';
import * as L from "leaflet";
import Location  from './icon-location.svg';
import 'leaflet/dist/leaflet.css';

function TheMap({area_arr}) {  
  let loveIcon = L.icon({
    iconUrl: Location,
    iconRetinaUrl: Location,
    iconAnchor: [5, 25],
    popupAnchor: [20, -44],
    iconSize: [35, 35],
  })
  
  return (            
    <MapContainer center={area_arr} zoom={15} zoomControl={false} scrollWheelZoom={true}  style={{height : '40rem', zIndex: '0'}} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      <Marker position={area_arr} icon={loveIcon} >
          {/* <img src={Location}/> */}
      </Marker>
    </MapContainer>
  )
}

function BodyMap({area_arr, funcAPI, clearCodinates}){            
    if(area_arr.length > 0){
      return <TheMap area_arr={area_arr} />
    } else {
      return (
        <div className="mt-44 m-auto">
          <h1 className="text-3xl">Loading...</h1>
        </div>
        )
    }
    
}

export default BodyMap;








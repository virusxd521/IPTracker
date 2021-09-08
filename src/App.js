import Header from "./Header";
import React, { useState, useEffect } from 'react';
import Table from './Table';
import BodyMap from './BodyMap';

function App() {
  // The API of the Geo API 
  const API_KEY = 'd1ad50e2f05e43cc80c67658bb46f37c';

  // State Hooks
  const [client_ip, setInputIP] = useState('');
  const [client_location, setInputLocation] = useState('');
  const [client_timeZone, setInputTimezone] = useState('');
  const [client_Isp, setIsp] = useState('');
  const [area_arr, setArea] = useState([]);
  
  // add an error check to see if there are server error
  const funcAPI = (ip="") => {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`)
    .then(response => {
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      
      setInputIP(data.ip ? data.ip : "Could not fetch data...");
      setInputLocation(`${data.city} ${data.country_name}` ? `${data.city} ${data.country_name}` : "Could not fetch data..." );
      setInputTimezone(data.time_zone.current_time ? data.time_zone.current_time : "Could not fetch data...");
      setIsp(data.isp ? data.isp : "Could not fetch data...");
      // Test to see where this state  fits in
      setArea(arr => [...arr, data.latitude, data.longitude]);
    }).catch(error => console.log(error))
  }
  
  useEffect(() => {
    funcAPI()
  },[])

  // Clear The cordinate aftare a new call API
  const clearCodinates = () => {
    setArea([]);
  }

  return (
    <div className="flex flex-col">
      <Header client_ip={client_ip} funcAPI={funcAPI} clearCodinates={clearCodinates}  />
      <Table client_location={client_location} client_timeZone={client_timeZone} client_Isp={client_Isp} client_ip={client_ip} />
      <BodyMap funcAPI={funcAPI} area_arr={area_arr} clearCodinates={clearCodinates} />
    </div>
  );
}

export default App;

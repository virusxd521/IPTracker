import Header from "./Header";
import React, { useState, useEffect } from 'react';
import Table from './Table';
import BodyMap from './BodyMap';

function App() {
  // The API of the Geo API 
  const API_KEY = 'c3d0ef33d811541bb8ad79b6aadb7b6d';

  // State Hooks
  const [client_ip, setInputIP] = useState('');
  const [client_location, setInputLocation] = useState('');
  const [client_continent, setInputContinante] = useState('');
  const [client_locationEmoji, setClientEmoji] = useState('');
  const [area_arr, setArea] = useState([]);
  
  // add an error check to see if there are server error
  const funcAPI = (ip="check") => {
    fetch(`https://api.ipstack.com/${ip}?access_key=${API_KEY}`)
    .then(response => {
      if(!response.ok){
        throw Error(response.statusText);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setInputIP(data.ip ? data.ip : "Could not fetch data...");
      setInputLocation(`${data.city} ${data.country_name}` ? `${data.city} ${data.country_name}` : "Could not fetch data..." );
      setInputContinante(data.continent_name ? data.continent_name : "Could not fetch data...");
      setClientEmoji(data.location.country_flag_emoji ? data.location.country_flag_emoji : "Could not fetch data...");
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
      <Table client_location={client_location} client_continent={client_continent} client_locationEmoji={client_locationEmoji} client_ip={client_ip} />
      <BodyMap funcAPI={funcAPI} area_arr={area_arr} clearCodinates={clearCodinates} />
    </div>
  );
}

export default App;

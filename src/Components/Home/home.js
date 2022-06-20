import React from 'react';
import './Home.css';
import Card from './WeatherCard/Card';

function Home() {
  return (
    <div className="home">
      <div className="main-head">
        <div className="main-time">
          <h1 className="region">Nairobi</h1>
          <h2 className="date">September 7</h2>
        </div>

        <div className="search-box">
          <input className="search-input" placeholder="Search city" />
        </div>
      </div>

      <Card />

      <div className="list-countries">
        <div>
          Kampala
        </div>
        <div>
          Kigali
        </div>
        <div>
          Dar-Es-Salaam
        </div>
        <div>
          Kinshasa
        </div>
      </div>
    </div>
  );
}

export default Home;

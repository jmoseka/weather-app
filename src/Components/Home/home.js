import React from 'react';
import Card from './WeatherCard/Card';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="main-head">
        <div className="main-time">
          <div>
            <h1 className="region">Nairobi</h1>
            <h2 className="date">September 7</h2>
          </div>
        </div>
        <div className="search-box">
          <input className="search-input" placeholder="Search city" />
        </div>
      </div>

      <Card />

    </div>
  );
}

export default Home;

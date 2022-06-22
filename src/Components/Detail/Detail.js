import React from 'react';
import Card from './WeatherCard/Card';

function Detail() {
  return (
    <div>
      <div className="main-time">
        <div>
          <h1 className="region">Nairobi</h1>
          <h2 className="date">September 7</h2>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default Detail;

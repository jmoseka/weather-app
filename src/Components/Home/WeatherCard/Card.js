import React from 'react';
import './Card.css';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri';
import { BsSunrise, BsSunset } from 'react-icons/bs';

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-body-2">
          <ul className="weather-list">
            <li>
              <div className="card-icon"><FaTemperatureHigh /></div>
              <p>Temperature</p>
            </li>
            <li>
              <div className="card-icon"><WiHumidity /></div>
              <p>Humidity</p>

            </li>
            <li className="card-icon">
              <div className="card-icon"><RiWindyFill /></div>
              <p>Windy</p>

            </li>
          </ul>

          <div className="sun-display">
            <div className="sunrise">
              <p>Sunrise</p>
              <BsSunrise />
            </div>
            <div className="sunset">
              <p>Sunset</p>
              <BsSunset />
            </div>
          </div>

        </div>
      </div>

      <section className="cities">
        <div className="card-country">
          Kamplala
        </div>
        <div className="card-country">
          Dar-Es-Salaam
        </div>
        <div className="card-country">
          Kigali
        </div>
        <div className="card-country">
          Bunjumbura
        </div>
        <div className="card-country">
          Kinshasa
        </div>
        <div className="card-country">
          Addis Ababa
        </div>
      </section>
    </div>
  );
}

export default Card;

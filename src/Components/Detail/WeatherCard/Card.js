import './Card.css';
import React from 'react';
import { WiHumidity } from 'react-icons/wi';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { RiWindyFill } from 'react-icons/ri';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import moment from 'moment';

function Card(props) {
  const p = props;
  const {
    temp, humidity, windSpeed, sunrise, sunset, timezone,
  } = p.props;

  const convertKelToCelcious = (k) => {
    const number = parseInt(k, 10);
    const result = (number - 273.15).toString();
    const reply = Math.trunc(result);
    return reply.toString();
  };

  const convertTime = (sunrise, timezone) => {
    const x = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('HH:mm a');
    return x;
  };

  return (
    <div>
      <div className="card">
        <div className="card-body-2">
          <ul className="weather-list">
            <li>
              <div className="card-icon"><TbTemperatureCelsius /></div>
              <p className="card-text">Temperature :</p>
              <p>{convertKelToCelcious(temp)}</p>
            </li>
            <li>
              <div className="card-icon"><WiHumidity /></div>
              <p className="card-text">Humidity :</p>
              <p>{`${humidity} %`}</p>

            </li>
            <li className="card-icon">
              <div className="card-icon"><RiWindyFill /></div>
              <p className="card-text">Wind Speed :</p>
              <p>{ `${windSpeed} metre/sec`}</p>

            </li>
          </ul>

          <div className="sun-display">
            <div className="sunrise">
              <p className="sunrise-text">Sunrise</p>
              <p className="sun-display-icon"><BsSunrise /></p>
              <p>{convertTime(sunrise, timezone)}</p>
            </div>
            <div className="sunset">
              <p className="sunrise-text">Sunset</p>
              <p className="sun-display-icon"><BsSunset /></p>
              <p>{convertTime(sunset, timezone)}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;

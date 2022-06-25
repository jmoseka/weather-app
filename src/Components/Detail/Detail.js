import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Weather';

import Card from './WeatherCard/Card';
import './Detail.css';

function Detail() {
  const location = useLocation();
  const { capital } = location.state;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(capital));
  }, []);
  const weatherData = useSelector((state) => state.weatherData);

  const {
    dt, desc, daily, timezone,
  } = weatherData;

  const dateObject = new Date(dt * 1000 - (timezone * 1000));
  const month = dateObject.toDateString();

  const getDay = (datetime) => {
    const dayObject = new Date(datetime * 1000 - (timezone * 1000));
    const day = dayObject.toLocaleString('en-US', { weekday: 'long' });
    return day;
  };

  /* * Get temperature in degree celsious  */
  const convertKelToCelcious = (a, b) => {
    const min = parseInt(a, 10);
    const max = parseInt(b, 10);
    const avg = (min + max) / 2;
    const result = (avg - 273.15);
    const value = Math.trunc(result);
    return value.toString();
  };

  const firstLetterUppercase = (str) => {
    const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize;
  };

  return (
    <div className="detail-pg">
      <div className="main-time">
        <h1 className="region">{capital}</h1>
        <h2 className="date">{`${month}`}</h2>
      </div>
      <p className="weather-descs">{`The weather now is ${desc}`}</p>
      <Card props={weatherData} />

      <div className="weekly-update">
        <h3 className="weekly-update-title">Weekly Update</h3>
        <ul className="weeks">
          { daily === undefined ? null
            : daily.map((el) => (

              <li key={el.id}>

                <div className="weekly-group">
                  <img src={`https://openweathermap.org/img/wn/${el.icon}.png`} alt="weather icon" />
                  <p className="weekly-desc">{firstLetterUppercase(el.desc)}</p>
                </div>

                <div className="weekly-temp">
                  <p>
                    { convertKelToCelcious(el.min, el.max)}
                    {' '}
                    C
                  </p>
                </div>

                <p className="day">
                  {getDay(el.dt)}
                </p>

              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;

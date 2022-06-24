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
    dt, desc, daily,
  } = weatherData;

  return (
    <div className="detail-pg">
      <div className="main-time">
        <h1 className="region">{capital}</h1>
        <h2 className="date">{dt}</h2>
      </div>
      <p className="weather-descs">{`The weather today is ${desc}`}</p>
      <Card props={weatherData} />

      <div className="weekly-update">
        <h3>Weekly Update</h3>
        <ul className="weeks">
          { daily === undefined ? null
            : daily.map((el) => (
              <li key={el.id}>

                <div className="weekly-group">
                  <div className="weekly-icon">
                    <img src={`https://openweathermap.org/img/wn/${el.icon}.png`} alt="weather icon" />
                  </div>
                  <div className="weekly-temp">
                    {(el.min) + (el.max) / 2}
                  </div>
                </div>

                <div className="day">
                  Monday
                </div>

              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;

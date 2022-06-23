import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router';
import { TiWeatherSunny } from 'react-icons/ti';
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
  console.log(weatherData);

  return (
    <div className="detail-pg">
      <div className="main-time">
        <h1 className="region">Nairobi</h1>
        <h2 className="date">September 7</h2>
      </div>
      <p>The weather is broken clouds</p>
      <Card />

      <div className="weekly-update">
        <h3>Weekly Update</h3>
        <ul className="weeks">
          <li>
            <div className="weekly-group">
              <p className="weekly-icon">
                <TiWeatherSunny />
              </p>
              <p className="weekly-temp">
                21C
              </p>
            </div>

            <p className="day">
              Monday
            </p>
          </li>

          <li>
            <div className="weekly-group">
              <div className="weekly-icon">
                <TiWeatherSunny />
              </div>
              <div className="weekly-temp">
                21C
              </div>
            </div>

            <div className="day">
              Monday
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Detail;

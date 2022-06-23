import './Card.css';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri';
import { BsSunrise, BsSunset } from 'react-icons/bs';

// import { useSelector } from 'react-redux';
// import { fetchData } from '../../../Redux/Weather';

function Card() {
  // const state = useSelector((state) => state);
  // console.log(state);

  return (
    <div>
      <div className="card">
        <div className="card-body-2">
          <ul className="weather-list">
            <li>
              <div className="card-icon"><FaTemperatureHigh /></div>
              <p className="card-text">Temperature</p>
            </li>
            <li>
              <div className="card-icon"><WiHumidity /></div>
              <p className="card-text">Humidity</p>

            </li>
            <li className="card-icon">
              <div className="card-icon"><RiWindyFill /></div>
              <p className="card-text">Windy</p>

            </li>
          </ul>

          <div className="sun-display">
            <div className="sunrise">
              <p className="sunrise-text">Sunrise</p>
              <p className="sun-display-icon"><BsSunrise /></p>
            </div>
            <div className="sunset">
              <p className="sunrise-text">Sunset</p>
              <p className="sun-display-icon"><BsSunset /></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;

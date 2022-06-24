import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const GET_DATA = 'weather-app/weatherReducer/getData';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = (location) => async (dispatch) => {
  const coodUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&i&appid=5709f5315143352b497276f1f19fb6bc`;
  const responseCord = await axios.get(coodUrl);
  const { lon, lat } = responseCord.data.coord;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=5709f5315143352b497276f1f19fb6bc`;
  const response = await axios.get(url);
  const data = await response.data;
  const weatherData = [];
  const obj = data;
  const objDaily = obj.daily;
  const daily = [];

  const {
    // eslint-disable-next-line camelcase
    dt, temp, humidity, wind_speed, sunrise, sunset,
  } = obj.current;

  const { description } = obj.current.weather[0];

  try {
    objDaily.forEach((el) => {
      daily.push({
        min: el.temp.min,
        max: el.temp.max,
        id: uuidv4(),
        main: el.weather[0].main,
        desc: el.weather[0].description,
        icon: el.weather[0].icon,
      });
    });
  } catch (error) {
    <h2>{error}</h2>;
  }

  weatherData.dt = dt;
  weatherData.temp = temp;
  weatherData.humidity = humidity;
  // eslint-disable-next-line camelcase
  weatherData.windSpeed = wind_speed;
  weatherData.sunrise = sunrise;
  weatherData.sunset = sunset;
  weatherData.daily = daily;
  weatherData.desc = description;
  try {
    dispatch(getData(weatherData));
  } catch (error) {
    <h2>{error}</h2>;
  }
};

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

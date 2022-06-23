import axios from 'axios';

const GET_DATA = 'weather-app/weatherReducer/getData';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = (location) => async () => {
  const coodUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&i&appid=5709f5315143352b497276f1f19fb6bc`;
  const responseCord = await axios.get(coodUrl);
  const { lon, lat } = responseCord.data.coord;
  console.log('name: ', responseCord.data.name, 'lon', lon, ' lat', lat);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=5709f5315143352b497276f1f19fb6bc`;
  const response = await axios.get(url);
  const data = await response.data;
  console.log(data);

  /* try {
    const weatherData = [];
    Object.entries(data).forEach((el) => {
      weatherData.push({
        item_id: el[0],
        ...el[1][0],
      });
    });
    dispatch(getBook(books));
  } catch (error) {
    <h2>{error}</h2>;
  } */
};

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

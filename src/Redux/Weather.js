import axios from 'axios';

const GET_DATA = 'weather-app/weatherReducer/getData';

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-1.28333&lon=36.81667&exclude=hourly,daily&appid=5709f5315143352b497276f1f19fb6bc';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchBook = () => async () => {
  const response = await axios.get(url);
  const data = await response.data;
  console.log(data);
  /* const weatherData = [];
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

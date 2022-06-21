import axios from 'axios';

const GET_CITY = 'weather-app/cityReducer/getCities';

const url = 'https://restcountries.com/v3.1/region/africa';

export const getCities = (payload) => ({
  type: GET_CITY,
  payload,
});

export const fetchCity = () => async () => {
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

export default function cityReducer(state = [], action) {
  switch (action.type) {
    case GET_CITY:
      return action.payload;
    default:
      return state;
  }
}

import axios from 'axios';

const GET_CITY = 'weather-app/cityReducer/getCities';

const url = 'https://restcountries.com/v3.1/region/africa';

export const getCities = (payload) => ({
  type: GET_CITY,
  payload,
});

export const fetchCity = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const cities = [];
  try {
    data.forEach((el) => {
      cities.push({
        country: el.name.common,
        flags: el.flags.png,
        capital: el.capital[0],
      });
    });
    dispatch(getCities(cities));
  } catch (error) {
    <h2>{error}</h2>;
  }
};

export default function cityReducer(state = [], action) {
  switch (action.type) {
    case GET_CITY:
      return action.payload;
    default:
      return state;
  }
}

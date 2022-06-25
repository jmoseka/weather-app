import cityReducer, { fetchCity, getCities } from '../Redux/Cities';

const action = (payload) => ({
  type: 'GET_CITY',
  payload,
});

describe('Should test weather reducer', () => {
  it('Should return an array on api call', async () => {
    const data1 = await fetchCity;
    expect(data1.length).toBe(0);
  });

  it('Should return an array on api call', () => {
    expect(getCities(action.payload)).toBeInstanceOf(Object);
  });
  it('Should return an array when fetch tasks in task reducer is called', () => {
    expect(cityReducer([], action)).toBeInstanceOf(Array);
  });
});

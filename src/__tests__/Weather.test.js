import weatherReducer, { fetchData, getData } from '../Redux/Weather';

const action = (payload) => ({
  type: 'GET_DATA',
  payload,
});

describe('Should test weather reducer', () => {
  it('Should return an array on api call', async () => {
    const data1 = await fetchData;
    expect(data1.length).toBeGreaterThan(0);
  });

  it('Should return an array on api call', () => {
    expect(getData(action.payload)).toBeInstanceOf(Object);
  });
  it('Should return an array when fetch tasks in task reducer is called', () => {
    expect(weatherReducer([], action)).toBeInstanceOf(Array);
  });
});

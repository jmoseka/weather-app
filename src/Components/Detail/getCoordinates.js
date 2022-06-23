const getCoordinates = async (location) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&i&appid=5709f5315143352b497276f1f19fb6bc`;
  const data = await fetch(baseUrl);
  const result = data.json();
  const reply = await result;
  return reply.coord;
};
export default getCoordinates;

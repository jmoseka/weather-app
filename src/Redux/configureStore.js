import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './Cities';
import weatherReducer from './Weather';

const rootReducer = combineReducers({
  weatherData: weatherReducer,
  cityData: cityReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './Weather';

const rootReducer = combineReducers({
  weatherData: weatherReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

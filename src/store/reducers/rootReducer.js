import { combineReducers } from 'redux';
import { form } from './formReducer';
import { weather } from './weatherReducer';

export default combineReducers({
  form,
  weather
});
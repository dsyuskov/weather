import { combineReducers } from 'redux';
import weather from './weather';
import forecast from './forecast';
import controlPanel from './controlPanel';

export default combineReducers({
  weather,
  forecast,
  controlPanel,
});

import { combineReducers } from 'redux';
import weather from './weather';
import forecast from './forecast';
import controlPanel from './controlPanel';
import coordByIp from './coordByIp';

export default combineReducers({
  weather,
  forecast,
  controlPanel,
  coordByIp,
});

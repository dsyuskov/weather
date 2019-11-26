import { combineReducers } from 'redux';
import weather from './weather';
import forecast from './forecast';
import controlPanel from './controlPanel';
import backgroundImage from "./backgroundImage";

export default combineReducers({
  weather,
  forecast,
  controlPanel,
  backgroundImage,
});

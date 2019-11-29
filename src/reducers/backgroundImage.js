import { getCurrentSeason, getTimesOfDay } from '../utils/service';
import {
  GET_BACKGROUND_REQUEST,
  GET_BACKGROUND_SUCCESS,
  GET_BACKGROUND_FAILTURE,
  GET_WEATHER_FOR_BACKGROUND,
} from '../actions/backgroundImage';

const initState = {
  backgroundImage: '',
  timesOfDay: getTimesOfDay(),
  season: getCurrentSeason(),
  weatherForBackground: '',
  isRequestBackgroundImage: false,
  isErrorBackgroundImage: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_BACKGROUND_REQUEST: {
      return {
        ...state,
        isRequestBackgroundImage: action.payload,
      };
    }
    case GET_BACKGROUND_SUCCESS: {
      return {
        ...state,
        backgroundImage: action.payload,
      };
    }
    case GET_BACKGROUND_FAILTURE: {
      return {
        ...state,
        isErrorBackgroundImage: action.payload,
      };
    }
    case GET_WEATHER_FOR_BACKGROUND: {
      return {
        ...state,
        weatherForBackground: action.payload,
      };
    }
    default:
  }
  return state;
}

import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILTURE,
} from '../actions/weather';

const initState = {
  weather: '',
  isRequestWeather: false,
  isError: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...state,
        isRequestWeather: action.payload,
      };
    }
    case GET_WEATHER_FAILTURE: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    default:
  }
  return state;
}

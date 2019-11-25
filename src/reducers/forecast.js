import {
  GET_WEATHER_FORECAST_REQUEST,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_FAILTURE,
  } from '../actions/forecast';

const initState = {
  forecast: '',
  isRequestForecast: false,
  isErrorForecast: false
}

export default function(state = initState, action) {
  console.log('forecast',action);
  switch (action.type) {
    case GET_WEATHER_FORECAST_REQUEST: {
      return {
        ...state,
        isRequestForecast: action.payload
      }
    }
    case GET_WEATHER_FORECAST_FAILTURE: {
      return {
        ...state,
        isErrorForecast: action.payload
      }
    }
    case GET_WEATHER_FORECAST_SUCCESS: {
      return {
        ...state,
        forecast: action.payload
      }
    }
    default:
  }
  return state;
}

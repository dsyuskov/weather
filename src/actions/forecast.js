export const GET_WEATHER_FORECAST_REQUEST  = 'GET_WEATHER_FORECAST_REQUEST';
export const GET_WEATHER_FORECAST_SUCCESS  = 'GET_WEATHER_FORECAST_SUCCESS';
export const GET_WEATHER_FORECAST_FAILTURE = 'GET_WEATHER_FORECAST_FAILTURE';

const PATH_BASE = 'http://api.openweathermap.org/data/2.5/';
const FORECAST = 'forecast';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const API_SYSTEM = 'units=metric';
const ID = 'id=';


export const getWeatherForecastRequest = bool => {
  return {
    type: GET_WEATHER_FORECAST_REQUEST,
    payload: bool
  }
}

export const getWeatherForecastSuccess = item => {
  console.log(item);
  return {
    type: GET_WEATHER_FORECAST_SUCCESS,
    payload: item
  }
}

export const getWeatherForecastFailture = bool => {
  return {
    type: GET_WEATHER_FORECAST_FAILTURE,
    payload: bool
  }
}


export const getWeatherForecast = city => {
  return (dispatch) => {
    dispatch(getWeatherForecastRequest(true));
    
    fetch(`${PATH_BASE}${FORECAST}?${API_KEY}&${API_SYSTEM}&${ID}${city}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherForecastRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        dispatch(getWeatherForecastFailture(false));
        dispatch(getWeatherForecastSuccess(item));
      })
      .catch(() => dispatch(getWeatherForecastFailture(true)))
      }
}

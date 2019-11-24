import { getWeatherForecast } from '../actions/forecast'
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILTURE = 'GET_WEATHER_FAILTURE';

const PATH_BASE = 'https://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=metric';
const PATH_SEARCH = 'q=';

export const getWeatherRequest = bool => {
  return {
    type: GET_WEATHER_REQUEST,
    payload: bool
  }
}

export const getWeatherSuccess = item => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: item
  }
}

export const getWeatherFailture = bool => {
  return {
    type: GET_WEATHER_FAILTURE,
    payload: bool
  }
}

export const getWeather = (city) => {
  return (dispatch) => {
    dispatch(getWeatherRequest(true));

    fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}&${PATH_SEARCH}${city}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        dispatch(getWeatherForecast(item.id));
        dispatch(getWeatherFailture(false));
        dispatch(getWeatherSuccess(preapreWeather(item)));
      })
      .catch(() => dispatch(getWeatherFailture(true)))
    }
}

export const getWeatherCoord = (lat, lon) => {
  return (dispatch) => {
    dispatch(getWeatherRequest(true));
    
    fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}&lat=${lat}&lon=${lon}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        dispatch(getWeatherForecast(item.id));
        dispatch(getWeatherFailture(false));
        dispatch(getWeatherSuccess(preapreWeather(item)));
      })
      .catch(() => dispatch(getWeatherFailture(true)))
    }
}

function preapreWeather(item) {
  const result = {
    id: item.id,
    date: item.dt,
    city: {
      name: item.name,
      country: item.sys.country,
      coord:{
        lat: item.coord.lat,
        lon: item.coord.lon,
      },
    },
    weather: {
      id: item.weather[0].id,
      temp: Math.round(item.main.temp),
      feels: Math.round(13.12 + 0.6215*Math.round(item.main.temp) - 11.37*Math.pow(item.wind.speed, 0.16) + 0.3965*Math.round(item.main.temp)*Math.pow(item.wind.speed, 0.16)),
      humidity: item.main.humidity,
      icon: item.weather[0].icon,
      wind: {
        deg: item.wind.deg,
        speed: item.wind.speed,
      },
    },
  }
  return result;
}

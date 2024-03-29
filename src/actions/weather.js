/* eslint-disable no-use-before-define */
import { getWeatherForecast } from './forecast';
import { getWeatherForBackground } from './backgroundImage';
import countries from '../utils/countries';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILTURE = 'GET_WEATHER_FAILTURE';

const PATH_BASE = 'https://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=metric';
const PATH_SEARCH = 'q=';

export const getWeatherRequest = (bool) => ({
  type: GET_WEATHER_REQUEST,
  payload: bool,
});

export const getWeatherSuccess = (item) => ({
  type: GET_WEATHER_SUCCESS,
  payload: item,
});

export const getWeatherFailture = (bool) => ({
  type: GET_WEATHER_FAILTURE,
  payload: bool,
});

export const getWeatherByCity = (city) => (dispatch) => {
  dispatch(getWeatherRequest(true));

  fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}&${PATH_SEARCH}${city}`)
    .then((response) => {
      if (!response.ok) {
        dispatch(getWeatherRequest(false));
        throw Error(response.statusText);
      }
      dispatch(getWeatherRequest(false));
      return response;
    })
    .then((response) => response.json())
    .then((item) => {
      dispatch(getWeatherForecast(item.id));
      dispatch(getWeatherForBackground(item.weather[0].main));
      dispatch(getWeatherFailture(false));
      dispatch(getWeatherSuccess(preapreWeather(item)));
    })

    .catch(() => dispatch(getWeatherFailture(true)));
};

export const getWeatherByCoord = (lat, lon) => async (dispatch) => {
  dispatch(getWeatherRequest(true));

  let coord = {
    lat,
    lon,
  };

  if (!lon) {
    coord = await getCoordsByIP();
  }

  fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}&lat=${coord.lat}&lon=${coord.lon}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(getWeatherRequest(false));
      return response;
    })
    .then((response) => response.json())
    .then((item) => {
      dispatch(getWeatherForecast(item.id));
      dispatch(getWeatherForBackground(item.weather[0].main));
      dispatch(getWeatherFailture(false));
      dispatch(getWeatherSuccess(preapreWeather(item)));
    })
    .catch(() => dispatch(getWeatherFailture(true)));
};

function preapreWeather(item) {
  const result = {
    id: item.id,
    date: item.dt,
    timezone: item.timezone,
    city: {
      name: item.name,
      country: countries[item.sys.country],
      coord: {
        lat: item.coord.lat,
        lon: item.coord.lon,
      },
    },
    weather: {
      id: item.weather[0].id,
      temp: Math.round(item.main.temp),
      feels: Math.round(13.12 + 0.6215
        * Math.round(item.main.temp) - 11.37 * (item.wind.speed ** 0.16) + 0.3965
        * Math.round(item.main.temp) * (item.wind.speed ** 0.16)),
      humidity: item.main.humidity,
      icon: item.weather[0].icon,
      wind: {
        deg: item.wind.deg,
        speed: item.wind.speed,
      },
    },
  };
  return result;
}

async function getCoordsByIP() {
  const PATH = 'https://ipinfo.io/';
  const KEY = 'token=0f3c2185f8d434';
  const response = await fetch(`${PATH}?${KEY}`);

  if (!response.ok) {
    throw new Error(`getCoordsByIP failed, HTTP status ${response.status}`);
  }

  const coords = await response.json();
  const stringCoord = coords.loc;
  const commaIndex = stringCoord.indexOf(',');

  return {
    lat: stringCoord.slice(0, commaIndex),
    lon: stringCoord.slice(commaIndex + 1),
  };
}

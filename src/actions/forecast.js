import { addSero } from '../utils/service';

export const GET_WEATHER_FORECAST_REQUEST = 'GET_WEATHER_FORECAST_REQUEST';
export const GET_WEATHER_FORECAST_SUCCESS = 'GET_WEATHER_FORECAST_SUCCESS';
export const GET_WEATHER_FORECAST_FAILTURE = 'GET_WEATHER_FORECAST_FAILTURE';

const PATH_BASE = 'https://api.openweathermap.org/data/2.5/';
const FORECAST = 'forecast';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=metric';
const ID = 'id=';

export const getWeatherForecastRequest = (bool) => ({
  type: GET_WEATHER_FORECAST_REQUEST,
  payload: bool,
});

export const getWeatherForecastSuccess = (item) => ({
  type: GET_WEATHER_FORECAST_SUCCESS,
  payload: item,
});

export const getWeatherForecastFailture = (bool) => ({
  type: GET_WEATHER_FORECAST_FAILTURE,
  payload: bool,
});

export const getWeatherForecast = (city) => (dispatch) => {
  dispatch(getWeatherForecastRequest(true));
  fetch(`${PATH_BASE}${FORECAST}?${API_KEY}&${UNITS}&${ID}${city}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(getWeatherForecastRequest(false));
      return response;
    })
    .then((response) => response.json())
    .then((items) => {
      dispatch(getWeatherForecastFailture(false));
      // eslint-disable-next-line no-use-before-define
      dispatch(getWeatherForecastSuccess(prepareForecast(items)));
    })
    .catch(() => dispatch(getWeatherForecastFailture(true)));
};

function prepareForecast(items) {
  const result = [];
  const countDaysOfForecast = 8;
  for (let i = 0; i < 3; i += 1) {
    const day = new Date();
    day.setDate(day.getDate() + i + 1);
    const dayToStr = `${day.getFullYear()}-${addSero(day.getMonth() + 1)}-${addSero(day.getDate())}`;
    result[i] = {
      weekDay: day.getDay(),
      // eslint-disable-next-line max-len
      temp: Math.round(items.list.filter((item) => item.dt_txt.includes(dayToStr)).reduce((sum, item) => sum + item.main.temp, 0) / countDaysOfForecast),
      icon: items.list.filter((item) => item.dt_txt.includes(`${dayToStr} 12:00:00`))[0].weather[0].icon,
    };
  }
  return result;
}

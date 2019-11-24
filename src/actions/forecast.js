export const GET_WEATHER_FORECAST_REQUEST  = 'GET_WEATHER_FORECAST_REQUEST';
export const GET_WEATHER_FORECAST_SUCCESS  = 'GET_WEATHER_FORECAST_SUCCESS';
export const GET_WEATHER_FORECAST_FAILTURE = 'GET_WEATHER_FORECAST_FAILTURE';

const PATH_BASE = 'http://api.openweathermap.org/data/2.5/';
const FORECAST = 'forecast';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=metric';
const ID = 'id=';

export const getWeatherForecastRequest = bool => {
  return {
    type: GET_WEATHER_FORECAST_REQUEST,
    payload: bool
  }
}

export const getWeatherForecastSuccess = item => {
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

export const getWeatherForecast = (city, units) => {
  return (dispatch) => {
    dispatch(getWeatherForecastRequest(true));
    fetch(`${PATH_BASE}${FORECAST}?${API_KEY}&${UNITS}&${ID}${city}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherForecastRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(items => {
        dispatch(getWeatherForecastFailture(false));
        dispatch(getWeatherForecastSuccess(prepareForecast(items)));
      })
      .catch(() => dispatch(getWeatherForecastFailture(true)))
    }
}

function prepareForecast(items) {
  const HOURS_TO_DAY = 24;
  const MINUTS_TO_HOURS = 3600;
  const MILLISECONDS_TO_MINUTS = 1000;
  const DAY = HOURS_TO_DAY * MINUTS_TO_HOURS * MILLISECONDS_TO_MINUTS;

  const TODAY = new Date().setUTCHours(12, 0, 0, 0);

  const NEXT_DAY = [];
  NEXT_DAY.push(new Date(TODAY + DAY).getTime());
  NEXT_DAY.push(new Date(TODAY + DAY * 2).getTime());
  NEXT_DAY.push(new Date(TODAY + DAY * 3).getTime());

  const forecastForThreeDays = items.list.filter((item) =>  NEXT_DAY.includes( item.dt * MILLISECONDS_TO_MINUTS ));

  const result = {};

  forecastForThreeDays.forEach( (item, i) => {
    result[i] = {
      weekDay: new Date(NEXT_DAY[i]).getDay(),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
    };
  });

  return  result;
};

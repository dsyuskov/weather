export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILTURE = 'GET_WEATHER_FAILTURE';

const MILLISECONDS_TO_MINUTS = 1000;

const PATH_BASE = 'http://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=';
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

export const getWeather = (city, units) => {
  console.log('GET_WEATHER')
  return (dispatch) => {
    dispatch(getWeatherRequest(true));
    
    fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}${units}&${PATH_SEARCH}${city}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        const data = {
          id: item.id,
          data: item.dt,
          city: {
            name: item.name,
            country: item.sys.country,
            coord:{
              lat: item.coord.lat,
              lon: item.coord.lon,
            },
          },
          weather: {
            temp: item.main.temp,
            humidity: item.main.humidity,
            wind: {
              deg: item.wind.deg,
              speed: item.wind.speed,
            },
          },
        }
        dispatch(getWeatherFailture(false))
        dispatch(getWeatherSuccess(data))
      })
      .catch(() => dispatch(getWeatherFailture(true)))
      }
}

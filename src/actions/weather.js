export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILTURE = 'GET_WEATHER_FAILTURE';

// const data = {
//   id: item.id,
//   city: {
//     name: item.name,
//     contry: item.sys.country,
//     coord:{
//       lat: item.coord.lat,
//       lon: item.coord.lon,
//     }
//   },
//   weather: {
//     temp: item.main.temp,
//     hidromity: item.main.hidromity,
//     wind: {
//       deg: item.wind.deg,
//       speed: item.wind.speed,
//     }
//   },
// }

//api.openweathermap.org/data/2.5/forecast?id=524901
//http://api.openweathermap.org/data/2.5/forecast?APPID=4cde7d0375b08d2f67501b6ce2451aea&id=579460
//http://api.openweathermap.org/data/2.5/weather?APPID=d5ecba2b149b9cdfb1fea656c735177d&g=balashov
//api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}
const PATH_BASE = 'http://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const FORECAST = 'forecast';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const API_SYSTEM = 'units=metric';
const PATH_SEARCH = 'q=';
const ID = 'id=';

export const getWeatherRequest = bool => {
  //console.log('GET_WEATHER_REQUEST')
  return {
    type: GET_WEATHER_REQUEST,
    payload: bool
  }
}

export const getWeatherSuccess = item => {
  console.log('GET_WEATHER_SUCCESS')
  return {
    type: GET_WEATHER_SUCCESS,
    payload: item
  }
}

export const getWeatherFailture = bool => {
  console.log('GET_WEATHER_FAILTURE')
  return {
    type: GET_WEATHER_FAILTURE,
    payload: bool
  }
}

export const getWeather = city => {
  console.log('GET_WEATHER')
  return (dispatch) => {
    dispatch(getWeatherRequest(true));
    
    fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${API_SYSTEM}&${PATH_SEARCH}${city}`)
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

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILTURE = 'GET_WEATHER_FAILTURE';



const PATH_BASE = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const API_SYSTEM = 'units=metric';
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


export const getWeather = city => {
  return (dispatch) => {
    dispatch(getWeatherRequest(true));

    fetch(`${PATH_BASE}?${API_KEY}&${API_SYSTEM}&${PATH_SEARCH}${city}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getWeatherRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => dispatch(getWeatherSuccess(item)))
      .catch(() => dispatch(getWeatherFailture(true)))
      }
}



// export const getWeather = (searchText) => ({
//   type: SEARCH_TEXT,
//   payload: searchText
// })

// function searchResult() {
//   fetch(`${PATH_BASE}?${API_KEY}&${API_SYSTEM}&${PATH_SEARCH}${searchCity}`)
//   .then(response => response.json())
//   .then(result => result)
//   .catch(error => error)
// }

// export const getTemp = (searchCity) => (
//   {
//   type: SEARCH_TEXT,
//   payload: fetch(`${PATH_BASE}?${API_KEY}&${API_SYSTEM}&${PATH_SEARCH}${searchCity}`)
//   .then(response => response.json())
//   .then(result => result)
//   .catch(error => error)
// })

// export const getTemp = () => {
//   return {
//     [CALL_API]: {
//       endpoint: '',
//       method: 'GET',
//     }
//   }
// }

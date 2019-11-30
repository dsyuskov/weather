/* eslint-disable no-use-before-define */
export const GET_BACKGROUND_REQUEST = 'GET_BACKGROUND_REQUEST';
export const GET_BACKGROUND_SUCCESS = 'GET_BACKGROUND_SUCCESS';
export const GET_BACKGROUND_FAILTURE = 'GET_BACKGROUND_FAILTURE';
export const GET_SEARCH_STRING_BACKGROUND = 'GET_SEARCH_STRING_BACKGROUND';
export const GET_WEATHER_FOR_BACKGROUND = 'GET_WEATHER_FOR_BACKGROUND';

const PATH_BASE = 'https://www.flickr.com/services/rest';
const METHOD = 'method=flickr.photos.search';
const FORMAT = 'format=json&nojsoncallback=1';
const PATH_SEARCH = 'text=';
const API_KEY = 'api_key=ad367f61799facf14dd49982b162f318';

export const getImageRequest = (bool) => ({
  type: GET_BACKGROUND_REQUEST,
  payload: bool,
});

export const getImageSuccess = (item) => ({
  type: GET_BACKGROUND_SUCCESS,
  payload: item,
});

export const getImageFailture = (bool) => ({
  type: GET_BACKGROUND_FAILTURE,
  payload: bool,
});

export const getSearchStringBackground = (searchString) => ({
  type: GET_SEARCH_STRING_BACKGROUND,
  payload: searchString,
});

export const getWeatherForBackground = (weather) => ({
  type: GET_WEATHER_FOR_BACKGROUND,
  payload: weather,
});

export const getBackgroundImage = (searchString) => (dispatch) => {
  dispatch(getImageRequest(true));
  const search = `city, ${searchString}`;
  fetch(`${PATH_BASE}?${API_KEY}&${METHOD}&${FORMAT}&${PATH_SEARCH}${search}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(getImageRequest(false));
      return response;
    })
    .then((response) => response.json())
    .then((item) => {
      const rndPhoto = Math.round(Math.random() * item.photos.photo.length);
      dispatch(getImageFailture(false));
      dispatch(getImageSuccess(prepareUrl(item.photos.photo[rndPhoto])));
    })
    .catch(() => dispatch(getImageFailture(true)));
};

function prepareUrl(item) {
  return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
}

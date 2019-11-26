export const GET_BACKGROUND_REQUEST = 'GET_BACKGROUND_REQUEST';
export const GET_BACKGROUND_SUCCESS = 'GET_BACKGROUND_SUCCESS';
export const GET_BACKGROUND_FAILTURE = 'GET_BACKGROUND_FAILTURE';

//https://www.flickr.com/services/rest/?api_key=ad367f61799facf14dd49982b162f318&method=flickr.photos.search&text=moscow&format=json
const PATH_BASE = 'https://www.flickr.com/services/rest';
const METHOD = 'method=flickr.photos.search';
const FORMAT = 'format=json&nojsoncallback=1';
const PATH_SEARCH = 'text=';
const API_KEY = 'api_key=ad367f61799facf14dd49982b162f318';

export const getImageRequest = bool => {
  return {
    type: GET_BACKGROUND_REQUEST,
    payload: bool
  }
}

export const getImageSuccess = item => {
  return {
    type: GET_BACKGROUND_SUCCESS,
    payload: item
  }
}

export const getImageFailture = bool => {
  return {
    type: GET_BACKGROUND_FAILTURE,
    payload: bool
  }
}

export const getBackgroundImage = (searchString) => {

  return (dispatch) => {
    dispatch(getImageRequest(true));

    fetch(`${PATH_BASE}?${API_KEY}&${METHOD}&${FORMAT}&${PATH_SEARCH}${searchString}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getImageRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        const rndPhoto = Math.round(Math.random() * item.photos.photo.length);
        dispatch(getImageFailture(false));
        dispatch(getImageSuccess(prepareUrl(item.photos.photo[rndPhoto])));
      })
      .catch(() => dispatch(getImageFailture(true)))
    }
}

function prepareUrl(item) {
  return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
}
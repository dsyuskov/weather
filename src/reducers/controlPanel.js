import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  CHANGE_SEARCH_STRING,
  } from '../actions/controlPanel';

// const initState = {
//   lang: 'en',
//   isCelsius: 'true',
//   searchString: '',
// }

const initState = {
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
  isCelsius: localStorage.getItem('isCelsius') ? localStorage.getItem('isCelsius') : 'true',
  searchString: localStorage.getItem('searchString') ? localStorage.getItem('searchString') : '',
}
// const isCelsius = localStorage.getItem('isCelsius') ? localStorage.getItem('isCelsius') : 'true';
// const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
// const searchString = localStorage.getItem('searchString') ? localStorage.getItem('searchString') : '';

export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_LANG: {
      return {
        ...state,
        lang: action.payload
      }
    }
    case CHANGE_USE_CELSIUS: {
      return {
        ...state,
        isCelsius: action.payload
      }
    }
    case CHANGE_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload
      }
    }
    default:
  }
  return state;
}

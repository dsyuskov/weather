import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  } from '../actions/controlPanel';

const initState = {
  lang: 'en',
  isCelsius: 'true',
}

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
    default:
  }
  return state;
}

import {
  GET_COORD_BY_IP_REQUEST,
  GET_COORD_BY_IP_SUCCESS,
  GET_COORD_BY_IP_FAILTURE,
  } from '../actions/coordByIp';

const initState = {
  coord: '',
  isRequestCoord: false,
  isErrorCoord: false
}

export default function(state = initState, action) {
  switch (action.type) {
    case GET_COORD_BY_IP_REQUEST: {
      return {
        ...state,
        isRequestCoord: action.payload
      }
    }
    case GET_COORD_BY_IP_FAILTURE: {
      return {
        ...state,
        isErrorCoord: action.payload
      }
    }
    case GET_COORD_BY_IP_SUCCESS: {
      return {
        ...state,
        coord: action.payload
      }
    }
    default:
  }
  return state;
}

import { SEARCH_TEXT } from '../actions/actions'

const initState = {
  temp: '',
  wind: '',
  sity: ''
}

export default function(state = initState, action) {
  switch (action.type) {
    case SEARCH_TEXT: {
      return {
        ...state,
        sity: action.payload,
      }
    }
  }
  return state;
}
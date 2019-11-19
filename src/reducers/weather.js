import { SEARCH_TEXT,  } from '../actions/weather';


const initState = {
  collections: ''
}

export default function(state = initState, action) {
  switch (action.type) {
    case SEARCH_TEXT: {
      return {
        ...state,
        collections: action.payload,
      }
    }
    default:
  }
  return state;
}
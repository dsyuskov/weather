export const GET_COORD_BY_IP_REQUEST = 'GET_COORD_BY_IP_REQUEST';
export const GET_COORD_BY_IP_SUCCESS = 'GET_COORD_BY_IP_SUCCESS';
export const GET_COORD_BY_IP_FAILTURE = 'GET_COORD_BY_IP_FAILTURE';

//ipinfo.io/8.8.8.8?token=0f3c2185f8d434
const PATH_BASE = 'https://ipinfo.io/';
const API_KEY = 'token=0f3c2185f8d434';


export const getCoordRequest = bool => {
  return {
    type: GET_COORD_BY_IP_REQUEST,
    payload: bool
  }
}

export const getCoordSuccess = item => {
  return {
    type: GET_COORD_BY_IP_SUCCESS,
    payload: item
  }
}

export const getCoordFailture = bool => {
  return {
    type: GET_COORD_BY_IP_FAILTURE,
    payload: bool
  }
}

export const getCoord = () => {
  console.log('ok');
  return (dispatch) => {
    dispatch(getCoordRequest(true));

    fetch(`${PATH_BASE}?${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(getCoordRequest(false));
        return response;
      })
      .then(response => response.json())
      .then(item => {
        dispatch(getCoordFailture(false));
        dispatch(getCoordSuccess(preapreCoord(item)));
      })
      .catch(() => dispatch(getCoordFailture(true)))
    }
}

 function preapreCoord(item) {
   const stringCoord = item.loc;
   const comma = stringCoord.indexOf(',');
   return {
    lat: stringCoord.slice(0, comma),
    lon: stringCoord.slice(comma+1),
   }
 }

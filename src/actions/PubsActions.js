import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  COORD_CHANGED,
  GET_PUBS_SUCCESS,
  GET_PUBS_FAIL,
  GET_PUBS
} from './types';

const API_KEY = 'AIzaSyC3dl-ADvQdTpHGprLNW7Qt0Wq5HD14p3g';
const ROOT_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?opennow&rankby=distance&type=bar&location=';

export const getPubs = ({ coord }) => {
  return (dispatch) => {
    dispatch({ type: GET_PUBS });

    console.log({ coord });
    const url = `${ROOT_URL}${coord}&key=${API_KEY}`; //replace YOUR_LATLNG with latlng
    console.log(url);
    axios.get(url)
    .then(response => getPubsSuccess(dispatch, response))
    .catch(() => getPubsFail(dispatch));
  };
};

export const coordChanged = (text) => {
  return {
    type: COORD_CHANGED,
    payload: text
  };
};

const getPubsFail = (dispatch) => {
  dispatch({ type: GET_PUBS_FAIL });
};

const getPubsSuccess = (dispatch, response) => {
  dispatch({
    type: GET_PUBS_SUCCESS,
    payload: response
  });

  Actions.main();
};

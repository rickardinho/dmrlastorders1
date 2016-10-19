import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  COORD_CHANGED,
  GET_PUBS_SUCCESS,
  GET_PUBS_FAIL,
  GET_PUBS,
  GET_PLACE_DETAILS,
  GET_PLACE_DETAILS_SUCCESS,
  GET_PLACE_DETAILS_FAIL
} from './types';

export const API_KEY = 'AIzaSyC3dl-ADvQdTpHGprLNW7Qt0Wq5HD14p3g';
const GETPUBS_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?opennow&rankby=distance&type=bar&location=';
export const GETPLACE_URL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';

export const getPubs = ({ coord }) => {
  return (dispatch) => {
    dispatch({ type: GET_PUBS });

    console.log({ coord });
    const url = `${GETPUBS_URL}${coord}&key=${API_KEY}`;
    console.log(url);
    axios.get(url)
    .then(response => getPubsSuccess(dispatch, response))
    .catch(() => getPubsFail(dispatch));
  };
};

export const getPlaceDetails = ({ placeID }) => {
  return (dispatch) => {
    dispatch({ type: GET_PLACE_DETAILS });

    const url = `${GETPLACE_URL}${placeID}&key=${API_KEY}`;
    console.log(url);
    axios.get(url)
    .then(response => getPlaceDetailsSuccess(dispatch, response))
    .catch(() => getPlaceDetailsFail(dispatch));
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

const getPlaceDetailsSuccess = (dispatch, response) => {
  dispatch({
    type: GET_PLACE_DETAILS_SUCCESS,
    payload: response
  });
};

const getPlaceDetailsFail = (dispatch) => {
  dispatch({ type: GET_PLACE_DETAILS_FAIL });
};

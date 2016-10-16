import axios from 'axios';

const YOUR_LATLNG = '51.499415,-0.052276';
const API_KEY = 'AIzaSyC3dl-ADvQdTpHGprLNW7Qt0Wq5HD14p3g';
const ROOT_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?opennow&rankby=distance&type=bar&location=`;

export const FETCH_PLACES = 'FETCH_PLACES';

export function fetchPlaces(latlng) {
  const url = `${ROOT_URL}${YOUR_LATLNG}&key=${API_KEY}`; //replace YOUR_LATLNG with latlng
  const request = axios.get(url);

  return {
    type: FETCH_PLACES,
    payload: request
  };
}

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

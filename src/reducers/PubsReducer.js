import {
  COORD_CHANGED,
  GET_PUBS_SUCCESS,
  GET_PUBS_FAIL,
  GET_PUBS
} from '../actions/types';

const INITIAL_STATE = {
  coord: '51.499415,-0.052276',
  pubslist: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COORD_CHANGED:
      return { ...state, coord: action.payload };
    case GET_PUBS:
      return { ...state, loading: true, error: '' };
    case GET_PUBS_SUCCESS:
      return { ...state, ...INITIAL_STATE, pubslist: action.payload };
    case GET_PUBS_FAIL:
      return { ...state, error: 'GET_PUBS Failed.', loading: false };
    default:
      return state;
  }
};

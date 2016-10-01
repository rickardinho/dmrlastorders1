import { FETCH_PLACES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_PLACES:
    return [ action.payload.data, ...state ];
  }
  return state;
}

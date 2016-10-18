import { combineReducers } from 'redux';
import PubsReducer from './PubsReducer';

export default combineReducers({
  pubs: PubsReducer
});

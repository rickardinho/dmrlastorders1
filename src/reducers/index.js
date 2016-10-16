import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
  weather: WeatherReducer
});

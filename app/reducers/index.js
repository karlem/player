import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import apis from './apis';
import search from './search'
import menu from './menu';

const rootReducer = combineReducers({
  routing,
  apis,
  search,
  menu
});

export default rootReducer;

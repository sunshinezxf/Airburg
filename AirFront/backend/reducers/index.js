import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {customers} from './customers';
import {customerPoints} from './customerPoints';

const rootReducer=combineReducers({customers,customerPoints,routing:routerReducer});
export  default rootReducer;


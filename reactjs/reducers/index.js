import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counters from './counters';
import deleteWarnings from './deleteWarnings'
import apiTest from "./apitest"
import apiCharSelect from "./apiCharSelect"

export default combineReducers({
    router: routerReducer,
    counters,
    deleteWarnings,
    apiTest,
    apiCharSelect
});
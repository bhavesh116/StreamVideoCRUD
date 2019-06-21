import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as reducerForm} from 'redux-form';
import streamReducer from './streamReducer'

export default combineReducers({
    auth:authReducer,
    form:reducerForm,
    streams:streamReducer
});
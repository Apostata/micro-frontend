import {combineReducers} from 'redux';
import languageReducer from 'Reducers/language';
import anotherReducer from 'Reducers/another'

export default combineReducers({
    language: languageReducer,
    another: anotherReducer
});
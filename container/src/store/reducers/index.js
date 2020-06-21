import {combineReducers} from 'redux';
import languageReducer from './language';
import anotherReducer from './another'

export default combineReducers({
    language: languageReducer,
    another: anotherReducer
});
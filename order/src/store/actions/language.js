import {types} from '../actionTypes';

export const setLanguage = (language) =>{
    return { type: types.SET_LANGUAGE, payload:language };
};

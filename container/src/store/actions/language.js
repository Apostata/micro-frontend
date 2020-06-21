import {types} from '../actionTypes';

export const setLanguage = (language) =>{
    return { type: types.SET_LANGUAGE, payload:language };
};

export const getLanguage = () =>{
    return { type: types.GET_LANGUAGE };
};

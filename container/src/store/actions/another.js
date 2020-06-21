import {types} from '../actionTypes';

export const setAnother = (another) =>{
    return { type: types.SET_ANOTHER, payload:another };
};

export const getAnother = () =>{
    return { type: types.GET_ANOTHER };
};

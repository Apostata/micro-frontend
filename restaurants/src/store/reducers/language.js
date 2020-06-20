import {types} from '../actionTypes';

const initialState ='pt_BR';

export default (state=initialState, action) =>{
    switch(action.type){
        case types.SET_LANGUAGE :
            return action.payload;
        default :
            return state;
    }
};
import {types} from '../actionTypes';

const initialState ='teste';

export default (state=initialState, action) =>{
    switch(action.type){
        case types.SET_ANOTHER :
            return action.payload;
        default :
            return state;
    }
};
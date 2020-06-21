import React from 'react';
import {useSelector} from 'react-redux';

const Italiano = props =>{
    const language = useSelector(state=>state.language);
    return(
        <sections>
            Restaurante Italiano {language}
        </sections>
    )
}

export default Italiano;
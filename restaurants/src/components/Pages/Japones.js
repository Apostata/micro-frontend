import React from 'react';
import {useSelector} from 'react-redux';

const Japones = props =>{
    const language = useSelector(state=>state.language);
    return(
        <sections>
            Restaurante Japones {language}
        </sections>
    )
}

export default Japones;
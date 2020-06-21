import React from 'react';
import {useSelector} from 'react-redux';

const Buy = props =>{
    const language = useSelector(state=>state.language);
    return(
        <sections>
            Comprar produtos {language}
        </sections>
    )
}

export default Buy;
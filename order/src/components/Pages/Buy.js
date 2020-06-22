import React from 'react';
import {useSelector} from 'react-redux';

const Buy = props =>{
    const language = useSelector(state=>state.language);
    return(
        <section>
            Comprar produtos {language}
        </section>
    )
}

export default Buy;
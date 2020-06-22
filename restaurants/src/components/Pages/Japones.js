import React from 'react';
import {useSelector} from 'react-redux';

const Japones = props =>{
    const language = useSelector(state=>state.language);
    return(
        <section>
            Restaurante Japones {language}
        </section>
    )
}

export default Japones;
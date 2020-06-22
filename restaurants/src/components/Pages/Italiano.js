import React from 'react';
import {useSelector} from 'react-redux';

const Italiano = props =>{
    const language = useSelector(state=>state.language);
    return(
        <section>
            Restaurante Italiano {language}
        </section>
    )
}

export default Italiano;
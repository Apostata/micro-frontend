import React from 'react';
import {useSelector} from 'react-redux';

const List = props =>{
    const language = useSelector(state=>state.language);
    return(
        <section>
            Lista de compras {language}
        </section>
    )
}

export default List;
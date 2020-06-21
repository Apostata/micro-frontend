import React from 'react';
import {useSelector} from 'react-redux';

const List = props =>{
    const language = useSelector(state=>state.language);
    return(
        <sections>
            Lista de compras {language}
        </sections>
    )
}

export default List;
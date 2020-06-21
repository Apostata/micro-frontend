import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/order/buy">comprar</NavLink>
                </li>
                <li>
                    <NavLink to="/order/list">Lista de pedidos</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;
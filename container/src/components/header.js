import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/">restaurantes</NavLink>
                </li>
                <li>
                    <NavLink to="/order">order</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;
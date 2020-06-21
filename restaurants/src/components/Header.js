import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/italiano">Italiano</NavLink>
                </li>
                <li>
                    <NavLink to="/japones">Japones</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;
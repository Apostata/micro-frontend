import React, {Fragment as F} from 'react';
import { useDispatch, useSelector, useStore } from "react-redux";

const App = props =>{    
    const language = useSelector(state=>state.language);
    return (
        <F>
            <h1>Hello Restaurants {language}</h1>
        </F>
    );
};

export default App;

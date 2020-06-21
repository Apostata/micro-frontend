import React, {Fragment as F} from 'react';
import { useSelector, useStore } from "react-redux";

const App = props =>{    
    const {actions} = useStore();
    console.log(actions);
    const language = useSelector(state=>state.language);
    return (
        <F>
            <h1>Hello Restaurants {language}</h1>
        </F>
    );
};

export default App;

import React, {Fragment as F} from 'react';
import { useSelector, useStore } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

const App = props =>{    
    const {actions} = useStore();
    console.log(actions);
    const language = useSelector(state=>state.language);
    return (
        <F>
            <h1>Hello Restaurants {language}</h1>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;

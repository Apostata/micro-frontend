import React, {Fragment as F} from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import {setLanguage} from 'Store/actions/language';

const App = props =>{
    console.log(setLanguage);     
    const language = useSelector(state=>state.language);
    return (
        <F>
            <h1>Hello Order {language}</h1>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;

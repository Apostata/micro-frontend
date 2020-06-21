import React, { Fragment as F } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
// import MicroFrontend from './MicroFrontend';
import Routes from './routes';
import {setLanguage} from 'Actions/language';
import { useDispatch, useSelector } from "react-redux";

const App = props =>{
    const language = useSelector(state=>state.language); 
    const dispatch = useDispatch();
    return (
        <F>
            <h1>Hello world! {language}</h1>
            <Router>
                <Header/>
                <button type="button" onClick={()=>dispatch(setLanguage('es'))}>Language</button>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;
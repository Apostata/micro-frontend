import React, {Fragment as F} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import {setLanguage} from 'Actions/language';

const App = props =>{
    const dispatch = useDispatch();
    const language = useSelector(state=>state.language);
    return (
        <F>
            <h1>Hello Order {language}</h1>
            <button type="button" onClick={()=>{dispatch(setLanguage('order'))}}>change</button>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;

import React from "react";

import './app.css'
import './bootstrap-theme.min.css'
import {Route,Switch,Redirect} from 'react-router-dom'
import NavBar from "../navbar";
import NewStuffPage from "../pages/new-stuff-page";
import MainPage from "../pages/main-page";
import NewPositionPage from "../pages/new-position-page";
import PositionPage from "../pages/positions-page";

const App:React.FC = () => (
    <>
        <NavBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/new-stuff" component={NewStuffPage}/>
                <Route path="/new-position" component={NewPositionPage}/>
                <Route path="/positions" component={PositionPage}/>
                <Redirect to="/"/>h
            </Switch>
    </>
)


export default App
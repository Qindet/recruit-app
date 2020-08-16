import React from "react";

import './app.css'
import './bootstrap-theme.min.css'
import {Route,Switch,Redirect} from 'react-router-dom'
import NavBar from "../navbar";
import NewStuffPage from "../pages/new-stuff-page";
import MainPage from "../pages/main-page";
import NewPositionPage from "../pages/new-position-page";

const App = () => (
    <>
        <NavBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/new-stuff" component={NewStuffPage}/>
                <Route path="/new-position" component={NewPositionPage}/>
                <Redirect to="/"/>
            </Switch>
    </>
)


export default App
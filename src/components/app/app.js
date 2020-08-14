import React from "react";

import './app.css'
import './bootstrap-theme.min.css'

import NavBar from "../navbar";
import StuffList from "../stuff-list";
import NewStuff from "../new-stuff";

const App = () => (
    <div>
        <NavBar/>
        <StuffList/>
        <NewStuff/>
    </div>
)


export default App
import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    let clz:string = 'collapse navbar-collapse'
    const [toggleBar,setToggleBar] = useState(false)
    if (toggleBar) {
        clz = 'navbar-collapse'
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand"  to="/">Recruit App</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"
                onClick={()=>setToggleBar(s=>!s)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                <div className={clz} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="new-stuff">Add new stuff member</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="new-position">Add new position</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="positions">Positions</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
    )
}

export default NavBar
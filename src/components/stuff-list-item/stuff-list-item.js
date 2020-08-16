import React from "react";
import './stuff-list-item.css'
const StuffListItem = (props) => {
    const styleItem = {
        maxWidth: "540px",
    }

    return (
            <div className="card mb-3" style={styleItem} >
                <div className="row no-gutters">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.item.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square-fill cart-upd"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StuffListItem
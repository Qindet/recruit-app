import React from "react";
import './position-list.css'
import {deletePositionLoaded} from "../../actions/position-operations";

const PositionList = (props) => {
    if (!props.items) {
        return <div className="container">Empty</div>
    }
    return (
        <div className="container-sm">
            <ul className="list-group">
                {props.items.map(item=>
                    <li key={item.id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                            <div>Position: {item.positionName} salary: {item.salary}</div>
                            <svg width="2em" height="2em" viewBox="0 0 16 16"
                                 className="bi bi-trash trash-icon" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg"

                                 onClick={()=>props.dispatch(deletePositionLoaded(item))}>
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>

                </li>)}
            </ul>
        </div>
    )
}

export default PositionList
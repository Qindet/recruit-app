import React from "react";
import './stuff-list-item.css'


const StuffListItem = (props) => {
    const styleItem = {
        maxWidth: "540px",
    }
    return (
            <div className="card mb-3" style={styleItem} >
                <div className="row no-gutters">

                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{props.item.firstName}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated {props.item.date}</small></p>
                            <div className="d-flex justify-content-around">
                                <button onClick={props.onOpen} className="btn btn-success">Update info</button>
                                <button onClick={props.onDelete} className="btn btn-danger">Dismiss </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}



export default StuffListItem
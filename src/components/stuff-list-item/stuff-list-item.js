import React, {useState} from "react";
import './stuff-list-item.css'


const StuffListItem = (props) => {
    const [isModalOpen,setModalOpen] = useState(false)

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
                                <button onClick={() => setModalOpen(true)} className="btn btn-danger">Dismiss </button>
                                {isModalOpen?<ModalConfirm onDelete={props.onDelete} onClose={()=>setModalOpen(false)}/>:null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

const ModalConfirm = (props) => {
    const style = {
        padding: '60px'
    }
    const textStyle = {
        paddingBottom: '50px'
    }
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">

                <div className="modal-content" style={style}>
                    <div>
                        <div style={textStyle}>Are you sure, you want to dismiss this employee?</div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success" onClick={props.onDelete}>Dismiss</button>
                            <button className="btn btn-danger " onClick={props.onClose}>No</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default StuffListItem
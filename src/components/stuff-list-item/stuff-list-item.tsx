import React, {CSSProperties, useState} from "react";
import './stuff-list-item.css'
import {StuffItemType} from "../../ts-types/main-types";


type StuffListItemPropsType = {
    item: StuffItemType,
    onDelete: () => void,
    onOpen: () => void
}

type ModalConfirmPropsType = {
    onDelete: () => void,
    onClose: () => void
}

const StuffListItem: React.FC<StuffListItemPropsType> = ({item,onDelete,onOpen}) => {
    const [isModalOpen,setModalOpen] = useState(false)

    const styleItem:CSSProperties = {
        maxWidth: "540px",
    }
    return (
            <div className="card mb-3" style={styleItem} >
                <div className="row no-gutters">

                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{item.firstName}<br/>{item.lastName}</h5>
                            <p className="card-text">Position: {item.position}</p>
                            <p className="card-text">Email: {item.email}</p>

                            <p className="card-text"><small className="text-muted">Last updated {item.date}</small></p>
                            <div className="d-flex justify-content-around">
                                <button onClick={onOpen} className="btn btn-success">Update info</button>
                                <button onClick={() => setModalOpen(true)} className="btn btn-danger">Dismiss </button>
                                {isModalOpen?<ModalConfirm onDelete={onDelete} onClose={()=>setModalOpen(false)}/>:null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

const ModalConfirm: React.FC<ModalConfirmPropsType> = ({onClose,onDelete}) => {
    const style:CSSProperties = {
        padding: '60px'
    }
    const textStyle:CSSProperties = {
        paddingBottom: '50px'
    }
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">

                <div className="modal-content" style={style}>
                    <div>
                        <div style={textStyle}>Are you sure, you want to dismiss this employee?</div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success" onClick={onDelete}>Dismiss</button>
                            <button className="btn btn-danger " onClick={onClose}>No</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default StuffListItem
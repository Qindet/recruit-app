import React from "react";
import './modal.css'
import NewStuffForm from "../forms/new-stuff-form";
import {StuffItemType} from "../../ts-types/main-types";
import {ModalPropsType} from "../../ts-types/props-types";



const Modal: React.FC<ModalPropsType> = ({item,onClose}) => {
    const style = {
        padding: '20px'
    }
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">

                <div className="modal-content" style={style}>
                    <div className="align-self-end">
                        <button className="btn btn-danger p-lg-1" onClick={onClose}>Close Modal</button>
                    </div>
                    <NewStuffForm initialValues={item} flag="update"/>

                </div>
            </div>
        </div>
    )
}



export default Modal
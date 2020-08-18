import React from "react";
import Modal from "../components/modal";
import {connect} from "react-redux";
import {getModalActivity, getModalItem} from '../selectors/general'
import {closeStuffModal} from "../actions";

const ModalContainer = (props) => {

    const modal = props.isStuffModalOpen ?
        <Modal
        item={props.modalItem}
        onClose={props.closeStuffModal}
        /> : null

    return (
       <div>
           {modal}
       </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isStuffModalOpen: getModalActivity(state),
        modalItem: getModalItem(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeStuffModal:  () => dispatch(closeStuffModal())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer)
import React from "react";
import Modal from "../components/modal";
import {connect} from "react-redux";
import {getModalActivity, getModalItem} from '../selectors/general'
import {closeStuffModal} from "../actions";
import {StuffItemType} from "../ts-types/main-types";
import {AppStateType} from "../reducers";

//также можно создать 3-й type для ownProps
type ModalContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnProps
type MapStatePropsType = {
    isStuffModalOpen: boolean,
    modalItem: StuffItemType
}
type MapDispatchPropsType = {
    closeStuffModal: () => void
}
type OwnProps = {}
//
const ModalContainer: React.FC<ModalContainerPropsType> = ({isStuffModalOpen,modalItem,closeStuffModal}) => {

    const modal = isStuffModalOpen ?
        <Modal
        item={modalItem}
        onClose={closeStuffModal}
        /> : null

    return (
       <div>
           {modal}
       </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isStuffModalOpen: getModalActivity(state),
        modalItem: getModalItem(state)
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        closeStuffModal:  () => dispatch(closeStuffModal())
    }
}
export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(ModalContainer)
import {AppStateType} from "../reducers";


const getModalActivity = (state: AppStateType) => {
    return state.generalOperations.isStuffModalOpen
}

const getModalItem = (state: AppStateType) => {
    return state.generalOperations.modalItem
}

export {
    getModalActivity,
    getModalItem
}
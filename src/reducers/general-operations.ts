import {GeneralOperationsStateType} from "../ts-types/state-types";
import {CLOSE_STUFF_MODAL, OPEN_STUFF_MODAL} from "../actions/action-types";

const initialState: GeneralOperationsStateType = {
    isStuffModalOpen: false,
    modalItem: {}
}

export default function generalOperations(state=initialState, action:any):GeneralOperationsStateType {
    switch (action.type) {
        case OPEN_STUFF_MODAL:
            return {
                ...state,
                isStuffModalOpen: true,
                modalItem: action.payload
            }
        case CLOSE_STUFF_MODAL:
            return {
                ...state,
                isStuffModalOpen: false,
                modalItem: {}
            }
        default:
            return state
    }
}
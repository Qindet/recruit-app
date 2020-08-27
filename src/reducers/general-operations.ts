import {GeneralOperationsStateType} from "../ts-types/state-types";
import {CLOSE_STUFF_MODAL, OPEN_STUFF_MODAL} from "../actions/action-types";
import {ActionsGeneralOperationsType} from "../ts-types/action-types/general-operations-types";

const initialState: GeneralOperationsStateType = {
    isStuffModalOpen: false,
    modalItem: {
        firstName: '',
        lastName: '',
        address: '',
        position: '',
        email: ''
    }
}


export default function generalOperations(state=initialState, action:ActionsGeneralOperationsType):GeneralOperationsStateType {
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
                modalItem: {
                    firstName: '',
                    lastName: '',
                    address: '',
                    position: '',
                    email: ''
                }
            }
        default:
            return state
    }
}
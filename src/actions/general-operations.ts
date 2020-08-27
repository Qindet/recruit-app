import {CLOSE_STUFF_MODAL, OPEN_STUFF_MODAL} from "./action-types";
import {StuffItemType} from "../ts-types/main-types";
import {CloseStuffModalActionType, OpenStuffModalActionType} from "../ts-types/action-types/general-operations-types";



const closeStuffModal = (): CloseStuffModalActionType => {
    return {
        type: CLOSE_STUFF_MODAL
    }
}



const openStuffModal = (payload: StuffItemType): OpenStuffModalActionType => {
    return {
        type: OPEN_STUFF_MODAL,
        payload
    }
}

export {
    closeStuffModal,
    openStuffModal
}
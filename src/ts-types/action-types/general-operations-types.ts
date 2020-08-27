import {CLOSE_STUFF_MODAL, OPEN_STUFF_MODAL} from "../../actions/action-types";
import {StuffItemType} from "../main-types";

export type CloseStuffModalActionType = {
    type: typeof CLOSE_STUFF_MODAL
}

export type OpenStuffModalActionType = {
    type: typeof OPEN_STUFF_MODAL,
    payload: StuffItemType
}

export type ActionsGeneralOperationsType = OpenStuffModalActionType | CloseStuffModalActionType
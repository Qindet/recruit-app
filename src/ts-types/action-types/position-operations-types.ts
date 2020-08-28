import {
    ADD_POSITION,
    DELETE_POSITION,
    GET_POSITION,
    POSITION_FAILED,
    POSITION_REQUESTED
} from "../../actions/action-types";
import {PositionItemType} from "../main-types";

export type AddPositionActionType = {
    type: typeof ADD_POSITION,
    payload: PositionItemType
}

export type GetPositionActionType = {
    type: typeof GET_POSITION,
    payload: Array<PositionItemType>
}

export type DeletePositionActionType = {
    type: typeof DELETE_POSITION,
    payload: PositionItemType
}

export type FailedPositionActionType = {
    type: typeof POSITION_FAILED
}

export type PositionRequestedActionType = {
    type: typeof POSITION_REQUESTED
}

export type ActionsPositionOperationsType = AddPositionActionType | GetPositionActionType |
    DeletePositionActionType | FailedPositionActionType | PositionRequestedActionType

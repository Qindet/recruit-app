import {
    DELETE_STUFF_MEMBER_FAILED,
    DELETE_STUFF_MEMBER_LOADED,
    DELETE_STUFF_MEMBER_REQUESTED
} from "../../actions/action-types";
import {StuffItemType} from "../main-types";

export type DeleteStuffActionType = {
    type: typeof DELETE_STUFF_MEMBER_LOADED,
    payload: StuffItemType
}

export type DeleteStuffRequestedActionType = {
    type: typeof DELETE_STUFF_MEMBER_REQUESTED
}

export type DeleteStuffFailedActionType = {
    type: typeof DELETE_STUFF_MEMBER_FAILED
}

export type ActionsDeleteStuffType = DeleteStuffActionType | DeleteStuffRequestedActionType | DeleteStuffFailedActionType
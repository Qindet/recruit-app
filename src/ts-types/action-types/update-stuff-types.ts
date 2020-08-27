import {
    UPDATE_STUFF_MEMBER_FAILED,
    UPDATE_STUFF_MEMBER_LOADED,
    UPDATE_STUFF_MEMBER_REQUESTED
} from "../../actions/action-types";
import {StuffItemType} from "../main-types";

export type UpdateStuffActionType = {
        type: typeof UPDATE_STUFF_MEMBER_LOADED,
        payload: StuffItemType
}
export type UpdateStuffRequestedActionType = {
        type: typeof UPDATE_STUFF_MEMBER_REQUESTED
}
export type UpdateStuffFailedActionType = {
        type: typeof UPDATE_STUFF_MEMBER_FAILED
}
import {service} from "./stuff-operations";
import {DELETE_STUFF_MEMBER_FAILED, DELETE_STUFF_MEMBER_LOADED, DELETE_STUFF_MEMBER_REQUESTED} from "./action-types";
import {StuffItemType} from "../ts-types/main-types";
import {
    ActionsDeleteStuffType,
    DeleteStuffActionType,
    DeleteStuffFailedActionType,
    DeleteStuffRequestedActionType
} from "../ts-types/action-types/delete-stuff-types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";

const deleteStuff = (payload: StuffItemType): DeleteStuffActionType => {
    return {
        type: DELETE_STUFF_MEMBER_LOADED,
        payload
    }
}
const deleteStuffRequested = (): DeleteStuffRequestedActionType => {
    return {
        type: DELETE_STUFF_MEMBER_REQUESTED
    }
}
const deleteStuffFailed = (): DeleteStuffFailedActionType => {
    return {
        type: DELETE_STUFF_MEMBER_FAILED
    }
}

const deleteStuffItemLoaded = (item:StuffItemType):
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsDeleteStuffType> =>
    async (dispatch) => {
    try {
        dispatch(deleteStuffRequested())
        await service.deleteItem(item,'stuff')
        dispatch(deleteStuff(item))
    }
    catch (e) {
        dispatch(deleteStuffFailed())
    }
}

export {
    deleteStuffItemLoaded
}
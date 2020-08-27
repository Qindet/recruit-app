import {service} from "./stuff-operations";
import {DELETE_STUFF_MEMBER_FAILED, DELETE_STUFF_MEMBER_LOADED, DELETE_STUFF_MEMBER_REQUESTED} from "./action-types";
import {StuffItemType} from "../ts-types/main-types";
import {
    DeleteStuffActionType,
    DeleteStuffFailedActionType,
    DeleteStuffRequestedActionType
} from "../ts-types/action-types/delete-stuff-types";

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

const deleteStuffItemLoaded = (item:StuffItemType) => async (dispatch:any) => {
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
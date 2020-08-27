import {service} from "./stuff-operations";
import {
    UpdateStuffActionType,
    UpdateStuffFailedActionType,
    UpdateStuffRequestedActionType
} from "../ts-types/action-types/update-stuff-types";
import {StuffItemType} from "../ts-types/main-types";
import {UPDATE_STUFF_MEMBER_FAILED, UPDATE_STUFF_MEMBER_LOADED, UPDATE_STUFF_MEMBER_REQUESTED} from "./action-types";

const updateStuff = (payload: StuffItemType): UpdateStuffActionType => {
    return {
        type: UPDATE_STUFF_MEMBER_LOADED,
        payload
    }
}
const updateStuffRequested = (): UpdateStuffRequestedActionType => {
    return {
        type: UPDATE_STUFF_MEMBER_REQUESTED
    }
}
const updateStuffFailed = (): UpdateStuffFailedActionType => {
    return {
        type: UPDATE_STUFF_MEMBER_FAILED
    }
}
const updateStuffItemLoaded = (item: StuffItemType) => async (dispatch:any) => {
    try {
        dispatch(updateStuffRequested())
        const result = await service.updateItem(item,'stuff')
        dispatch(updateStuff(result.data))
    }
    catch (e) {
        dispatch(updateStuffFailed())
    }
}

export {
    updateStuffItemLoaded
}
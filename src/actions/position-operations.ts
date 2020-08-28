import recruitService from "../service";
import {
    ActionsPositionOperationsType,
    AddPositionActionType,
    DeletePositionActionType,
    FailedPositionActionType,
    GetPositionActionType,
    PositionRequestedActionType
} from "../ts-types/action-types/position-operations-types";
import {PositionItemType} from "../ts-types/main-types";
import {ADD_POSITION, DELETE_POSITION, GET_POSITION, POSITION_FAILED, POSITION_REQUESTED} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {ActionsDeleteStuffType} from "../ts-types/action-types/delete-stuff-types";

const service = new recruitService()


const addPosition = (payload: PositionItemType): AddPositionActionType => {
    return {
        type: ADD_POSITION,
        payload
    }
}

const getPosition = (payload: Array<PositionItemType>): GetPositionActionType => {
    return {
        type: GET_POSITION,
        payload
    }
}

const deletePosition = (payload: PositionItemType): DeletePositionActionType => {
    return {
        type: DELETE_POSITION,
        payload
    }
}

const failedPosition = (): FailedPositionActionType => {
    return {
        type: POSITION_FAILED
    }
}
const deletePositionLoaded = (item: PositionItemType):
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsPositionOperationsType> =>
    async (dispatch) => {
    try {
        dispatch(positionRequested())
        await service.deleteItem(item,'position')
        dispatch(deletePosition(item))
    } catch (e) {
        dispatch(failedPosition())
    }
}

const positionRequested = (): PositionRequestedActionType => {
    return {
        type: POSITION_REQUESTED
    }
}

const fetchPositions = ():
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsPositionOperationsType> =>
    async (dispatch) => {
    try {
        dispatch(positionRequested())
        const items: Array<PositionItemType> = await service.getItems('position') || []
        dispatch(getPosition(items))
    } catch (e) {
        dispatch(failedPosition())
    }

}


const addPositionLoaded = (item: PositionItemType):
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsPositionOperationsType> =>
    async (dispatch) => {
    try {
        const {data:{name}} = await service.postItem(item,'position')
        dispatch(addPosition({...item, id:name}))
    } catch (e) {
        dispatch(failedPosition())
    }
}


export {
    addPositionLoaded,fetchPositions,
    deletePositionLoaded
}
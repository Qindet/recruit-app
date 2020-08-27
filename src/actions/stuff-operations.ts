import recruitService from "../service";
import {
    ADD_STUFF_MEMBER,
    FETCH_STUFF_LIST_FAILED,
    FETCH_STUFF_LIST_LOADED,
    FETCH_STUFF_LIST_REQUESTED, NEXT_STUFF_PAGE, PREVIOUS_STUFF_PAGE, STUFF_PAGE_CHANGED
} from "./action-types";

import {
    ActionsStuffOperationsType,
    AddStuffActionType,
    ChangeStuffPageActionType,
    NextStuffPageActionType,
    PreviousStuffPageActionType,
    StuffListFailedActionType,
    StuffListLoadedActionType,
    StuffListRequestedActionType
} from "../ts-types/action-types/stuff-operations-types"
import {StuffItemType} from "../ts-types/main-types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {ActionsPositionOperationsType} from "../ts-types/action-types/position-operations-types";
const service = new recruitService()




const addStuff = (payload: StuffItemType):AddStuffActionType => {
    return {
        type: ADD_STUFF_MEMBER,
        payload
    }
}

const addStuffLoaded = (stuffForm: StuffItemType) => async (dispatch:any) => {

    const {data:{name}} = await service.postItem(stuffForm,'stuff')
    dispatch(addStuff({...stuffForm,id:name}))
}

const stuffListRequested = (): StuffListRequestedActionType => {
    return {
        type: FETCH_STUFF_LIST_REQUESTED
    }
}

const stuffListLoaded = (payload: Array<StuffItemType>): StuffListLoadedActionType => {
    return {
        type: FETCH_STUFF_LIST_LOADED,
        payload
    }
}

const stuffListFailed = (): StuffListFailedActionType => {
    return {
        type: FETCH_STUFF_LIST_FAILED
    }
}

const changeStuffPage = (payload: number): ChangeStuffPageActionType => {
    return {
        type: STUFF_PAGE_CHANGED,
        payload
    }
}

const previousStuffPage = (): PreviousStuffPageActionType => {
    return {
        type: PREVIOUS_STUFF_PAGE
    }
}

const nextStuffPage = (): NextStuffPageActionType => {
    return {
        type: NEXT_STUFF_PAGE
    }
}

const fetchStuffList = ():
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsStuffOperationsType> =>
    async (dispatch) => {
    try {
        dispatch(stuffListRequested())
        const items: Array<StuffItemType> = await service.getItems('stuff') || []
        dispatch(stuffListLoaded(items))
    }
    catch (e) {
        dispatch(stuffListFailed())
    }
}




export {
    service,
    addStuffLoaded,
    fetchStuffList,
    changeStuffPage,
    previousStuffPage,
    nextStuffPage
}
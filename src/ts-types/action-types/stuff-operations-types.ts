import {
    ADD_STUFF_MEMBER,
    FETCH_STUFF_LIST_FAILED,
    FETCH_STUFF_LIST_LOADED,
    FETCH_STUFF_LIST_REQUESTED, NEXT_STUFF_PAGE, PREVIOUS_STUFF_PAGE, STUFF_PAGE_CHANGED
} from "../../actions/action-types";
import {service} from "../../actions/stuff-operations";
import {StuffItemType} from "../main-types";



export type AddStuffActionType = {
        type: typeof ADD_STUFF_MEMBER,
        payload: StuffItemType
}


export type StuffListRequestedActionType = {
        type: typeof FETCH_STUFF_LIST_REQUESTED
}

export type StuffListLoadedActionType = {
        type: typeof FETCH_STUFF_LIST_LOADED,
        payload: Array<StuffItemType>
}

export type StuffListFailedActionType = {
        type: typeof FETCH_STUFF_LIST_FAILED
}

export type ChangeStuffPageActionType = {
        type: typeof STUFF_PAGE_CHANGED,
        payload: number
}

export type PreviousStuffPageActionType = {
        type: typeof PREVIOUS_STUFF_PAGE
}

export type NextStuffPageActionType = {
        type: typeof NEXT_STUFF_PAGE
}
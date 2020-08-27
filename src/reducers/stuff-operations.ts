import {StufOperationStateType} from "../ts-types/state-types";
import {
    ADD_STUFF_MEMBER,
    DELETE_STUFF_MEMBER_FAILED,
    DELETE_STUFF_MEMBER_LOADED,
    DELETE_STUFF_MEMBER_REQUESTED,
    FETCH_STUFF_LIST_FAILED,
    FETCH_STUFF_LIST_LOADED,
    FETCH_STUFF_LIST_REQUESTED, NEXT_STUFF_PAGE, PREVIOUS_STUFF_PAGE, STUFF_PAGE_CHANGED,
    UPDATE_STUFF_MEMBER_FAILED,
    UPDATE_STUFF_MEMBER_LOADED,
    UPDATE_STUFF_MEMBER_REQUESTED
} from "../actions/action-types";
import {ActionsStuffOperationsType} from "../ts-types/action-types/stuff-operations-types";

const initialState: StufOperationStateType = {
    stuffList: [],
    loadingList: true,
    errorList: false,
    pageSize: 5,
    numberPage: 0
}

export default function stuffOperations(state=initialState, action:ActionsStuffOperationsType): StufOperationStateType {
    switch (action.type) {
        case ADD_STUFF_MEMBER:
            const newStuffList = [...state.stuffList,action.payload]
            return {
                ...state,
                stuffList: newStuffList
            }
        case UPDATE_STUFF_MEMBER_LOADED:
            const idx = state.stuffList.findIndex((item) => item.id === action.payload.id)
            const newList = [...state.stuffList.slice(0,idx),action.payload,...state.stuffList.slice(idx+1)]
            return {
                ...state,
                loadingList: false,
                stuffList: newList
            }
        case DELETE_STUFF_MEMBER_REQUESTED:
        case UPDATE_STUFF_MEMBER_REQUESTED:
            return {
                ...state,
                loadingList: true,
            }
        case DELETE_STUFF_MEMBER_FAILED:
        case UPDATE_STUFF_MEMBER_FAILED:
            return {
                ...state,
                errorList: true,
            }
        case DELETE_STUFF_MEMBER_LOADED:
            const idxItem = state.stuffList.findIndex((item) => item.id === action.payload.id)
            const newListUpdated = [...state.stuffList.slice(0,idxItem),...state.stuffList.slice(idxItem+1)]
            return {
                ...state,
                loadingList: false,
                stuffList: newListUpdated
            }
        case FETCH_STUFF_LIST_REQUESTED:
            return {
                ...state,
                loadingList: true
            }
        case FETCH_STUFF_LIST_LOADED:
            return {
                ...state,
                stuffList: action.payload,
                loadingList: false
            }
        case FETCH_STUFF_LIST_FAILED:
            return {
                ...state,
                loadingList: false,
                errorList: true
            }
        case STUFF_PAGE_CHANGED:
            return {
                ...state,
                numberPage: action.payload
            }
        case PREVIOUS_STUFF_PAGE:
            const page = state.numberPage !== 0 ? state.numberPage - 1 : state.numberPage
            return {
                ...state,
                numberPage: page
            }
        case NEXT_STUFF_PAGE:
            const nextPage = state.numberPage+1 !== Math.ceil(state.stuffList.length/state.pageSize) ? state.numberPage + 1 : state.numberPage
            return {
                ...state,
                numberPage: nextPage
            }

        default:
            return state
    }
}
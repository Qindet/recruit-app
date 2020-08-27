import {AppStateType} from "../reducers";

const getLoadingStatusStuffList = (state: AppStateType) => {
    return state.stuffOperations.loadingList
}

const getStuffList = (state: AppStateType) => {
    return state.stuffOperations.stuffList
}

const getStuffNumberPage = (state: AppStateType) => {
    return state.stuffOperations.numberPage
}

const getStuffPageSize = (state: AppStateType) => {
    return state.stuffOperations.pageSize
}


export {
    getLoadingStatusStuffList,
    getStuffList,
    getStuffNumberPage,
    getStuffPageSize
}
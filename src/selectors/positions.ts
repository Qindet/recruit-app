import {AppStateType} from "../reducers";


const getPositions = (state: AppStateType) => {
    return state.positionOperations.positionItems
}
const getLoadingPositions = (state: AppStateType) => {
    return state.positionOperations.loadingPositions
}

export {
    getPositions,
    getLoadingPositions
}
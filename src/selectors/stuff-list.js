const getLoadingStatusStuffList = (state) => {
    return state.stuffOperations.loadingList
}

const getStuffList = (state) => {
    return state.stuffOperations.stuffList
}


export {
    getLoadingStatusStuffList,
    getStuffList
}
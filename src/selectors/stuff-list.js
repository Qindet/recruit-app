const getLoadingStatusStuffList = (state) => {
    return state.stuffOperations.loadingList
}

const getStuffList = (state) => {
    return state.stuffOperations.stuffList
}

const getStuffNumberPage = (state) => {
    return state.stuffOperations.numberPage
}

const getStuffPageSize = (state) => {
    return state.stuffOperations.pageSize
}


export {
    getLoadingStatusStuffList,
    getStuffList,
    getStuffNumberPage,
    getStuffPageSize
}
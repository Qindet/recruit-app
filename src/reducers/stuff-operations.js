const initialState = {
    stuffList: [],
    loadingList: true,
    errorList: false
}

export default function stuffOperations(state=initialState, action) {
    switch (action.type) {
        case 'ADD_STUFF_MEMBER':
            const newStuffList = [...state.stuffList,action.payload]
            return {
                ...state,
                stuffList: newStuffList
            }
        case 'FETCH_STUFF_LIST_REQUESTED':
            return {
                ...state,
                loadingList: true
            }
        case 'FETCH_STUFF_LIST_LOADED':
            return {
                ...state,
                stuffList: action.payload,
                loadingList: false
            }
        case 'FETCH_STUFF_LIST_FAILED':
            return {
                ...state,
                loadingList: false,
                errorList: true
            }
        default:
            return state
    }
}
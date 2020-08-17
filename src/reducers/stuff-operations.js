const initialState = {
    stuffList: [],
    loadingList: true,
    errorList: false,
    pageSize: 5,
    numberPage: 0
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
        case 'STUFF_PAGE_CHANGED':
            return {
                ...state,
                numberPage: action.payload
            }
        case 'PREVIOUS_STUFF_PAGE':
            const page = state.numberPage !== 0 ? state.numberPage - 1 : state.numberPage
            return {
                ...state,
                numberPage: page
            }
        case 'NEXT_STUFF_PAGE':
            const nextPage = state.numberPage+1 !== Math.ceil(state.stuffList.length/state.pageSize) ? state.numberPage + 1 : state.numberPage
            return {
                ...state,
                numberPage: nextPage
            }
        default:
            return state
    }
}
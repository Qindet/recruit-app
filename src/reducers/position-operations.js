const initialState = {
    positionItems: [],
    loadingPositions: true
}

export default function positionOperations(state=initialState, action) {
    switch (action.type) {
        case 'ADD_POSITION':
            const newPositionList = [...state.positionItems,action.payload]
            return {
                ...state,
                loadingPositions: false,
                positionItems: newPositionList
            }
        case 'GET_POSITION':
            return {
                ...state,
                loadingPositions: false,
                positionItems: action.payload
            }
        case 'POSITION_REQUESTED':
            return {
                ...state,
                loadingPositions: true
            }
        case 'DELETE_POSITION':
            const idx = state.positionItems.findIndex(item=>item.id===action.payload.id)
            const newItems = [...state.positionItems.slice(0,idx),...state.positionItems.slice(idx+1)]
            return {
                ...state,
                loadingPositions: false,
                positionItems: newItems
            }
        default:
            return state
    }
}
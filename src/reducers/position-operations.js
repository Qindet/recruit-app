const initialState = {
    positionItems: [],
    loadingPositions: true,
    errorPositions: false
}

export default function positionOperations(state=initialState, action) {
    switch (action.type) {
        case 'ADD_POSITION':
            const newPositionList = [...state.positionItems,action.payload]
            return {
                ...state,
                loadingPositions: false,
                positionItems: newPositionList,
                errorPositions: false

            }
        case 'GET_POSITION':
            return {
                ...state,
                loadingPositions: false,
                positionItems: action.payload,
                errorPositions: false

            }
        case 'POSITION_REQUESTED':
            return {
                ...state,
                positionItems: [],
                loadingPositions: true
            }
        case 'POSITION_FAILED':
            return {
                ...state,
                errorPositions: true
            }
        case 'DELETE_POSITION':
            const idx = state.positionItems.findIndex(item=>item.id===action.payload.id)
            const newItems = [...state.positionItems.slice(0,idx),...state.positionItems.slice(idx+1)]
            return {
                ...state,
                loadingPositions: false,
                positionItems: newItems,
                errorPositions: false

            }
        default:
            return state
    }
}
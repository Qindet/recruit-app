const initialState = {
    positionItems: []
}

export default function positionOperations(state=initialState, action) {
    switch (action.type) {
        case 'ADD_POSITION':
            return {
                ...state,
                positionItems: [...state.positionItems,action.payload]
            }
        default:
            return state
    }
}
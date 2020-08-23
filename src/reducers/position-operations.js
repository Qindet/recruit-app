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
        case 'GET_POSITION':
            console.log(1)

            return {
                ...state,
                positionItems: action.payload
            }
        default:
            return state
    }
}
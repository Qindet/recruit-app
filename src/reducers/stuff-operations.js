const initialState = {
    stuffList: []
}

export default function stuffOperations(state=initialState, action) {
    switch (action.type) {
        case 'ADD_STUFF_MEMBER':
            const newStuffList = [...state.stuffList,action.payload]
            return {
                ...state,
                stuffList: newStuffList
            }


        default:
            return state
    }
}
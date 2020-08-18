const initialState = {
    isStuffModalOpen: false,
    modalItem: {}
}

export default function generalOperations(state=initialState, action) {
    switch (action.type) {
        case 'OPEN_STUFF_MODAL':
            return {
                ...state,
                isStuffModalOpen: true,
                modalItem: action.payload
            }
        case 'CLOSE_STUFF_MODAL':
            return {
                ...state,
                isStuffModalOpen: false,
                modalItem: {}
            }
        default:
            return state
    }
}


const getModalActivity = (state) => {
    return state.generalOperations.isStuffModalOpen
}

const getModalItem = (state) => {
    return state.generalOperations.modalItem
}

export {
    getModalActivity,
    getModalItem
}
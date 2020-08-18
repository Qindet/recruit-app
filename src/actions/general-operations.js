
const closeStuffModal = () => {
    return {
        type: 'CLOSE_STUFF_MODAL'
    }
}

const openStuffModal = (payload) => {
    return {
        type: 'OPEN_STUFF_MODAL',
        payload
    }
}

export {
    closeStuffModal,
    openStuffModal
}
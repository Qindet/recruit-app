import {service} from "./stuff-operations";

const deleteStuff = (payload) => {
    return {
        type: 'DELETE_STUFF_MEMBER_LOADED',
        payload
    }
}
const deleteStuffRequested = () => {
    return {
        type: 'DELETE_STUFF_MEMBER_REQUESTED'
    }
}
const deleteStuffFailed = () => {
    return {
        type: 'DELETE_STUFF_MEMBER_FAILED'
    }
}
const deleteStuffItemLoaded = (item) => async (dispatch) => {
    try {
        dispatch(deleteStuffRequested())
        await service.deleteItem(item,'stuff')
        dispatch(deleteStuff(item))
    }
    catch (e) {
        dispatch(deleteStuffFailed())
    }
}

export {
    deleteStuffItemLoaded
}
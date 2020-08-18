import {service} from "./stuff-operations";

const updateStuff = (payload) => {
    return {
        type: 'UPDATE_STUFF_MEMBER_LOADED',
        payload
    }
}
const updateStuffRequested = () => {
    return {
        type: 'UPDATE_STUFF_MEMBER_REQUESTED'
    }
}
const updateStuffFailed = () => {
    return {
        type: 'UPDATE_STUFF_MEMBER_FAILED'
    }
}
const updateStuffItemLoaded = (item) => async (dispatch) => {
    try {
        dispatch(updateStuffRequested())
        const result = await service.updateItem(item,'stuff')
        dispatch(updateStuff(result.data))
    }
    catch (e) {
        dispatch(updateStuffFailed())
    }
}

export {
    updateStuffItemLoaded
}
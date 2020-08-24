import recruitService from "../service";

const service = new recruitService()


const addPosition = (payload) => {
    return {
        type: 'ADD_POSITION',
        payload
    }
}

const getPosition = (payload) => {
    return {
        type: 'GET_POSITION',
        payload
    }
}

const deletePosition = (payload) => {
    return {
        type: 'DELETE_POSITION',
        payload
    }
}

const failedPosition = () => {
    return {
        type: 'POSITION_FAILED'
    }
}
const deletePositionLoaded = (item) => async (dispatch) => {
    try {
        dispatch(positionRequested())
        await service.deleteItem(item,'position')
        dispatch(deletePosition(item))
    } catch (e) {
        dispatch(failedPosition())
    }
}

const positionRequested = () => {
    return {
        type: 'POSITION_REQUESTED'
    }
}

const fetchPositions = () => async (dispatch) => {
    try {
        dispatch(positionRequested())
        const items = await service.getItems('position')
        dispatch(getPosition(items))
    } catch (e) {
        dispatch(failedPosition())
    }

}


const addPositionLoaded = (item) => async (dispatch) => {
    try {
        const {data:{name}} = await service.postItem(item,'position')
        dispatch(addPosition({...item, id:name}))
    } catch (e) {
        dispatch(failedPosition())
    }
}


export {
    addPositionLoaded,fetchPositions,
    deletePositionLoaded
}
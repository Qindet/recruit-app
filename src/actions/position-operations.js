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
const deletePositionLoaded = (item) => async (dispatch) => {
    try {
        dispatch(positionRequested())
        await service.deleteItem(item,'position')
        dispatch(deletePosition(item))
    } catch (e) {

    }
}

const positionRequested = () => {
    return {
        type: 'POSITION_REQUESTED'
    }
}

const fetchPositions = () => async (dispatch) => {
    dispatch(positionRequested())
    const items = await service.getItems('position')
    dispatch(getPosition(items))
}


const addPositionLoaded = (item) => async (dispatch) => {
    const {data:{name}} = await service.postItem(item,'position')
    dispatch(addPosition({...item, id:name}))
}


export {
    addPositionLoaded,fetchPositions,
    deletePositionLoaded
}
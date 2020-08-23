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

const fetchPositions = () => async (dispatch) => {
    const items = await service.getItems('position')
    console.log(items)
    dispatch(getPosition(items))
}


const addPositionLoaded = (item) => async (dispatch) => {
    const {data:{name}} = await service.postItem(item,'position')
    dispatch(addPosition({...item, id:name}))
}


export {
    addPositionLoaded,fetchPositions
}
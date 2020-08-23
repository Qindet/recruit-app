import recruitService from "../service";

const service = new recruitService()


const addPosition = (payload) => {
    return {
        type: 'ADD_POSITION',
        payload
    }
}


const addPositionLoaded = (item) => async (dispatch) => {
    const {data:{name}} = await service.postItem(item,'position')
    dispatch(addPosition({...item, id:name}))
}


export {
    addPositionLoaded
}
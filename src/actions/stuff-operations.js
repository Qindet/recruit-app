import recruitService from "../service";

const service = new recruitService()

const ADD_STUFF_MEMBER = 'ADD_STUFF_MEMBER'

const addStuff = (payload) => {
    return {
        type: 'ADD_STUFF_MEMBER',
        payload
    }
}

const addStuffLoaded = (stuffForm) => async (dispatch) => {
    const {data:{name}} = await service.postItem(stuffForm,'stuff')
    dispatch(addStuff({...stuffForm,id:name}))
}

const stuffListRequested = () => {
    return {
        type: 'FETCH_STUFF_LIST_REQUESTED'
    }
}

const stuffListLoaded = (payload) => {
    return {
        type: 'FETCH_STUFF_LIST_LOADED',
        payload
    }
}

const stuffListFailed = (payload) => {
    return {
        type: 'FETCH_STUFF_LIST_FAILED'
    }
}

const changeStuffPage = (payload) => {
    return {
        type: 'STUFF_PAGE_CHANGED',
        payload
    }
}

const previousStuffPage = (payload) => {
    return {
        type: 'PREVIOUS_STUFF_PAGE'
    }
}

const nextStuffPage = () => {
    return {
        type: 'NEXT_STUFF_PAGE'
    }
}

const fetchStuffList = () => async (dispatch) => {
    try {
        dispatch(stuffListRequested())
        const items = await service.getItems('stuff')
        dispatch(stuffListLoaded(items))
    }
    catch (e) {
        dispatch(stuffListFailed(e))
    }
}


export {
    addStuffLoaded,
    fetchStuffList,
    changeStuffPage,
    previousStuffPage,
    nextStuffPage
}
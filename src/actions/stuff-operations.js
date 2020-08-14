const ADD_STUFF_MEMBER = 'ADD_STUFF_MEMBER'

const addStuff = (payload) => {
    return {
        type: 'ADD_STUFF_MEMBER',
        payload
    }
}


export {
    addStuff
}
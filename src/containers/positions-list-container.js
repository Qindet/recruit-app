import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Spinner from "../components/spinner";
import {fetchPositions} from "../actions";

import PositionList from "../components/position-list";

const PositionListContainer = () => {

    const dispatch = useDispatch()
    const items = useSelector(state=>state.positionOperations.positionItems)
    const loadingItems = useSelector(state=>state.positionOperations.loadingPositions)
    useEffect(() => {
        dispatch(fetchPositions())
    },[dispatch])

    if (loadingItems) {
        return <Spinner />
    }
    return (
      <PositionList items={items} dispatch={dispatch}/>
    )
}

export default PositionListContainer
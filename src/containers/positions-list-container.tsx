import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Spinner from "../components/spinner";
import {fetchPositions} from "../actions";

import PositionList from "../components/position-list";
import {getLoadingPositions, getPositions} from "../selectors/positions";
import {AppStateType} from "../reducers";

const PositionListContainer: React.FC = () => {

    const dispatch = useDispatch()
    const items = useSelector<AppStateType>(state=>getPositions(state))
    const loadingItems = useSelector<AppStateType>(state=>getLoadingPositions(state))
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
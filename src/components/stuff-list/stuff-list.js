import React, {useEffect} from "react";
import './stuff-list.css'
import {connect} from 'react-redux'

import {getLoadingStatusStuffList, getStuffList} from "../../selectors/stuff-list";
import Spinner from "../spinner";
import {fetchStuffList} from "../../actions/stuff-operations";
import StuffListItem from "../stuff-list-item/stuff-list-item";

const StuffList = (props) => {

    useEffect(() => {
        props.fetchStuffList()
    },[props.fetchStuffList])

    if (props.loadingStatus) {
        return <Spinner />
    }
    return (
        <div className="d-flex flex-column align-items-center ">
            {props.stuffList.map(item=><StuffListItem key={item.id} item={item}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loadingStatus: getLoadingStatusStuffList(state),
        stuffList: getStuffList(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStuffList: () => dispatch(fetchStuffList())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StuffList)
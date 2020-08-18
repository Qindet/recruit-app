import React, {useEffect} from "react";
import {connect} from 'react-redux'

import {getLoadingStatusStuffList, getStuffList,getStuffPageSize,getStuffNumberPage} from "../selectors/stuff-list";
import Spinner from "../components/spinner"
import {changeStuffPage, fetchStuffList, nextStuffPage, previousStuffPage} from "../actions/stuff-operations";
import StuffListItem from "../components/stuff-list-item/stuff-list-item";
import StuffList from "../components/stuff-list";
import {deleteStuffItemLoaded, openStuffModal} from "../actions";

const StuffListContainer = (props) => {

    useEffect(() => {
        props.fetchStuffList()
    },[props.fetchStuffList])

    if (props.loadingStatus) {
        return <Spinner />
    }

    const startItem = (props.numberPage) * props.pageSize + 1
    const items = props.stuffList.map(item=><StuffListItem key={item.id} item={item} onOpen={()=>props.openStuffModal(item)} onDelete={()=>props.deleteStuffItem(item)}/>)
        .filter((item,i)=> i+1>= startItem && i+1< startItem+props.pageSize)
    const paginationList = new Array(Math.ceil(props.stuffList.length/props.pageSize)).fill(1).map((item,i)=>
    {
        const style = i===props.numberPage? `page-item page-link  btn-cursor actives`: 'page-item page-link  btn-cursor'
        return <li key={i} className={style} onClick={()=>props.changeStuffPage(i)}>{i+1}</li>
    })


    return (
        <StuffList
            items={items}
            paginationList={paginationList}
            getPreviousPage={props.getPreviousPage}
            getNextPage={props.getNextPage}
            numberPage={props.numberPage}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        loadingStatus: getLoadingStatusStuffList(state),
        stuffList: getStuffList(state),
        numberPage: getStuffNumberPage(state),
        pageSize: getStuffPageSize(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStuffList: () => dispatch(fetchStuffList()),
        changeStuffPage: (i) => dispatch(changeStuffPage(i)),
       getPreviousPage: () => dispatch(previousStuffPage()),
        getNextPage: () => dispatch(nextStuffPage()),
        openStuffModal:  (item) => dispatch(openStuffModal(item)),
        deleteStuffItem: (item) =>  dispatch(deleteStuffItemLoaded(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StuffListContainer)
import React, {useEffect} from "react";
import {connect} from 'react-redux'

import {getLoadingStatusStuffList, getStuffList,getStuffPageSize,getStuffNumberPage} from "../selectors/stuff-list";
import Spinner from "../components/spinner"
import {changeStuffPage, fetchStuffList, nextStuffPage, previousStuffPage} from "../actions/stuff-operations";
import StuffListItem from "../components/stuff-list-item/stuff-list-item";
import StuffList from "../components/stuff-list";
import {deleteStuffItemLoaded,
    openStuffModal} from "../actions";
import {StuffItemType} from "../ts-types/main-types";
import {AppStateType} from "../reducers";

//
type StuffListContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnProps
type MapStatePropsType = {
    loadingStatus: boolean,
    stuffList: Array<StuffItemType>,
    numberPage: number,
    pageSize: number
}
type MapDispatchPropsType = {
    fetchStuffList: () => void,
    changeStuffPage: (i: number) => void,
    getPreviousPage: () => void,
    getNextPage: () => void,
    openStuffModal:  (item: StuffItemType) => void,
    deleteStuffItem: (item: StuffItemType) => void
}
type OwnProps = {}
//

const StuffListContainer: React.FC<StuffListContainerPropsType> = ({fetchStuffList,loadingStatus,numberPage,
                                                                       pageSize,stuffList,openStuffModal,deleteStuffItem,changeStuffPage,
                                                                       getNextPage,getPreviousPage}) => {
    useEffect(() => {
        fetchStuffList()

    },[fetchStuffList])
    if (loadingStatus) {
        return <Spinner />
    }
    const startItem = (numberPage) * pageSize + 1
    const items = stuffList.map(item=><StuffListItem key={item.id} item={item} onOpen={()=>openStuffModal(item)} onDelete={()=>deleteStuffItem(item)}/>)
        .filter((item,i)=> i+1>= startItem && i+1< startItem+pageSize)
    const paginationList = new Array(Math.ceil(stuffList.length/pageSize)).fill(1).map((item,i)=>
    {
        const style = i===numberPage? `page-item page-link  btn-cursor actives`: 'page-item page-link  btn-cursor'
        return <li key={i} className={style} onClick={()=>changeStuffPage(i)}>{i+1}</li>
    })
    return (
        <StuffList
            items={items}
            paginationList={paginationList}
            getPreviousPage={getPreviousPage}
            getNextPage={getNextPage}
            numberPage={numberPage}
        />
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        loadingStatus: getLoadingStatusStuffList(state),
        stuffList: getStuffList(state),
        numberPage: getStuffNumberPage(state),
        pageSize: getStuffPageSize(state)
    }
}
const mapDispatchToProps = (dispatch:any): MapDispatchPropsType => {
    return {
        fetchStuffList: () => dispatch(fetchStuffList()),
        changeStuffPage: (i:number) => dispatch(changeStuffPage(i)),
        getPreviousPage: () => dispatch(previousStuffPage()),
        getNextPage: () => dispatch(nextStuffPage()),
        openStuffModal:  (item:StuffItemType) => dispatch(openStuffModal(item)),
        deleteStuffItem: (item:StuffItemType) =>  dispatch(deleteStuffItemLoaded(item)),

    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(StuffListContainer)
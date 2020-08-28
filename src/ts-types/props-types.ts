import {NewStuffFormValidFieldsType, PositionItemType, StuffItemType} from "./main-types";


export type ModalPropsType = {
    item: StuffItemType,
    onClose: () => void
}

export type NewStuffFormPropsType = {
    initialValues: StuffItemType,
    flag: string,
    validate: (values:NewStuffFormValidFieldsType) => NewStuffFormValidFieldsType,
    updateHelper: (values:StuffItemType,update:(item:StuffItemType)=>void,close:()=>void)=>void,
    submitHelper: (loaded:(item:StuffItemType)=>void,values:StuffItemType,reset:()=>void)=>void,
    updateStuffItem: (item: StuffItemType) => void,
    closeModal: () => void,
    addStuffLoaded: (item: StuffItemType) => void,
    positions: Array<PositionItemType>
}

export type PositionListPropsType = {
    items: Array<PositionItemType>|unknown,
    dispatch: (func:any) => void
}

export type StuffListPropsType = {
    items: Array<JSX.Element>,
    paginationList: Array<JSX.Element>,
    numberPage: number,
    getPreviousPage: () => void,
    getNextPage: () => void
}
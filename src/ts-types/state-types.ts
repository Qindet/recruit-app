import {PositionItemType, StuffItemType} from "./main-types";


export type StufOperationStateType = {
    stuffList: Array<StuffItemType>,
    loadingList: boolean,
    errorList: boolean,
    pageSize: number,
    numberPage: number
}

export type PositionOperationsStateType = {
    positionItems: Array<PositionItemType>,
    loadingPositions: boolean,
    errorPositions: boolean
}

export type GeneralOperationsStateType = {
    isStuffModalOpen: boolean,
    modalItem: StuffItemType
}



export type StuffItemType = {
    firstName: string,
    lastName: string,
    address: string,
    position: string,
    email: string,
    id?: string,
    date?:string
}

export type PositionItemType = {
    positionName: string,
    salary: string,
    id?: string
}

export type NewStuffFormValidFieldsType = {
    firstName: string | any[],
    lastName: string | any[],
    address: string | any[],
    email: string
}


export type NewPositionFormValidFieldsType = {
    positionName: string | any[],
    salary: string | any[]
}


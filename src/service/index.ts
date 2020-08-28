import axios from 'axios'
import {ServicePropsDataType, ServicePropsType} from "../ts-types/service-types";


enum responseCode {
    Success=200
}


export default class recruitService {
    private _URL=process.env.REACT_APP_DB_URL

    postItem = async (data: ServicePropsDataType,type: ServicePropsType) => {
        try {
            const res = await axios.post(`${this._URL}/${type}.json`,data)
            if (res.status !== responseCode.Success) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
    getItems = async (type: ServicePropsType) => {
        try {
            const res = await axios.get(`${this._URL}/${type}.json?`)
            if (res.status !== responseCode.Success) {
                throw new Error('Error')
            }
            if (!res.data) {
                return
            }
            return Object.keys(res.data).map(item=> {
                return {...res.data[item],id:item}
            })
        } catch (e) {
            throw e
        }
    }
    updateItem = async (data: ServicePropsDataType,type: ServicePropsType) => {
        try {
            const res = await axios.put(`${this._URL}/${type}/${data.id}.json`,data)
            if (res.status !== responseCode.Success) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
    deleteItem = async (data: ServicePropsDataType,type: ServicePropsType) => {
        try {
            const res = await axios.delete(`${this._URL}/${type}/${data.id}.json`)
            if (res.status !== responseCode.Success) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
}
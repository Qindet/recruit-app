import axios from 'axios'
export default class recruitService {

    constructor() {
        this._URL=process.env.REACT_APP_DB_URL
    }

    postItem = async (data,type) => {
        try {
            console.log(this._URL)
            const res = await axios.post(`${this._URL}/${type}.json`,data)
            if (res.status !== 200) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
    getItems = async (type) => {
        try {
            const res = await axios.get(`${this._URL}/${type}.json`)
            if (res.status !== 200) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
    updateItem = async (data,type) => {
        try {
            const res = await axios.put(`${this._URL}/${type}/${data.id}.json`,data)
            if (res.status !== 200) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
    deleteItem = async (data,type) => {
        try {
            const res = await axios.delete(`${this._URL}/${type}/${data.id}.json`)
            if (res.status !== 200) {
                throw new Error('Error')
            }
            return res
        } catch (e) {
            throw e
        }
    }
}
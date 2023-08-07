import axios from 'axios'
import { Host } from './host';

const axiosClient = axios.create({
    baseURL: Host,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: false
})


export const get = (path: string) => {
    return new Promise(async (resolve, reject) => {
        await axiosClient.get(path)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getById = (path: string, id: string) => {
    return new Promise(async (resolve, reject) => {
        await axiosClient.get(`${path}/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const post = (path: string, body: {}) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(path, body)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
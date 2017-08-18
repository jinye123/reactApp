import {get} from './get.js'
import {post} from './post.js'

export function getData(url) {
    return new Promise((resolve, reject) => {
        get(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })

}

export function postData(url, data) {
    return new Promise((resolve, reject) => {
        post(url, data)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
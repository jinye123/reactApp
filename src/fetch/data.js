import 'whatwg-fetch'
import 'es6-promise'

export function getData(url) {
    return new Promise((resolve,reject)=>{
        fetch(url, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            }
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function postData(url,data) {
     return new Promise((resolve,reject)=>{
         fetch(url, {
             method: 'POST',
             credentials: 'include',
             headers: {
                 'Accept': 'application/json, text/plain, */*',
                 'Content-Type': 'application/x-www-form-urlencoded'
             },
             body: obj2params(data)
         }).then((res)=>{
             resolve(res)
         }).catch((err)=>{
             reject(err)
         })
     })
}

function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}
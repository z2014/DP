export default function request(url, opts) {
    const defaultOptions = {
        credentials: 'include'
    }
    const newOpts = Object.assign(defaultOptions, opts)
    newOpts.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
    if (newOpts.method === 'POST' || newOpts.method === 'PUT') {
        newOpts.body = JSON.stringify(opts.body)
    }
    return fetch(url, newOpts).then(res => {
        if (res.status >= 200 && res.status <= 300) {
            return res.json()
        }
    }).then(res => {
        console.log(`'${url}'   `, res)
        return res
    })
}
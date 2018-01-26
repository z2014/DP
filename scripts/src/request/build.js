export default function buildJs(pageId) {
    fetch('/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            pageId: pageId
        })
    }).then(res => {
        if (res.status >= 200 && res.status <= 300) {
            return res.json()
        }
    }).then(res => {
        console.log(res)
    })
}
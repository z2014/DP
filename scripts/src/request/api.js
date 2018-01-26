import request from './request'
export default function buildJs(pageId) {
    request('/create', {
        method: 'POST',
        body: {
            pageId
        }
    })
}




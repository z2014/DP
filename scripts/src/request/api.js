import request from './request'
export function buildJs(pageId, config) {
    request('/create', {
        method: 'POST',
        body: {
            pageId,
            config
        }
    })
}

export function savePage(pageInfo, pageId) {
    request('/pageinfo', {
        method: 'POST',
        body: {
            pageInfo,
            pageId
        }
    })
}

export function getPageInfo(pageId) {
    return request(`/pageinfo?pageId=${pageId}`)
}



module.exports = {
    url: {
        name: '链接地址',
        type: 'string'
    },
    text: {
        name: '文本内容',
        type: 'string'
    },
    location: {
        name: '是否链接到新窗口',
        type: 'radio',
        def: 'location',
        options: {
            yes: '是',
            no: '否'
        }
    }
}

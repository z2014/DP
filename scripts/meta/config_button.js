
module.exports = {
    size: {
        name: '按钮大小',
        type: 'radio',
        def: 'size',
        options: {
            big: '大',
            middle: '中',
            small: '小'
        }
    },
    content: {
        name: '按钮内容',
        type: 'string'
    },
    location: {
        name: '位置',
        type: 'radio',
        def: 'location',
        options: {
            left: '左',
            center: '中',
            right: '右'
        }
    }
}

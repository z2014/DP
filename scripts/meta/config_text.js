
module.exports = {
    label: {
        name: '文本组件',
        type: 'string'
    },
    content: {
        name: '文本内容',
        type: 'string'
    },
    style: {
        name: '样式',
        type: 'radio',
        def: 'style',
        options: {
            center: '居中',
            left: '居左',
            right: '居右'
        }
    }
}

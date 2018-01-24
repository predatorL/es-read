

let catalog = [
    {
        name: '变量和作用域',
        page: 'variable_actionScope'
    }
]

module.exports = catalog.map((item, index) => {
    item.id = index + 1
    return item
})



let catalog = [
    {
        name: '变量和作用域',
        page: 'variable_actionScope'
    },
    {
        name: '*引用类型',
        page: 'referenceType'
    },
    {
        name: '面向对象的程序设计',
        page: 'Object_Oriented'
    },
    {
        name: '函数表达式',
        page: 'function'
    },
    {
        name: '浏览器对象模型',
        page: 'BOM'
    },
    {
        name: '*文档对象模型',
        page: 'DOM'
    },
    {
        name: '*事件',
        page: 'event'
    },
    {
        name: '**canvas',
        page: 'canvas'
    },
    {
        name: 'HTML5 脚本编程',
        page: 'HTML5'
    },
    {
        name: 'JSON',
        page: 'JSON'
    },
    {
        name: '*Ajax 与 Comet',
        page: 'Ajax_Comet'
    },
    {
        name: '**高级技巧',
        page: 'AdvancedTechniques'
    },
    {
        name: '***离线应用与客户端存储',
        page: 'application_cache__storge'
    },
    {
        name: '**Geolocation API',
        page: 'Geolocation_API'
    },
    {
        name: '****File API',
        page: 'File_API'
    },
    {
        name: '****Web Workers',
        page: 'Web_Workers'
    },

]

module.exports = catalog.map((item, index) => {
    item.id = index + 1
    return item
})



const randerDom = async () => {
    let list = await getList()  //拿到后端传递数据
    let total = list.length  //数据条数
    let page = 0 // 页码
    let pageSize = 100 // 每页展示数据条数

    let render = (page) => {
        const fragment = document.createDocumentFragment()
        setTimeout(() => {
            for (let i = page * pageSize; i < page * pageSize + pageSize; i++) {
                let item = list[i]
                let div = document.createElement('div')
                div.innerHTML = `<img src="${item.img}" />`
                fragment.appendChild(div)
            }
            div.appendChild(fragment)
            render(page + 1)
        }, 0)
    }
}
randerDom()
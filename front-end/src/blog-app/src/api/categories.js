


export function getCategories() {
    return {
        data: [
            {
                id: 1,
                name: "类别1",
            },
            {
                id: 2,
                name: "类别2",
            },
            {
                id: 3,
                name: "类别3",
            }
        ]
    }

    // return request({
    //     url: `/api/Posts/page/pageIndex=${page.pageIndex}&pageSize={page.pageSize}`,
    //     method: 'get'
    // })
}
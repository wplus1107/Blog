// import request from '@/utils/request'

export function getPostsByPage(page) {
    return {
        totalCount: 30,
        pageIndex: page.pageIndex,
        pageSize: page.pageSize,
        data: [
            {
                id: '1',
                title: "个人博客开发记录",
                date: '2022-06-26',
                categories: ['技术', '记录'],
                tags: ['标签1', '标签2'],
                summary: 'summary...'
            },
            {
                id: '2',
                title: "标题2",
                date: '2022-06-25',
                categories: [],
                tags: ['标签1'],
                summary: 'summary...'
            },
            {
                id: '3',
                title: "标题3",
                date: '2022-06-24',
                categories: ['类别2'],
                tags: [],
                summary: 'summary...'
            }
        ]
    }

    // return request({
    //     url: `/api/Posts/page/pageIndex=${page.pageIndex}&pageSize={page.pageSize}`,
    //     method: 'get'
    // })
}

export function getPostsDate() {
    return {
        data: [
            {
                year: 2022,
                month: [12,11,10,9,8,7,6,5,4,3,2,1]
            },
            {
                year: 2021,
                month: [11,9,6,4,2]
            },
            {
                year: 2020,
                month: [12,10,8,7,5,3,1]
            }
        ]
    }

    // return request({
    //     url: `/api/Posts/page/pageIndex=${page.pageIndex}&pageSize={page.pageSize}`,
    //     method: 'get'
    // })
}

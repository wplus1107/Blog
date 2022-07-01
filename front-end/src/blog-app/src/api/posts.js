// import request from '@/utils/request'

export function getPosts(page) {
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
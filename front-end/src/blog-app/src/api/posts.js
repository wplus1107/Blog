// import request from '@/utils/request'

export function getPosts(page) {
    return {
        totalCount: 30,
        pageIndex: page.pageIndex,
        pageSize: page.pageSize,
        data: [
            {
                id: 'id1',
                title: "标题1",
                date: '2022-06-26',
                categories: ['类别1', '类别2'],
                tags: ['标签1', '标签2'],
                summary: 'summary...'
            },
            {
                id: 'id2',
                title: "标题2",
                date: '2022-06-25',
                categories: ['类别1'],
                tags: ['标签1'],
                summary: 'summary...'
            },
            {
                id: 'id3',
                title: "标题3",
                date: '2022-06-24',
                categories: ['类别2'],
                tags: ['标签2'],
                summary: 'summary...'
            }
        ]
    }

    // return request({
    //     url: `/api/Posts/page/pageIndex=${page.pageIndex}&pageSize={page.pageSize}`,
    //     method: 'get'
    // })
}
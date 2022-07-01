import { createRouter,createWebHashHistory} from "vue-router";
import HomePage from '@/views/HomePage/index.vue'

const routes = [
    {
        path: "/",
        name: 'home',
        component: HomePage
    },
    {
        path: "/posts",
        name: 'posts',
        component: HomePage,
        children: [
            {
                path: ":postId",
                name: 'post',
                component: HomePage
            }
        ]
    },
    {
        path:"/tags",
        name: 'tags',
        component: HomePage,
        children: [
            {
                path: ":tag",
                name: 'tag',
                component: HomePage
            }
        ]
    },
    // {
    //     path:"/tags/:tag",
    //     name: 'tag',
    //     component: HomePage
    // },
    {
        path:"/categories",
        name: 'categories',
        component: HomePage,
        children: [
            {
                path: ":cat",
                name: 'category',
                component: HomePage
            }
        ]
    },
    // {
    //     path:"/categories/:cat",
    //     name: 'category',
    //     component: HomePage
    // },
    {
        path:"/about",
        name: 'about',
        component: HomePage
    },
    {
        path:"/search",
        name: 'search',
        component: HomePage
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
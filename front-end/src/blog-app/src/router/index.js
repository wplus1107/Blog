import { createRouter,createWebHashHistory} from "vue-router";
import HomePage from '@/views/HomePage/index.vue'
import BlogPosts from '@/views/Posts/index.vue'
import BlogTags from '@/views/Tags/index.vue'
import BlogCategories from '@/views/Categories/index.vue'
import BlogAbout from '@/views/About/index.vue'

const routes = [
    {
        path: "/",
        name: 'home',
        component: HomePage
    },
    {
        path: "/posts",
        name: 'posts',
        component: BlogPosts
    },
    {
        path: "/posts/:postId",
        name: 'post',
        component: HomePage
    },
    {
        path:"/tags",
        name: 'tags',
        component: BlogTags,
    },
    {
        path: "/tags/:tag",
        name: 'tag',
        component: HomePage
    },
    {
        path:"/categories",
        name: 'categories',
        component: BlogCategories
    },
    {
        path:"/categories/:cat",
        name: 'category',
        component: HomePage
    },
    {
        path:"/about",
        name: 'about',
        component: BlogAbout
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
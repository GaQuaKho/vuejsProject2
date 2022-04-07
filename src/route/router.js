import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import Home from './../components/Home/Home.vue';
import About from './../components/About/About.vue'
import Blog from './../components/Blog/Blog.vue'
import Contact from './../components/Contact/Contact.vue'
import Portfolio from './../components/Portfolio/Portfolio.vue'
import Price from './../components/Price/Price.vue'
import BlogDetail from './../components/Blog/ChildBlog/BlogDetail.vue';
import Element from './../components/Element/Element.vue';
const routes = [
    {
        path: '/about',
        component:About 
    },
    {
        path: '/blog',
        component:Blog,

    },
    {
        path: '/blog/:id',
        component:BlogDetail,
    },
    {
        path: '/',
        component:Home 
    },
    {
        path: '/contact',
        component:Contact 
    },
    {
        path: '/element',
        component:Element
    },
    {
        path: '/portfolio',
        component:Portfolio
    },
    {
        path: '/price',
        component:Price
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
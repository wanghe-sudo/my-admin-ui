import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import Personal from "@/views/Personal.vue";
import Role from "@/views/base/Role.vue";
import Dept from "@/views/base/Dept.vue";
import Post from "@/views/base/Post.vue";
import Operator from "@/views/base/Operator.vue";
import LoginLog from "@/views/base/LoginLog.vue";
import Welcome from "@/views/Welcome.vue";
import Admin from "@/views/base/Admin.vue";
import Menu from "@/views/base/Menu.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        // 子路由是在 Home 组件中渲染的，而不是在 Home 组件的路由中渲染的
        // 子路由的 path 是相对于 Home 组件的路由的
        // 子路由的 component 是相对于 Home 组件的路由的
        // 子路由的 redirect 是相对于 Home 组件的路由的
        // 子路由的 children 是相对于 Home 组件的路由的
        // 子路由的 name 是相对于 Home 组件的路由的
        // 子路由的 meta 是相对于 Home 组件的路由的
        // 子路由的 props 是相对于 Home 组件的路由的
        // 子路由的 alias 是相对于 Home 组件的路由的
        // 子路由的 beforeEnter 是相对于 Home 组件的路由的
        // 子路由的 beforeRouteEnter 是相对于 Home 组件的路由的
        // 子路由的 beforeRouteLeave 是相对于 Home 组件的路由的
        // 子路由的 beforeRouteUpdate 是相对于 Home 组件的路由的
        // 子路由的 afterRouteEnter 是相对于 Home 组件的路由的
        // 子路由的 afterRouteLeave 是相对于 Home 组件的路由的
        // 子路由的 afterRouteUpdate 是相对于 Home 组件的路由的
        // 子路由的 scrollBehavior 是相对于 Home 组件的路由的
        // 子路由的 parseQuery 是相对于 Home 组件的路由的
        // 子路由的 stringifyQuery 是相对于 Home 组件的路由的
        // 子路由的 normalize 是相对于 Home 组件的路由的
        // 子路由的 resolve 是相对于 Home 组件的路由的
        // 子路由的 match 是相对于 Home 组件的路由的
        // 子路由的 addRoute 是相对于 Home 组件的路由的
        // 子路由的 hasRoute 是相对于 Home 组件的路由的
        // 子路由的 removeRoute 是相对于 Home 组件的路由的
        // 子路由的 replace 是相对于 Home 组件的路由的
        // 子路由的 onError 是相对于 Home 组件的路由的
        // 子路由的 onReady 是相对于 Home 组件的路由的
        // 子路由的 onBeforeRouteEnter 是相对于 Home 组件的路由的
        children: [
            {
                path: '/welcome',
                component: Welcome,
                meta: {tTitle: '首页'}
            }, {
                path: '/personal',
                component: Personal,
                meta: {sTitle: '个人中心', tTitle: '个人信息'}
            },
            {
                path: '/base/Admin',
                component: Admin,
                meta: {sTitle: '基础管理', tTitle: '用户信息'}
            },
            {
                path: '/base/Role',
                component: Role,
                meta: {sTitle: '基础管理', tTitle: '角色管理'}
            },
            {
                path: '/base/Menu',
                component: Menu,
                meta: {sTitle: '基础管理', tTitle: '菜单信息'}
            }, {
                path: '/base/Dept',
                component: Dept,
                meta: {sTitle: '基础管理', tTitle: '部门信息'}
            },
            {
                path: '/base/Post',
                component: Post,
                meta: {sTitle: '基础管理', tTitle: '岗位信息'}
            },
            {
                path: '/monitor/Operator',
                component: Operator,
                meta: {sTitle: '日志管理', tTitle: '操作日志'}
            },
            {
                path: '/monitor/LoginLog',
                component: LoginLog,
                meta: {sTitle: '日志管理', tTitle: '登录日志'}
            }
        ]

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

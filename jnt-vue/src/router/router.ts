import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes:RouteRecordRaw[]=[
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        name:'Main',
        component:()=>import("@/pages/main/index.vue"),
        children:[
            {
                path:'',
                name:'Shopping',
                component:()=>import("@/pages/main/news/shopping.vue"),
            },
            {
                path:'news/tax',
                name:'Tax',
                component:()=>import("@/pages/main/news/tax.vue"),
            },
        ]
    },
    {
        path:'/main/store-list',
        name:'StoreList',
        component:()=>import("@/pages/main/store.vue")
    },
  
    {
        path:'/detail/this',
        name:'Detail',
        component:()=>import('@/pages/main/detail/index.vue')
    } ,
    {
        path:'/login',
        name:'Login',
        component:()=>import("@/pages/login/index.vue"),
        children:[
            {
            path:'',
            name:'LoginIn',
            component:()=>import('@/pages/login/components/login.vue')
        },
        {
            path:'signin',
            name:'Signin',
            component:()=>import("@/pages/login/components/signin.vue")
        },
        {
            path:'/getphonecode',
            component:()=>import("@/pages/login/components/get-phone-code.vue")            }
        ]
    },
    {
        path:'/person',
        name:'Person',
        component:()=>import('@/pages/personal/index.vue'),
    },
    {
        path:'/person-config',
        name:'Config',
        component:()=>import("@/pages/personal/config.vue"),
    },
    {
        path:'/person-config/name-edit',
        name:'NameEdit',
        component:()=>import('@/pages/personal/edit/nameedit.vue')
    },
    {
        path:'/person-config/gender-edit',
        name:'GenderEdit',
        component:()=>import('@/pages/personal/edit/genderedit.vue')
    },
    {
        path:'/person-config/headpic',
        name:'HeadPicEdit',
        component:()=>import('@/pages/personal/edit/headedit.vue')
    }

]

const router=createRouter({
    history:createWebHistory('/tour/'),
    routes
})

export default router


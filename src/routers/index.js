import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Found from '../pages/Found.vue'
import Orderfrom from '../pages/Orderfrom.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import Main from '../pages/Main.vue'
import Login from '../pages/LoginIN.vue'
// import Registe from '../pages/Registe.vue'
import Search from '../pages/Search2.vue'
import More from '../pages/More.vue'
import Detailtabbar from '../components/Detailtabbar.vue'
import Goodlist from '../pages/Goodslist.vue'
import Address from '../pages/Address.vue'
// import D_1 from '../pages/D_1.vue'
// import D_2 from '../pages/D_2.vue'
// import D_3 from '../pages/D_3.vue'


// import axios from 'axios'
const routes = [
    //进入http://localhost:8080/main
    {
        path: '/main',
        name: 'main',
        component: Main,
        // 嵌套
        children: [{
                // 当页面请求地址为http://localhost:8080/home在<router-view>加载Home组件
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                // 当页面请求地址为http://localhost:8080/found在<router-view>加载Found组件
                path: 'found',
                name: 'found',
                component: Found
            }, {
                // 当页面请求地址为http://localhost:8080/orderfrom在<router-view>加载Orderfrom组件
                path: 'orderfrom',
                name: 'orderfrom',
                component: Orderfrom
            }, {
                // 建议根据名字跳转
                // 当页面请求地址为http://localhost:8080/mine在<router-view>加载Mine组件
                path: 'mine',
                name: 'mine',
                component: Mine
            }
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/detailtabbar',
        name: 'detailtabbar',
        component: Detailtabbar,
    },
    {
        path: '/search',
        name: 'search',
        component: Search,

    },
    {
        path: '/goodlist',
        name: 'goodlist',
        component: Goodlist,

    },
    {
        path: '/more',
        name: 'more',
        component: More
    },
    {
        path: '/address',
        name: 'address',
        component: Address
    },
    // 平时我们一进来8080端口，页面的地址显示http://localhost:8080/#/，所以我们需要重定向
    // 如果匹配到‘/’告诉他请跳转到/main/home主页
    {
        path: '/',
        redirect: '/main/home'
    }
];
const router = new VueRouter({
    // 默认地址栏例如：http://localhost:8080/#/有‘#’，这就是默认哈希值路由
    // 不好看，所以vue提供一个方法将其去掉 mode:'history'
    // 不过这个模式需要后端支持，打包文件后（npm run build）是同域的，用了就只能返回404
    /*
    如果出现404记得去app.js文件（记得把请求头去掉，因为项目发布时是同域的）：
    app.use(function(req,res,next){
        // 将下面这个注释掉
        next(createError(404))
        // 加上这一句
        res.redirect('/')
    })
    */
    mode: 'history',
    routes
});
// 全局前置守卫
// 注册一个全局前置守卫
/*
   当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行
   ，此时导航在所有守卫 resolve 完之前一直处于 等待中。

   *to: Route: 即将要进入的目标 路由对象

   *from: Route: 当前导航正要离开的路由

   *next: Function: 一定要调用该方法来 resolve 这个钩子。
                    执行效果依赖 next 方法的调用参数。


*/
// 如果用户名正确就会在主页，但是如果不正确，8080就会一直在登录页，无论你如何刷新
// router.beforeEach((to, from, next) => {
//     axios.get('http://localhost:3000/login',{
//         params:{
//             token:sessionStorage.getItem('token')
//         }
//     })
//     window.console.log(to)
//     window.console.log(from)
//     window.console.log(next)

//     // 如果执行了next()才会放行（一般登录注册会用到）
//     if (window.sessionStorage.getItem('token') === 'eyJ1c2VybmFtZSI6IuaWueS4iCIsInBhc3N3b3JkIjoia29rbzEyMyJ9'||to.name==='login') {
//         next(); //放行
//     } else {
//         // 跳回注册页
//         router.push({
//             name: 'registe'
//         })
//     }
// })


export default router
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import product from '../components/product.vue'
import login from '../components/login.vue'
import sort from '../components/sort.vue'
import detail from '../components/detail.vue'
import category from '../components/category.vue'
import home from '../components/home.vue'


export default new Router({
  routes: [
            {
                path:'/',
                redirect:'/home/140'
            },
            {
                path:'/home/:cityid',
                component:home
            },

            {
                path:'/category',
                component:category,
                children:[
                    {
                        path:'list',
                        component:sort
                    },
                    {
                        path:'detail',
                        component:detail
                    },
                    {
                        path:'/',
                        redirect:'/category/list'
                    }
                ]
            },    
            {
                // path:'/product/:myfirstId/:mysecondId',
                path:'/product/:myfirstId/:mysecondId',
                component:product
            },

            {
                path:'/login',
                component:login
            },
            // {
            //     path:"/",
            //     redirect:"/home"
            // }
  ]
})

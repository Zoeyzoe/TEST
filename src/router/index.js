import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import product from '../components/product.vue'
import login from '../components/login.vue'
import sort from '../components/sort.vue'
import category from '../components/category.vue'

export default new Router({
  routes: [
            {
                path:'/category',
                component:category,
                children:[
                    {
                        path:'list',
                        component:sort
                    },
                    {
                        path:'/',
                        redirect:'/category/list'
                    }
                ]
            },    
            {
                // path:'/product/:myfirstId/:mysecondId',
                path:'/product',
                component:product
            },
            {
                path:'/sort',
                component:sort
            },
            {
                path:'/login',
                component:login
            }
  ]
})

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Front_End',
    component: () => import('../views/Front_End.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/client/Index.vue')
      },
      {
        path: 'saleProductsPage',
        name: 'SaleProductsPage',
        component: () => import('../views/client/SaleProductsPage.vue')
      },
      {
        path: 'singleProductPage/:id',
        name: 'SingleProductPage',
        component: () => import('../views/client/SingleProductPage.vue')
      },
      {
        path: 'shoppingCartPage',
        name: 'ShoppingCartPage',
        component: () => import('../views/client/ShoppingCartPage.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: '',
        name: '後台首頁',
        component: () => import('../views/admin/Index.vue')
      },
      {
        path: 'manageProductsPage',
        name: 'ManageProductsPage',
        component: () => import('../views/admin/ManageProductsPage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

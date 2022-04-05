<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/saleProductsPage" class="nav-link">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shoppingCartPage" class="nav-link">
              <i class="bi bi-cart-fill position-relative">
                購物車
                <span class="position-absolute top-0 start-100 translate-middle badge border-light rounded-pill bg-danger">{{ shoppingCartNum }}</span>
              </i>
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav">
        <router-link to="/login" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          後台登入
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import emitter from '@/library/mitt.js'

export default {
  data () {
    return {
      shoppingCartNum: 0
    }
  },
  methods: {
    getShoppingCart () {
      const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PATH}/cart`
      this.$http.get(api).then(res => {
        this.shoppingCartNum = res.data.data.carts.length
      })
    }
  },
  created () {
    this.getShoppingCart()
    // 使用 emitter.on 接收購物車資料數量
    emitter.on('getShoppingCartNum', num => {
      this.shoppingCartNum = num
    })
  }
}
</script>

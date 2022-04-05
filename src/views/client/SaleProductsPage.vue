<template>
  <div class="container">
    <h2 class="text-center fw-bold">產品頁面</h2>
    <div class="mt-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div style="height: 100px; background-size: cover; background-position: center" :style="{ 'background-image': `url(${item.imageUrl})` }"></div>
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary" @click="goSingleProductPage(item)" :disabled="loadingStatus === item.id">
                  <i :class="{'fas fa-spinner fa-pulse': loadingStatus === item.id, 'fas fa-search': !(loadingStatus === item.id)}"></i> 查看更多
                </button>
                <button type="button" class="btn btn-outline-danger" @click="addShoppingCart(item.id)">
                  <i class="fas fa-plus"></i> 購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { successToast, errorToast, warningToast } from '@/library/toastMessage.js'
import emitter from '@/library/mitt.js'

export default {
  data () {
    return {
      products: [], // 產品列表資料
      product: {}, // 單一產品資料
      loadingStatus: '', // 按鈕讀取狀態
      isLoading: '', // 頁面讀取狀態
      shoppingCartNum: 0
    }
  },
  methods: {
    // 取得產品資料列
    getProducts () {
      const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PATH}/products`
      this.$http.get(api).then(res => {
        this.products = res.data.products
      }).catch(() => {
        warningToast('商家目前並沒有販賣任何商品！！')
      })
    },
    // 跳轉到單一產品資料頁面
    goSingleProductPage (item) {
      this.$router.push(`/singleProductPage/${item.id}`)
    },
    // 讀取購物車資料
    getShoppingCart () {
      const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PATH}/cart`
      this.$http.get(api).then(res => {
        console.log(res)
        this.shoppingCartNum = res.data.data.carts.length
        // 使用 emitter.emit 的方法推送購物車資料數量至另一個元件上
        emitter.emit('getShoppingCartNum', this.shoppingCartNum)
      })
    },
    // 新增購物車資料
    addShoppingCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PATH}/cart`
      const cartObj = {
        data: {
          product_id: id,
          qty
        }
      }
      this.$http.post(api, cartObj).then(res => {
        console.log(res)
        successToast(res.data.message)
      }).catch(err => {
        errorToast(err.data.message)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss"></style>

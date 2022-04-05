<template>
  <div class="container">
    <h2 class="text-center fw-bold">購物車</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shoppingCart: {}, // 購物車列表
      coupon_code: '', // 優惠券折扣代碼
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 讀取購物車資料
    getShoppingCart () {
      const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PATH}/cart`
      this.$http.get(api).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getShoppingCart()
  }
}
</script>

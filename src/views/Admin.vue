<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <span class="fs-3 fw-bold text-white align-baseline">後台管理</span>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/manageProductsPage" class="nav-link">產品管理</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    checkedAmdinLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*=\s*([^;]*).*$)|^.*$/, '$1') // 取得名為 hasToken 的 cookie
      this.$http.defaults.headers.common.Authorization = token // 把 Token 加入到 Headers Authorization 裡
      const api = `${process.env.VUE_APP_API_URL}user/check`
      this.$http.post(api).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
        this.$router.push('/login') // 執行失敗，跳轉後台登入頁面
      })
    }
  },
  created () {
    this.checkedAmdinLogin()
  }
}
</script>

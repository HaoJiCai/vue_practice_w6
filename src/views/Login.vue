<template>
  <div class="wrapper">
    <div class="container_login">
      <div class="loginBlock">
        <h1>管理者登入</h1>
        <form class="loginInputBlock" @submit.prevent="adminLogin">
          <input type="email" id="accountInput" v-model="manager.username" @keyup.enter="adminLogin" placeholder="Email Address" requried>
          <input type="password" id="passwordInput" v-model="manager.password" @keyup.enter="adminLogin" placeholder="Password" requried autocomplete="off">
          <button type="submit" id="signinBtn" class="signinBtn">登入</button>
        </form>
        <button type="button" class="returnBtn" @click="goIndex">返回首頁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      manager: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    adminLogin () {
      const api = `${process.env.VUE_APP_URL}/admin/signin`
      this.$http.post(api, this.manager).then(res => {
        const { token, expired } = res.data
        document.cookie = `hasToken=${token}; expires=${new Date(expired)};`
        this.$router.push('/admin') // 執行成功，跳轉產品管理頁面
      }).catch(err => {
        alert(err)
        this.manager.username = ''
        this.manager.password = ''
      })
    },
    goIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .wrapper{
    .container_login {
      padding: 60px 10px;
      border-radius: 0.5rem;
      .loginBlock {
        background-color: #ced4da;
        margin: 0 30%;
        padding: 40px 60px;
        h1 {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: rgba(49, 49, 49, 0.651);
          text-align: center;
        }
        .loginInputBlock{
          display: flex;
          flex-direction: column;
          input {
            width: 100%;
            line-height: 3;
            font-size: 1rem;
            margin-bottom: 20px;
            border: 3px solid #ced4da;
          }
          .signinBtn {
            width: 100%;
            font-size: 1rem;
            font-weight: 400;
            line-height: 2.5;
            color: whitesmoke;
            background-color: rgb(50, 50, 156);
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            cursor: pointer;
          }
          .signinBtn:hover {
            font-size: 1.25rem;
            background-color: rgb(36, 39, 122);
            transition-duration: 0.25s;
          }
        }
        .returnBtn {
          width: 100%;
          font-size: 1rem;
          font-weight: 400;
          line-height: 2.5;
          color: whitesmoke;
          background-color: rgb(156, 50, 50);
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          cursor: pointer;
          margin-top: 10px;
        }
        .returnBtn:hover {
          font-size: 1.25rem;
          background-color: rgb(209, 48, 20);
          transition-duration: 0.25s;
        }
      }
    }
  }
</style>

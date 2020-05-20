<template>
  <div class="contain">
    <div class="logintop"></div>

    <div class="loginbody">
      <div class="logindiv">
        <div class="loginform">
          <ul>
            <li>
              <input type="text" class="loginuser" id="user_name" name="username" placeholder="请输入用户名" v-model="name"/>
            </li>
            <li>
              <input type="password" class="loginpwd" id="password" name="password" placeholder="请输入密码" v-model="password"/>
            </li>
            <li>
              <button class="loginbtn" @click="loginClick">登录</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="loginbottom">
      Copyright by Lin
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import {login} from "../../network/user";

  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      loginClick() {
        login(this.name, this.password).then(res => {
          // * 存储token
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('isAdmin', res.data.isAdmin);
          console.log(localStorage.getItem('isAdmin'))
          this.$store.commit('addUserName', res.data.user.name)
          this.$store.commit('changeIsAdmin', res.data.isAdmin)
          alert('登陆成功')
          this.$router.push({path: this.$route.query.redirect || '/home',})
        })
      }
    }
  }
</script>

<style scoped>

  @import "~assets/css/login.css";

  #login {
    width: 100%;
    height: 100%;
  }
</style>

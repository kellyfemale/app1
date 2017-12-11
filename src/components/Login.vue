<template>
  <div class="login">
    <my-title :title='loginTitle'></my-title>
    <!-- 内容 -->
    <div class="content">
      <div class="pulogin">普通登录</div>
      <form action="#">
        <div class="loginContent">
          <div class="username">
            <input type="text" name="username" v-model="username" placeholder="点击输入用户名" autocomplete="off">
          </div>
          <div class="password">
            <input type="password" name="password" v-model="password" placeholder="请输入密码">
          </div>
          <button class="btn" @click.prevent='doLogin'>登录</button>
          <p class="reg">
            <a href="/#/reg">免费注册</a>
            <span></span>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Title from './Title'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      loginTitle: '登录'
    }
  },
  beforeCreate() {
    if (this.$store.state.isLogin) {
      this.$router.push('/me');
    }
  },
  components: {
    'myTitle': Title
  },
  methods: {
    doLogin() {
      this.$axios.post('/api/users/login', {
        username: this.username,
        password: this.password
      }).then((res) => {
        // console.log(res.data);
        if (res.data.errno === 0) {
          this.$store.commit('login', res.data.userInfo);
          window.localStorage.setItem('username', res.data.userInfo.username);
          this.$router.push('/me')
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  .content {
    width: 100%;
    .pulogin {
      width: 100%;
      height: 45px;
      text-align: center;
      line-height: 45px;
      font-size: 18px;
      color: #666;
      border-bottom: 3px solid #B81B22;
    }
    form {
      width: 100%;
      .loginContent {
        width: 364px;
        padding: 0 25px;
        div {
          width: 100%;
          height: 41px;
          padding: 25px 0 12.5px 0;
          input {
            width: 342px;
            font-size: 15px;
            font-weight: 400;
            background-color: #f5f5f5;
            color: #b5b5b5;
            padding: 12px;
            text-align: start;
            border: none;
            outline: none;
          }
        }

        .btn {
          width: 100%;
          text-align: center;
          padding: 10px 0;
          margin-top: 25px;
          font-size: 20px;
          color: #fff;
          border-radius: 2px;
          background-color: #b81b22;
        }
        .reg {
          width: 70px;
          height: 18px;
          line-height: 18px;
          margin-top: 10px;
          a {
            color: #4c4c4c;
          }
          span {
            display: inline-block;
            width: 7px;
            height: 7px;
            border-top: 1px solid #4c4c4c;
            border-left: 1px solid #4c4c4c;
            transform: rotate(135deg);
          }
        }
      }
    }
  }
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

</style>

<template>
  <div id="app">
    <router-view/>
    <!-- 底部路由导航链接 -->
    <footer>
        <router-link to="/">
          <span class="icon iconfont icon-home"></span>
          <span>凡客</span>
        </router-link>
        <router-link to="/type">
          <span class="icon iconfont icon-menu"></span>
          <span class="text">分类</span>
        </router-link>
        <router-link to="/order">
          <span class="icon iconfont icon-reserve"></span>
          <span class="text">定制</span>
        </router-link>

        <router-link to="/cart">
          <span class="icon iconfont icon-shopcar"></span>
          <span class="text">购物车</span>
        </router-link>
        <router-link to="/login">
          <span class="icon iconfont icon-user"></span>
          <span class="text">我的</span>
        </router-link>
    </footer>
  </div>
</template>

<script>
import "./assets/icons/iconfont.css";
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  z-index:999;
  a{
    text-decoration: none;
  }
  footer {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 414px;
    height: 54px;
    background-color:#fff;
    z-index: 2;
    a {
      display: flex;
      flex-direction: column;
      height: 54px;
      flex: 1;
      text-align: center;
      color: #ccc;
      span.icon {
        font-size: 25px;
      }
      span.text {
        font-size: 12px;
      }
      &.router-link-exact-active {
        color: #b81c22;
      }
    }
  }
}
</style>

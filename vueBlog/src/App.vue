<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container class="blog_container">
      <el-aside class="left_container">
        <el-container class="left_contain">
          <el-header>
            <h2>VUEBLOG</h2>
          </el-header>
          <el-main>
            <Menu></Menu>
          </el-main>
          <el-footer height="120px">
            <p>
              <small>
                © 2018 点点暖阳在北京 本博客起步阶段,谢谢光临。 All Rights Reserved.
              </small>
            </p>
            <p>
              <i class="fa fa-github fa-lg"></i>
              <i class="fa fa-weibo fa-lg"></i>
              <i class="fa fa-twitter-square fa-lg"></i>
              <i class="fa fa-tumblr-square fa-lg"></i>
            </p>
          </el-footer>
        </el-container>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/menu/menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.blog_container{
  height: 100%;
}
.left_container{
  padding-top: 60px;
  padding-bottom: 40px;
}
.left_contain{
  height: 100%;
}
</style>

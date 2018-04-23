<template>
  <div class="contact">
    <h3>contact</h3>
    <h2>contact for me.</h2>
    <el-row class="methods">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content "><a href="https://github.com/yinzhijiang" target="_blank"><i class="fa fa-github"></i></a></div></el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content "><a><i class="fa fa-weibo"></i></a></div></el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content "><a><i class="fa fa-twitter-square"></i></a></div></el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content "><a><i class="fa fa-tumblr-square"></i></a></div></el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content " @click="openQQ"><i class="fa fa-qq"></i></div></el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content " @click="openWeixin"><a><i class="fa fa-weixin"></i></a></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    openQQ () {
      const URL = require('../../../assets/qq.jpg')
      this.$alert(`<img style = "width:200px;height:250px;margin:0 auto;display:block" src = "${URL}" />`, '二维码在此, 认识一下吧', {
        dangerouslyUseHTMLString: true
      })
    },
    openWeixin () {
      const weixinURL = require('../../../assets/weixin.png')
      this.$alert(`<img style = "width:200px;height:200px;margin:0 auto;display:block" src = "${weixinURL}" />`, '二维码在此, 认识一下吧', {
        dangerouslyUseHTMLString: true
      })
    }
  }
}
</script>

<style scoped>
.contact{
  width: 100%;
  height: 100%;
  margin-top: 20px;
}
.grid-content {
  border-radius: 1px;
  min-height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3)
}
.grid-content:hover{
  background: rgba(34, 136, 150, 0.8)
}
.grid-content:hover i{
  text-shadow: 1px 1px #000
}
.grid-content i {
  color: white;
  font-size: 50px;
  line-height: 200px;
}
.methods{
  /* width: 100%;
  height: 50%; */
  background-image: url(../../../assets/images/banner_2.jpg);
  background-size: cover;
}
</style>

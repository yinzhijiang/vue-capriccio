<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always" height="800px">
      <el-carousel-item v-for="item in 4" :key="item">
      <img :src = "require('../../../assets/images/banner_' + item + '.jpg')" alt="">
        <!-- <h3>{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <div class="card_block">
      <h2>Hello, world.</h2>
      <h1>I'm Jiang Yin Zhi.</h1>
      <p class="intro-position"><span>初来乍到</span><span>多多指教</span></p>
      <p class="intro-address">yinzhi@163.com</p>
    </div>
    <skill-view></skill-view>
    <resume-view></resume-view>
    <portfolio-view></portfolio-view>
    <contact-view></contact-view>
  </div>
</template>

<script>
import skillView from './skill'
import contactView from './contactMe'
import resumeView from './resume'
import portfolioView from './portfolio'
export default {
  data () {
    return {
      // src : require('../../../assets/images/img-1.jpg')
    }
  },
  components: {
    skillView,
    contactView,
    resumeView,
    portfolioView
  }
}
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner{
    width: 100%;
    height: 100%;
    position: relative;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .card_block{
    width: 100%;
    height: 50%;
    background: rgba(0,0,0,0.5);
    z-index: 2;
    position:absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 2%;
  }
  .card_block h2{
    color:#f0f0f0;
    line-height: 40px;
    text-shadow: 3px 3px #000;
  }
  .card_block h1{
    color: rgb(34, 136, 150);
    font-size: 80px;
    line-height: 100px;
    font-family: fantasy;
    text-transform:none;
    text-shadow: 4px 4px #000;
  }
  .intro-position span,.intro-address{
    color: blanchedalmond;
    font-size: 18px;
    text-shadow: 2px 2px #000;
  }
  .intro-position span:first-child::before {
    content: "|";
    text-align: center;
    display: inline-block;
    padding: 0 14px 0 8px;
    color: rgba(255, 255, 255, 0.3);
  }
  .intro-position span::after {
    content: "|";
    text-align: center;
    display: inline-block;
    padding: 0 8px 0 14px;
    color: rgba(255, 255, 255, 0.3);
  }
  .intro-address{
    line-height: 80px;
  }
</style>

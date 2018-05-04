<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
      <!-- slides -->
      <swiper-slide><bannerView/></swiper-slide>
      <swiper-slide><skillView/></swiper-slide>
      <swiper-slide><resumeView/></swiper-slide>
      <swiper-slide><portfolioView/></swiper-slide>
      <swiper-slide><contactView/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
const skillView = () => import('./skill')
const contactView = () => import('./contactMe')
const resumeView = () => import('./resume')
const portfolioView = () => import('./portfolio')
const bannerView = () => import('./banner')
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        spaceBetween: 70,
        height: window.innerHeight,
        notNextTick: true,
        autoplay: 3000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    skillView,
    contactView,
    resumeView,
    portfolioView,
    bannerView,
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
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
  .card_block p{
    text-align: center;
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

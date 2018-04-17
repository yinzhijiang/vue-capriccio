<template>
<div class="blog">
  <h2>read our blog</h2>
  <el-row :gutter="10">
    <el-col  v-for="(o, index) in 6" :key="o" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
      <el-card>
        <img :src="require('../../../assets/images/img-' + (++index) + '.jpg')" class="image">
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <h4>
              Inspirational Website
            </h4>
            <span>
              <small>by admin</small>/<small>web design</small>/<small>14</small>
            </span>
            <p>
              Design must be functional and functionality must be translated into visual aesthetics
            </p>
            <a href="">read more <i class="fa fa-long-arrow-right"></i></a>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <touch/>
</div>

</template>

<script>
import touch from '../../common/touch'
export default {
  data () {
    return {
      currentDate: new Date()
      // images: require('../../../assets/images/img-1.jpg')
    }
  },
  components: {
    touch
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
.blog{
  text-align: left;
  color: black;
}
.blog a,.blog a i{
  color: black;
  font-weight: 300;
  text-transform: uppercase;
}
.blog p,.blog .bottom span {
  font-weight: 300;
  margin-bottom: 12px;
  display: block;
}
</style>

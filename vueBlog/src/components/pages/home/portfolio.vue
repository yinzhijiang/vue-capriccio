<template>
  <div class="portfolio">
    <h3>portfolio</h3>
    <h2>Check Out Some of My Works.</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quasi praesentium sequi esse! Accusantium enim, quibusdam iste beatae veniam consequuntur aut labore cum harum pariatur ex aliquam mollitia, error quasi?</p>
    <el-row :gutter="10">
      <el-col  v-for="(o, index) in 4" :key="o" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <el-card>
          <div class="cont-img">
            <img :src="require('../../../assets/images/img-' + (++index) + '.jpg')" class="image">
          </div>
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
  </div>
</template>

<script>
</script>

<style scoped>
.portfolio{
  width: 100%;
  /* height: 100%; */
}
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
  .cont-img {
    width: 100%;
    overflow: hidden;
  }
  .image{
    width:100%;
    transition: all 0.6s;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
.el-row{
  margin-top: 20px;
}
.el-card a,.el-card a i{
  color: black;
  font-weight: 300;
  text-transform: uppercase;
}
.el-card p,.el-card .bottom span {
  font-weight: 300;
  margin-bottom: 12px;
  display: block;
}
.image:hover{
  transform: scale(1.4);
}
.el-card{
  margin-bottom: 10px;
}
</style>

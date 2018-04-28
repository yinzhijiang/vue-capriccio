<template>
  <div class="resume">
    <h3>
      履历
    </h3>
    <h2>一些我的履历证明.</h2>
    <p>从15年实习开始我已经从事该工作快三年了，而当真正把时间榨干，花在前端工作上的时间却没有那么久，还好自己有在项目空闲期好好的学习，也不枉过了这几年。</p>
    <p>当然这几年的工作与学习，让我在技术上和生活上都学到了很多。</p>
    <div class="experience"  v-for="(val, key, index) in resumeData" :key='index'>
      <h3>{{val.resume}}</h3>
      <div class="timeline"  v-for="(value, index1) in val.data" :key='index1'>
        <!-- <input id="content" v-model='value' class="input-class" @click='contentText' type="text"> -->
        <div class="timeline-icon"><i :class="value.icon"></i></div>
        <div class="timeline-header">
          <h3>{{value.company}}</h3>
          <p>{{value.time}}</p>
        </div>
        <div class="timeline-body">
          <h3>{{value.post}}</h3>
          <p>{{value.dec}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      resumeData: [{
        resume: '工作经历',
        data: [{
          icon: 'fa fa-briefcase',
          company: '兴华永恒（北京）',
          time: '2016.8--至今',
          post: '可视化开发工程师',
          dec: '负责前端可视化页面的设计与实现。'
        },
        {
          icon: 'fa fa-briefcase',
          company: 'XXXXcompany2',
          time: '2015.8--2016.8',
          post: '前端开发实习',
          dec: '绘制静态页面，学习一些基本的前端知识技能。'
        },
        {
          icon: 'fa fa-graduation-cap',
          company: '淮南示范学院',
          time: '2012.9--2016.6',
          post: '电子信息工程',
          dec: '收获了几个挚友，在校期间获得过很多荣誉证书。'
        }]
      }]
    }
  },
  methods: {
    // contentText () {
    //   if (this.value.match(/^(?![0-9])[\u4E00-\u9FA5A-Za-z0-9_].{5,23}$/)) {
    //     console.log(this.value)
    //   } else {
    //     console.log('首字符不为数字')
    //   }
    // }
  }
}
</script>

<style scoped>
.resume{
  width: 80%;
  height: 150%;
  margin: 0 auto;
}
.experience{
  width: 100%;
  height: 40%;
}
.experience h4{
  margin-top: 40px;
  color: rgb(34, 136, 150);
}
.timeline{
  height: 60%;
  position: relative;
}
.timeline::before{
  content: '';
  height: 100%;
  display: block;
  width: 1px;
  background: rgba(34, 136, 150, 0.7);
  position: absolute;
  left: 35%;
  top: 0;
}
.experience{
  margin-top: 20px;
}
.experience h3{
  text-shadow: none;
}
.timeline h3{
  color: black;
  font-family: 'Courier New', Courier, monospace;
}
.timeline-body h3::after{
  content: '';
  width: 50px;
  height: 3px;
  background: rgba(34, 136, 150, 0.2);
  display: block;
  margin-top: 20px;
}
.timeline-icon{
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: cadetblue;
  position: absolute;
  left: 35%;
  top: 4px;
  margin-left: -40px;
}
.timeline-icon i{
  line-height: 80px;
  font-size: 30px;
  color:white;
}
.timeline-header{
  width: 38%;
  text-align: right;
  float: left;
  padding-right: 90px;
}
.timeline-body{
  width: 60%;
  padding-left: 60px;
  margin-left: 40%;
  text-align: left;
}

</style>

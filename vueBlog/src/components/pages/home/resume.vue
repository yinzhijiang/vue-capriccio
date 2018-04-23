<template>
  <div class="resume">
    <h3>
      resume
    </h3>
    <h2>More of my Credentials.</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur incidunt ullam possimus reiciendis recusandae cupiditate iste excepturi dolor commodi eligendi id deserunt quod qui delectus molestiae nemo, sed expedita sequi?</p>
    <div class="experience"  v-for="(val, key, index) in resumeData" :key='index'>
      <h3>{{val.resume}}</h3>
      <div class="timeline"  v-for="(value, index1) in val.data" :key='index1'>
        <!-- <input id="content" v-model='value' class="input-class" @click='contentText' type="text"> -->
        <div class="timeline-icon"><i :class="val.icon"></i></div>
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
        resume: 'Work Experience',
        icon: 'fa fa-briefcase',
        data: [{
          company: 'XXXXcompany1',
          time: '2016.8--至今',
          post: 'awsersom engerniar',
          dec: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa est quidem iusto porro cupiditate ea, rem quibusdam laudantium officia aliquam! Aperiam culpa nihil dolorem nemo distinctio asperiores minima. Voluptate.'
        },
        {
          company: 'XXXXcompany2',
          time: '2015.8--2016.8',
          post: 'engerniar',
          dec: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa est quidem iusto porro cupiditate ea, rem quibusdam laudantium officia aliquam! Aperiam culpa nihil dolorem nemo distinctio asperiores minima. Voluptate.'
        }]
      },
      {
        resume: 'education',
        icon: 'fa fa-graduation-cap',
        data: [{
          company: 'XXXschool',
          time: '2016.8--至今',
          post: 'awsersom engerniar',
          dec: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa est quidem iusto porro cupiditate ea, rem quibusdam laudantium officia aliquam! Aperiam culpa nihil dolorem nemo distinctio asperiores minima. Voluptate.'
        },
        {
          company: 'school3',
          time: '2015.8--2016.8',
          post: 'engerniar',
          dec: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa est quidem iusto porro cupiditate ea, rem quibusdam laudantium officia aliquam! Aperiam culpa nihil dolorem nemo distinctio asperiores minima. Voluptate.'
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
  height: 200%;
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
  height: 45%;
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
  width: 35%;
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

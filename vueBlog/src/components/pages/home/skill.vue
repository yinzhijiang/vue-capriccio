<template>
  <div class="skill">
    <div class="info">
      <dl class="introduce">
        <dt>
          <img :src="require('../../../assets/images/img-1.jpg')" alt="">
        </dt>
        <dd>
          <h3>about</h3>
          <h2>Let me introduce myself.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium doloremque corporis, porro ipsum consequatur magni rem optio omnis blanditiis praesentium aliquam corrupti quo architecto debitis officia, quaerat repellendus rerum et!
          </p>
        </dd>
      </dl>
    </div>
    <div class="skill-info">
      <div id="main"></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawSkill()
  },
  methods: {
    drawSkill () {
      let echarts = require('echarts')
      let myChart = echarts.init(document.getElementById('main'))
      var dataStyle = {
        normal: {
          label: {show: false},
          labelLine: {show: false},
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      }
      var placeHolderStyle = {
        normal: {
          color: 'rgba(0,0,0,0)',
          label: {show: false},
          labelLine: {show: false}
        },
        emphasis: {
          color: 'rgba(0,0,0,0)'
        }
      }
      let option = {
        color: ['#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88'],
        tooltip: {
          show: true,
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          itemGap: 12,
          orient: 'vertical',
          left: '8%',
          top: '12%',
          data: ['html', 'css', 'js', 'vue', 'echarts', 'react']
        },
        series: [
          {
            name: 'Html',
            type: 'pie',
            clockWise: false,
            radius: [180, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 390,
                name: 'html'
              },
              {
                value: 50,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: 'css',
            type: 'pie',
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 300,
                name: 'css'
              },
              {
                value: 60,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: 'js',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 160],
            itemStyle: dataStyle,
            data: [
              {
                value: 80,
                name: 'js'
              },
              {
                value: 50,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: 'vue',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,
            data: [
              {
                value: 90,
                name: 'vue'
              },
              {
                value: 30,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: 'echarts',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 120],
            itemStyle: dataStyle,
            data: [
              {
                value: 300,
                name: 'echarts'
              },
              {
                value: 30,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.skill{
  width: 100%;
  height: 100%;
  margin-top: 120px;
}
.info{
  width: 100%;
  height: 35%;
  position: relative;
}
.introduce {
  height: auto;
}
.introduce dt,.introduce dd{
  float: left;
}
.introduce dt {
  width: 30%
}
.introduce dd {
  width: 70%
}
.introduce dd p{
  line-height: 30px;
}
.introduce dt img {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(34, 136, 150);
  border-radius: 50px;
}
.skill-info{
  height: 65%;
}
#main{
  width: 100%;
  height: 400px;
}
</style>

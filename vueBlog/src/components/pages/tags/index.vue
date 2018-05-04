<template>
  <div class = 'tagBg'>
    <div class='tag'>
      <canvas id="tag"></canvas>
      <div class='content'>
        <!-- <h2>tags</h2> -->
        <h3>mock数据及canvas背景实现</h3>
        <div class="tagList">
          <ul class="listData">
            <li v-for="(val) in this.listData" :key="val.id"><a><el-button type="danger">{{val.name}}</el-button></a></li>
            <li><a><el-button @click="addtag" type="danger">+</el-button></a></li>
          </ul>
          <el-form v-show="showForm" :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
            <el-form-item
              label="TagName"
              prop="text"
            >
              <el-input type="text" v-model.number="numberValidateForm.text" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button type="danger" @click="resetForm('numberValidateForm')">重置</el-button>
              <el-button @click="closeForm">关闭</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="select">
          <input id="_input" type="text" name="" @click="inputShow">
          <div v-show="showTag" class="tags" id="listTag">
            <ul id="listCrap">
              <li  v-for="item in items" :key="item" ><input type="checkbox" name="cloose" @click="cellShow" ><span class="list-cell">{{item}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['12', 'we', '45', 'dfgdfg', 'fgh', 'axzxc', 'vnvcv'],
      showTag: false,
      showForm: false,
      listData: [],
      numberValidateForm: {
        text: ''
      }
    }
  },
  methods: {
    getPoint () {
      let _this = this
      window.axios.get('/api/profile')
        .then(response => {
          _this.listData = response.data
          console.log(_this.listData)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    inputShow () {
      this.showTag = !this.showTag
    },
    cellShow (e) {
      let text = e.target.nextSibling.innerText
      if (e.target.checked) {
        document.getElementById('_input').value += text + ','
      } else {
        var index = document.getElementById('_input').value.indexOf(text)
        var length = text.length
        document.getElementById('_input').value = document.getElementById('_input').value.slice(0, index) + document.getElementById('_input').value.slice(length + index + 1)
      }
    },
    addtag () {
      this.showForm = !this.showForm
    },
    closeForm () {
      this.showForm = false
    },
    submitForm (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid && _this.numberValidateForm.text !== '') {
          window.axios.post('/api/profile', {
            'name': _this.numberValidateForm.text
          }).then(
            _this.getPoint(),
            m => {
              _this.listData = m.data
            }
          )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.getPoint()
    drawCanvas()
  }
}
function drawCanvas () {
  function Start (id, x, y) {
    this.id = id
    this.x = x
    this.y = y
    this.r = Math.floor(Math.random() * 3) + 1
    var a = (Math.floor(Math.random() * 10) + 1) / 10 / 2
    this.color = 'rgba(255, 255, 255, ' + a + ')'
  }
  Start.prototype.draw = function () {
    ctx.fillStyle = this.color
    ctx.shadowBlur = this.r * 2
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.fill()
  }
  Start.prototype.move = function () {
    this.y -= 0.15
    if (this.y <= -10) {
      this.y = height + 10
    }
    this.draw()
  }
  var mycanvas = document.getElementById('tag')
  var ctx = mycanvas.getContext('2d')
  var width = document.documentElement.clientWidth
  var height = document.documentElement.clientHeight
  var startLength = 80
  var starts = []
  mycanvas.setAttribute('width', width)
  mycanvas.setAttribute('height', height)
  init()
  function init () {
    ctx.strokeStyle = 'white'
    ctx.shadowColor = 'white'
    for (let i = 0; i < startLength; i++) {
      starts[i] = new Start(i, Math.floor(Math.random() * width), Math.floor(Math.random() * height))
    }
    ctx.shadowBlur = 0
    animate()
  }
  function animate () {
    ctx.clearRect(0, 0, width, height)
    for (var i = 0; i < starts.length; i++) {
      starts[i].move()
    }
    requestAnimationFrame(animate)
  }
}

</script>

<style>
#_input{
  outline: none;
  width: 50%;
  height: 30px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  padding-left: 18px;
}
.tagBg{
  width: 100%;
  height: 100%;
  background: black;
  background: linear-gradient(to bottom,#000000 0%,#5788fe 100%);
}
#tag{
  /* position: absolute; */
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.tag{
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/images/bg.png');
  background-repeat: repeat-x;
  background-position: bottom
}
.tags{
  width: 50%;
  height: 300px;
  margin: 20px auto 0;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  border-radius: 5px;
}
.list-cell{
  background: rgba(0,0,0,0.2);
  text-shadow: 1px 1px #f0f0f0;
  box-shadow: 2px 2px 2px #909090;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 35px;
  color: #333;
  /* z-index: 4;position: absolute;
  top: 0;left: 0; */
}
.content {
  position: absolute;
  top: 5%;
  width: 100%;
  height: 95%;
}
.select{
  width: 100%;
  height: 20%;
}
#listCrap li{
  width: 40%;height: 35px;
  float: left;
  margin: 3%;
  position: relative;
}
#listCrap li input{
  position: absolute;
  top: 0;left: 0;
  width: 100%;height: 100%;
  margin: 0;z-index: 0;opacity: 0;
}
#listCrap li input:checked + span{
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.listData li{
  float: left;
  margin: 6px;
  padding: 8px;
  line-height: 20px;
}
.tagList{
  width: 100%;
  height: 10%;
}
.demo-ruleForm{
  width: 80%;
  position: absolute;
  background: rgba(0,0,0,0.4);
  padding: 4% 4% 2%;
  /* bottom: 0; */
  left: 50%;
  margin-left: -44%;
}
.el-form-item__label{
  color:white;
}
</style>

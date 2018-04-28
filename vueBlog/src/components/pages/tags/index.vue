<template>
  <div class='tag'>
    <h2>tags</h2>
    <h3>mock数据</h3>
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
  }
}
</script>

<style>
.select{
  /* position: relative; */
}
#_input{
  outline: none;
  width: 80%;
  height: 30px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  padding-left: 18px;
}
.tags{
  width: 80%;
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
  /* background: rgba(34, 136, 150, 0.8); */
  /* border-radius: 5px; */
  line-height: 20px;
  /* color: white; */
  /* text-shadow: 1px 1px 2px #909090; */
}
.tagList{
  position: relative;
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

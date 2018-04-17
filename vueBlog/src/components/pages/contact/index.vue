<template>
  <div class="main_contain">
    <h2>Get In Touch</h2>
    <el-form :label-position="labelPosition" label-width="40px" :model="formLabel" >
      <el-form-item label="">
        <el-input v-model="formLabel.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label=""
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]"
      >
        <el-input v-model="formLabel.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item
        label=""
        prop="age"
        :rules="[
          { required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字值'}
        ]"
      >
        <el-input type="age" v-model.number="formLabel.type" auto-complete="off" placeholder="Phone"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="textarea" v-model="formLabel.desc" placeholder="Message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="contact_button">send message</el-button>
        <!-- <el-button type="primary" @click="submitForm('formLabel')">提交</el-button>
        <el-button @click="resetForm('formLabel')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formLabel: {
        name: '',
        region: '',
        type: '',
        email: '',
        dec: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.main_contain{
  width: 50%;
}
.main_contain h2{
  text-align: left;
  margin-left: 40px;
}
.contact_button{
    text-shadow: 1px 1px #000;
}
.contact_button:hover{
    background: rgba(34, 136, 150, 0.9);
    border: 2px solid rgba(34, 136, 150, 0.9);
}
</style>

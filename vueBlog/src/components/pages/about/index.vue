<template>
  <div class="about">
    <h2>about</h2>
    <el-row :gutter="10">
        <el-col v-for="(o, index) in size" :key="o" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card>
            <div style="padding: 14px;">
            <div class="bottom clearfix">
                <div class="small_img">
                    {{index}}
                    <!-- <img :src="require('../../../assets/images/img-' + (++index) + '.jpg')" class="image"> -->
                </div>
                <h4>Inspirational Website</h4>
                <div class="button_list">
                    <el-button type="primary" round plain >主要按钮</el-button>
                    <el-button type="success" round plain >成功按钮</el-button>
                    <el-button type="warning" round plain >警告按钮</el-button>
                    <el-button type="danger" round plain >危险按钮</el-button>
                </div>
                <i class="fa fa-calendar"></i>Nov 10, 2016 jyz
            </div>
            </div>
        </el-card>
        </el-col>
    </el-row>
    <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="6"
            :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 24,
      size: 4,
      val: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`aaa${val}`)
    },
    handleCurrentChange (val) {
      console.log(`vvv${val}`)
      this.size = this.size * val
      console.log(this.size * val)
    }
  }
}
</script>

<style scoped>
.small_img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    overflow: hidden;
    float: left;
}
.small_img img{
    width: 100%;
    height: 100%;
}
.about button {
    height: auto;
}
.el-button.is-round {
    border-radius: 20px;
    padding: 2px;
}
.about h2,.about h4{
    text-align: left;
}
</style>


<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        active-text-color="#228896">
        <router-link v-for="(list, index) in menuList" :key="index" :to="list" tag="a">
         <el-menu-item  :index="list">
          <span slot="title" class="menu_list">{{list}}</span>
        </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      menuList: ['home', 'blog', 'tags', 'portfolio', 'about', 'contact']
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.menu_list{
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
}
.el-menu-vertical-demo a {
  text-decoration: none;
}
</style>

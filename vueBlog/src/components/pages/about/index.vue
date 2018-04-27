<template>
  <div class="about">
    <h2>about</h2>
    <h3>个人简介</h3>
     <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque maiores, deleniti corrupti, molestiae fugit architecto et minima ea, cupiditate dignissimos. Nihil odit id nisi in quibusdam saepe cum aut!</p> -->
    <dl class="introduce">
      <dt>
        <img :src= 'require("../../../assets/header.png")' alt="">
      </dt>
      <dd>
        <p>
          唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。(惟闻 通：唯)问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。
          <br/>共勉之 <span class="signature"></span><span class="name">蒋银芝</span>
        </p>
      </dd>
    </dl>
    <div class="clear"></div>
    <h3>技术方向</h3>
    <div class="technical">
      <h4>前端开发工程师</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti nobis temporibus necessitatibus ullam, aliquid optio accusantium at, dicta, sint delectus et alias porro amet exercitationem magni quam placeat soluta!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.about{
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
h2{
  text-transform: uppercase;
}
h3{
  text-align: left;
  width: 100%;
}
h3::after{
  content: '';
  width: 100%;
  height: 12px;
  position: absolute;
  border-bottom: 2px dotted rgba(0,0,0,0.2);
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.signature{
  position: relative;
  display: inline-block;
  height: 80px;
}
.name{
  display: inline-block;
}
.signature::before{
  content: '';
  width: 0;
  height: 108px;
  position: absolute;
  top: 0;
  border-left: 2px solid rgba(0,0,0,0.8);
}
.introduce dt img{
  width: 80%;
  border-radius: 50%;
}
.introduce dd{
  width: 60%;
}
.introduce dt,.introduce dd{
  width: 50%;
  float: left;
}
.introduce dd p{
  line-height: 50px;
  writing-mode: vertical-lr;
  height: 45%;
  width:100%;
  font-size: 20px;
  letter-spacing: 8px;
  text-align: left ;
  text-indent: 2em;
}
.technical p{
  font-size: 18px;
  line-height: 20px;
  text-indent: 2em;
  text-align: left;
}

</style>

<template>
  <div class='messageBoard'>
    <h3>留言板--写你所想</h3>
    <textarea name="" placeholder="来说几句吧……" id="" cols="100" rows="6" class="message" v-model='text'></textarea>
    <div class="sendMessage clear"><el-button type="primary" @click="submitReply">评论</el-button></div>
    <div>
      <ul>
        <li class="messageList clear" v-for="(value) in messagelist" :key="value.id">
          <dl class="headerImg">
            <dt><img :src="require('../../../assets/header.png')" alt=""></dt>
            <dd>
              <div class="messageTitle"><span>{{value.name}}</span><span>{{value.time}}</span></div>
              <p>{{value.content}}</p>
              <p class="replyList">
                <span class="thumb" @click="increment">
                  <i class="fa fa-thumbs-o-up"></i>
                  <span>赞</span>
                  <span v-show='value.thumb > 0 ? true : false' class="num">+{{ getCount }}</span>
                </span>
                <span @click="showClick" class="reply">回复</span>
              </p>
              <ul class="replyMess">
                <li v-show="value.reply ? true : false" v-for="replyValue in value.reply" :key="replyValue.id">
                  <p>{{replyValue.content}}</p>
                  <div class="messageTitle"><span>{{replyValue.name}}</span><span>{{replyValue.time}}</span></div>
                </li>
                <span v-show="!replyShow" class="reply" @click="showClick">添加回复</span>
                <div v-show="replyShow" class="replyShow">
                  <textarea name="" placeholder="来说几句吧……" id="" cols="1" rows="1" class="replyText"></textarea>
                  <el-button>添加回复</el-button>
                </div>
              </ul>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      replyShow: false,
      text: '',
      dateTime: '',
      id: 2,
      messagelist: [{
        'id': '1',
        'thumb': '3',
        'name': '点点暖阳',
        'time': '2018-05-04',
        'content': '点点暖阳到此一游，哈哈哈',
        'reply': [{
          'id': '1',
          'name': '大侠',
          'time': '2018-5-5',
          'content': '哈哈哈'
        }]
      },
      {
        'id': '2',
        'thumb': '0',
        'name': 'Jhone',
        'time': '2018-05-05',
        'content': 'jhone，哈哈哈'
      }]
    }
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  methods: {
    showClick () {
      this.replyShow = !this.replyShow
    },
    getTime () {
      let time = new Date()
      let date = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      this.dateTime = date + '-' + month + '-' + day
    },
    submitReply () {
      this.id += 1
      let obj = {
        id: this.id,
        name: '匿名',
        time: this.dateTime,
        content: this.text
      }
      this.messagelist.push(obj)
      this.text = ''
    },
    // thumbClick () {
    //   var thumb = document.getElementsByClassName('thumb')
    //   this.$emit('increment', count)
    //   console.log(this, thumb)
    // },
    ...mapActions(['increment'])
  },
  mounted () {
    this.getTime()
    // this.thumbClick()
  }
}
</script>

<style scoped>
.messageBoard{
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.message {
  /* outline: none; */
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
}
.sendMessage button {
  float: right;
  margin-top: 10px;
}
.headerImg dt{
  width: 15%;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.headerImg dt img{
  width: 100%;
}
.headerImg dd{
  width: 80%;
  float: left;
  padding: 10px;
}
.messageTitle span:first-child {
  color: #228896;
  font-size: 18px;
  font-weight: bold;
  position: relative;
}
.messageTitle span:first-child::after{
  content: '.';
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;

}
.messageTitle span:nth-child(2){
  position: relative;
  left: 20px;
}
.messageTitle span:nth-child(2)::before{
  content: '';
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
}
.headerImg dd p{
  text-indent: 0;
  margin-top: 10px;
}
.messageList {
  padding:10px;
  border-bottom: 1px dashed gray;
}
.messageTitle{
  width: fit-content;
}
.replyList{
  color:#999
}
.thumb:hover,.reply:hover,.num{
  color:#228896;
  cursor: pointer;
}
.reply{
  margin-left: 20px;
}
.replyMess{
  background: rgba(0,0,0,0.2);
  padding-left: 20px;
  padding-bottom: 5px;
  position: relative;
}
.replyMess li{
  padding-bottom: 5px;
  border-bottom: 1px dashed rgba(0,0,0,0.2);
}
.replyMess .reply{
  text-align: left;
  width: 100%;
  display: inline-block;
  margin-left: 0;
  padding: 10px 10px 10px 0;
}
.replyShow{
  position: relative;
  left: -10px;
  margin-top: 10px;
}
.replyShow button {
  padding: 7px 5px;
  vertical-align: bottom;
}
.replyText{
  width: 80%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  padding-left: 4px;
  border-radius: 5px;
}
</style>

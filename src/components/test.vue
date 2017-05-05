<template lang="html">
  <div class="test">
    <div class="test-video">
      <!--<video class="test-video-in" width="100%" src="../../static/video/mp4_video.mp4" autoplay="autoplay" loop="loop"></video>-->
      <video class="test-video-in" width="100%" src="http://ohc2100m6.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD.mp4" autoplay="autoplay" loop="loop"></video>
    </div>
    <div class="test-content">
      <div class="test-content-text">
        <h1>输入内容</h1>
        <textarea class="test-content-text-textarea" name="" rows="" cols="" maxlength="50" v-model="zishu"></textarea>
        <p>还能输入{{jsZishu}}字</p>
      </div>
      <router-link :to="{path:'/index',query:{'length':this.zishu.length}}" tag="div">
        <h2>点击返回首页</h2>
      </router-link>
      <!--index.js里注册了全局my-component-->
      <my-component></my-component>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        zishu: "",
        a: 1,
        b: 2,
        c: 3,
        lists:[],
        load() {
          console.log("执行了load方法")
        }
      }
    },
    methods: {},
    computed: {
      jsZishu() {
        return 50 - this.zishu.length;
      }
    },
    mounted() {

      let maxa = Math.max(this.a, Math.max(this.b,this.c));
      console.log(maxa)
      this.lists.push({
        zuida:maxa,
        bb:"bb"
      })
      console.log(this.lists)
      this.lists.forEach(value=>{
          console.log(value.zuida)
      })
      this.load();
    }
  }
</script>

<style scoped>
  /*scoped 仅限当前'页面'使用的样式*/
  @import "../../static/css/test.css";

  .test-video {
    width: 100%;
    position: relative;
    top: 0;
  }
  .test-video-in {
    /*强行充满全屏,部分会被裁切掉*/
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    /*加滤镜*/
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%);*/
  }
  .test-content {
    width: 100%;
    position: absolute;
    top: 20%;
    color: #fff;
    text-align: center;
  }

  .test-content-text {
    width: 100%;
  }

  .test-content-text-textarea {
    width: 50%;
    height: 100px;
    font-size: 20px;
  }

</style>

<template>
  <div class="index">
    <div class="index-content-1">
      <router-link :to="{path:'/test'}" tag="div">
        <h1 id="h1">点击进入输入页面</h1>
        <p v-if="zishu != ''">你在test页面输入了<span id="z">{{zishu}}</span>个字</p>
        <p v-if="zishu == ''">你在test页面没有输入内容</p>
      </router-link>
    </div>
    <div class="index-content-2">
      <h2 @click="goVuex">通往VUEX demo的小门</h2>
    </div>
    <!--<Public></Public>-->
    <!--index.js里注册了全局my-component-->
    <my-component></my-component>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        zishu: "",
        aaa:[100,20,33,1],
        bbb:[44],
        load() {
          this.zishu = this.$route.query.length;
          console.log("执行了load方法获取到test页面传过来的参数");
//					fetch('要请求的URL',{
//						method:'post',
//						body:{}
//					})
//					.then(res => res.json())
//					.then(res=> {
////						make your logic
//					})
        }

      }
    },
    methods: {
      goVuex () {
        this.$router.push({
          path: "./vuex"
        })
      }
    },
    mounted() {

//      $.get('data.txt').success(function(content){
//        alert(1)
//      });
      $.get('data.txt',function(data){
          alert(1)
      })

      var aa = function(a,b) {
        return a-b;
      }
      var vv = "444,555,666";
      var sb = vv.split(',');
      sb.toString()
      console.log(sb)
      var tt = this.aaa.concat(sb);
      console.log(tt)
      console.log(this.aaa.sort(aa));
      this.load();

    }
  }
</script>

<style scoped>
  /*scoped 仅限当前'页面'使用的样式*/
  .index {
    width: 100%;
    background-color: #00CC00;
  }
  .index-content-1 {
    padding: 50px 0;
    background-color: #00A1CB;
  }
  .index-content-2 {
    padding: 50px 0;
    background-color: #00AA88;
  }
  .index-content-3 {

  }
</style>

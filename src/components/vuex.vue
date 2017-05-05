<template>
  <div class="vuex">
    <div class="vuex-1">
      <router-link to="./index" tag="div">
        <h1>返回首页</h1>
      </router-link>
    </div>
    <div class="vuex-2">
      <Display></Display>
      <Increment></Increment>
      <reduce></reduce>
    </div>


  </div>
</template>

<script>

  import Display from './display.vue'
  import Increment from './increment.vue'
  import reduce from './reduce.vue'
  import store from '../../vuex/store' // import 我们刚刚创建的 store

  export default {
    components: {
      Display: Display,
      Increment: Increment,
      reduce: reduce
    },
    store: store // 在根组件加入 store，让它的子组件和 store 连接
  }


</script>

<style scoped>
  .vuex {
    width: 100%;
    background-color: #00CC00;
  }

  .vuex-1 {
    padding: 50px;
    background-color: #2f6f9f;
  }
  .vuex-2 {
    padding: 50px;
    background-color: #00AA88;
  }
</style>

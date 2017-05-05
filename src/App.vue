<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*引入全局需要的样式*/
	@import '../static/css/reset.css';
	#app {
		width: 100%;
		/*height: 100%;*/
		text-align: center;
		/*background-color: darkseagreen;*/
	}
</style>

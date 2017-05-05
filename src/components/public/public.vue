<style scoped>
    /*@import '../../static/css/details.css';*/
</style>
<template>
    <div class="public">
      <p>引入自定义公共组件</p>
    </div>
</template>

<script>
    //  import UTILS from '../../static/js/utils.js';
    export default {
        data() {
            return {
                load() {
                    console.log("加载了自定义组件")
                }
            }
        },
        methods: {},
        computed: {},
        mounted() {
            this.load();
        }
    }
</script>

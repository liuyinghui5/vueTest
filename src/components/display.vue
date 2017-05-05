<template>
  <div class="display">
    <span class="display-span">分数是 {{ getCount }} !</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getCount'
      ])
    }
  }
</script>

<style scoped>
  .display-span {
    font-size: 25px;
    color: #fff;
  }
</style>

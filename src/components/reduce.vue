
<template>
  <div class="reduce">
    <div class="reduce-btn"  @click='jianshao'>
      <span>减少 1 分</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'jianshao'
      ])
    }
  }
</script>
<style scoped>
  .reduce-btn {
    padding: 20px;
    background-color: #00a2d4;
  }
</style>

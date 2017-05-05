<template>
  <div class="increment">
    <div class="increment-btn"  @click='increment'>
      <span>增加 1 分</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'increment'
      ])
    }
  }
</script>

<style scoped>
  .increment {

  }
  .increment-btn {
    padding: 20px;
    background-color: #ff6666;
  }
</style>

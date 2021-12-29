<template>
  <div class="main-container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'LayoutDefault',

  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
}
</style>

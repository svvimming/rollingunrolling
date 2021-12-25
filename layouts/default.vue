<template>
  <div>
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

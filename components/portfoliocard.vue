<template>
  <div class="portfolio-card">
    <div :class="gridClasses">
      <div
        class="col-5"
        :data-push-left="getOffset(reversed)"
        :data-push-right="getOffset(!reversed)">
        <div class="title">
          {{ work.title }}
        </div>
        <div class="subtitle">
          {{ work.subtitle }}
        </div>
        <div class="date">
          {{ work.date }}
        </div>
        <div class="description">
          {{ work.description }}
        </div>
      </div>
      <div
        class="col-5 image-container"
        :data-push-left="getOffset(!reversed)"
        :data-push-right="getOffset(reversed)">
        <img :src="work.image" class="image">
      </div>
    </div>
  </div>
</template>

<script>
// ====================================================================== Export
export default {
  name: 'PortfolioCard',

  props: {
    work: {
      type: Object,
      required: true,
      default: {}
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    gridClasses () {
      return this.reversed ? 'grid-reverse-middle' : 'grid-middle'
    }
  },

  methods: {
    getOffset (val) {
      if (val) {
        return 'off-1'
      }
      return 'off-0'
    }
  }
}
</script>

<style lang="scss" scoped>
// ///////////////////////////////////////////////////////////////////// General
.image {
  width: 100%;
}
.portfolio-card {
  padding: 10rem 0;
  font-family: 'Spectral';
}
.title {
  font-size: 28px;
  letter-spacing: 0em;
  font-weight: 600;
  font-style: italic;
}

.subtitle {
  font-size: 14px;
}

.description {

}

.image-container {
  position: relative;
}

.flower {
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 200%;
  background-image: url('/images/flower.png');
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>

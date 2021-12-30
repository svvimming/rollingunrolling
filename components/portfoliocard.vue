<template>
  <div class="portfolio-card">
    <div class="grid">
      <div class="col-12 title">
        {{ work.title }}
      </div>
      <div class="col-7 subtitle" data-push-left="off-1">
        {{ work.subtitle }}
      </div>
      <div class="col-4 date" data-push-left="off-2">
        {{ work.date }}
      </div>
      <div class="col-12 description" v-html="work.description"></div>
      <div
        v-for="path in work.images"
        :class="work.hasOwnProperty('orientation') ? work.orientation : 'col-12'">
        <div class="image-container">
          <img :src="path" class="image">
        </div>
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

.title,
.subtitle {
  margin-bottom: 0.5rem;
}

.date,
.description {
  margin-bottom: 1.5rem;
  a {
    color: #FF7F50;
  }
}

.title {
  font-size: 28px;
  letter-spacing: 0em;
  font-weight: 600;
  font-style: italic;
}

.date,
.subtitle {
  font-size: 14px;
}

.description {
  margin-bottom: 1.5rem;
}

.image-container {
  position: relative;
  width: 100%;
}
</style>

<template>
  <div class="page-index">

    <Scribble class="lines"/>

    <div class="grid">
      <div class="col-10" data-push-left="off-2">
        <div class="portfolio">
          <PortfolioCard
            v-for="(work, index) in portfolio"
            :key="work.title"
            :work="work"
            :reversed="index % 2 === 1" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// ====================================================================== Import
import { mapGetters } from 'vuex'

import Scribble from '@/assets/svgs/scribble'
import PortfolioCard from '@/components/portfoliocard'
// ====================================================================== Export
export default {
  name: 'IndexPage',

  components: {
    PortfolioCard,
    Scribble
  },

  async fetch ({ store, $content }) {
    await store.dispatch('global/getBaseData', 'general')
    await store.dispatch('global/getBaseData', 'portfolio')
  },

  computed: {
    ...mapGetters({
      siteContent: 'global/siteContent'
    }),
    portfolio () {
      return this.siteContent.portfolio.works
    }
  }
}
</script>

<style lang="scss" scoped>
// ///////////////////////////////////////////////////////////////////// General
.page-index {
  position: relative;
}

::v-deep .lines {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  path {
    fill: $comet;
  }
}
</style>

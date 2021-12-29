<template>
  <div class="page-works">

    <Scribble id="works_scribble-1"/>

    <div class="grid">
      <div class="col-9" data-push-left="off-2">
        <div class="portfolio">
          <PortfolioCard
            v-for="(work, index) in portfolio"
            :key="work.title"
            :work="work" />
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
  name: 'WorksPage',

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
.page-works {
  position: relative;
}

::v-deep #works_scribble-1 {
  position: absolute;
  top: -12rem;
  left: 0rem;
  z-index: -1;
  opacity: 0.33;
  transform: scaleX(1.02);
  path {
    fill: $comet;
  }
}
</style>

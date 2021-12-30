<template>
  <div class="page-works">

    <Scribble id="works_scribble-1"/>

    <div class="grid">
      <div class="col-9_md-8_mi-10_ti-12" data-push-left="off-2_md-4_mi-1_ti-0">
        <div class="portfolio">
          <PortfolioCard
            v-for="(work, index) in portfolio"
            :key="work.title"
            :work="work" />
        </div>
      </div>
    </div>

    <Over id="works_scribble-2"/>

  </div>
</template>

<script>
// ====================================================================== Import
import { mapGetters } from 'vuex'

import Scribble from '@/assets/svgs/scribble'
import Over from '@/assets/svgs/long'
import PortfolioCard from '@/components/portfoliocard'
// ====================================================================== Export
export default {
  name: 'WorksPage',

  components: {
    PortfolioCard,
    Scribble,
    Over
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
  @include mini {
    padding-top: 27rem;
  }
}

::v-deep #works_scribble-1,
::v-deep #works_scribble-2 {
  position: absolute;
  z-index: -1;
  opacity: 0.33;
  path {
    fill: $comet;
  }
}

::v-deep #works_scribble-1 {
  top: -12rem;
  left: 0rem;
  transform: scaleX(1.02);
}

::v-deep #works_scribble-2 {
  bottom: 0rem;
  right: 0rem;
  transform: scaleX(-1.25);
}
</style>

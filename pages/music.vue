<template>
  <div class="page-music">

    <div class="grid">
      <div class="col-9_md-8_mi-10_ti-12" data-push-left="off-2_md-4_mi-1_ti-0">
        <div class="portfolio">
          <PortfolioCard
            v-for="(work, index) in music"
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

import PortfolioCard from '@/components/portfoliocard'
// ====================================================================== Export
export default {
  name: 'MusicPage',

  components: {
    PortfolioCard
  },

  async fetch ({ store, $content }) {
    await store.dispatch('global/getBaseData', 'general')
    await store.dispatch('global/getBaseData', 'music')
  },

  computed: {
    ...mapGetters({
      siteContent: 'global/siteContent'
    }),
    music () {
      return this.siteContent.music.works
    }
  }
}
</script>

<style lang="scss" scoped>
// ///////////////////////////////////////////////////////////////////// General
.page-music {
  position: relative;
  @include mini {
    padding-top: 27rem;
  }
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

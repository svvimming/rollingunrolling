<template>
  <div class="page-music">

    <Shakey id="section-music-shakey"/>

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

    <Gloopy id="section-music-gloopy"/>

  </div>
</template>

<script>
// ====================================================================== Import
import { mapGetters } from 'vuex'

import PortfolioCard from '@/components/portfoliocard'
import Gloopy from '@/assets/svgs/gloopy'
import Shakey from '@/assets/svgs/shakey-corners'
// ====================================================================== Export
export default {
  name: 'MusicPage',

  components: {
    PortfolioCard,
    Gloopy,
    Shakey
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

::v-deep #section-music-gloopy,
::v-deep #section-music-shakey {
  position: absolute;
  z-index: -1;
  opacity: 0.33;
  path {
    fill: $coral;
  }
}

::v-deep #section-music-gloopy {
  bottom: 2.5rem;
  right: 0;
  transform: scale(1.1);
}

::v-deep #section-music-shakey {
  // top: -2.5rem;
  // width: 20rem;
  left: calc(100% - 21rem);
  transform: rotate(45deg);
  top: -26rem;
  width: 100vw;
}
</style>

<template>
  <div class="grid">
    <div class="col-10" data-push-left="off-2">
      <div class="portfolio">
        <PortfolioCard
          v-for="(work, index) in portfolio"
          :key="work.title"
          :work="work"
          :reversed="index % 2 === 1" />
      </div>
      <div class="lines">
        <svg xmlns="http://www.w3.org/2000/svg" width="526.632" height="962.376" viewBox="0 0 526.632 962.376">
          <path id="Path_3" data-name="Path 3" d="M626.573,1007.271c29.065-40.619,36.14-30.9,44.862-33.7s21.394-27.465,21.394-27.465v-30.3s-26.546-25.6-21.394-41.169-4.764,20.674,40.411-34.009,22.72-67.724,22.616-78.738,0-33.857,0-33.857,44.767,58.964,20.8-38.848-26.414-112.908-20.8-117.482,15.6-9.553,20.8-12.738,20.5-35.429,20.5-35.429V504.706c0-4.709-52.7,210.37,12-35.666s45.023-235.656,132.067-310.767S1057.759,90.9,1057.759,90.9s-43.2,47.429,9.849-29.472,84.686,153,84.686,153L1127.8,424.4" transform="translate(-626.166 -45.186)" fill="none" stroke="#707070" stroke-width="1"/>
        </svg>
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
  name: 'IndexPage',

  components: {
    PortfolioCard
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
.lines {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>

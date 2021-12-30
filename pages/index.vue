<template>
  <div class="page-index">

    <div class="grid">
      <div class="col-7_mi-6_ti-12" data-push-left="off-3_md-4_sm-5_mi-6_ti-0">
        <div class="image-container">
          <img :src="imagePath" class="image" />
        </div>
        <div class="contact-section">
          <div
            v-for="item in contact"
            class="contact">
            <component
              :is="item.action"
              :to="item.url"
              :href="item.url"
              target="_blank">
              {{ item.text }}
            </component>
          </div>
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
    imagePath () {
      return this.siteContent.general.home.image
    },
    contact () {
      return this.siteContent.general.home.contact
    }
  }
}
</script>

<style lang="scss" scoped>
// ///////////////////////////////////////////////////////////////////// General
.page-index {
  position: relative;
  @include mini {
    padding-bottom: 18rem;
  }
  @include tiny {
    padding-top: 30rem;
    padding-bottom: 7rem;
  }
}

.image {
  width: 100%;
  @include mini {
    transform-origin: center;
    transform: rotate(90deg);
  }
}

.image-container {
  padding-top: 10rem;
  position: relative;
  width: 100%;
}

.contact-section {
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mini {
    padding-top: 4rem;
  }
}

.contact {
  width: fit-content;
  a {
    padding: 0.75rem 1rem;
    font-family: 'Prompt';
    display: block;
    width: fit-content;
    letter-spacing: -0.05em;
    font-weight: 600;
    font-size: 14px;
    color: $comet;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 12.5%;
      width: 75%;
      height: 1px;
      opacity: 0;
      transition: 250ms ease;
      background: linear-gradient(90deg, rgba($comet , 0) 0%, $comet 33%, $comet 66%, rgba($comet, 0) 100%);
    }
    &:hover {
      &:after {
        opacity: 0.5;
      }
    }
  }
}

</style>

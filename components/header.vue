<template>
  <div id="site-nav">

    <Rolling />

    <div v-if="false" class="nav-backing">
      <span
        v-for="(char, i) in backgroundCharacters"
        :key="char + i"
        class="background-character"
        :style="getCharacterStyle()">
        {{ char }}
      </span>
    </div>

    <div class="nav-container">

      <nav class="navigation">
        <div
          v-for="item in navigation"
          :key="item.text"
          class="nav-item">
          {{ item.text }}
          <template v-if="item.hasOwnProperty('links')">
            <div
              v-for="link in item.links"
              :key="link.text"
              class="sub-item">
              {{link.text}}
            </div>
          </template>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
// ===================================================================== Imports
import { mapGetters } from 'vuex'
import Rolling from '@/components/rolling'

// ====================================================================== Export
export default {
  name: 'Header',

  components: {
    Rolling
  },

  data () {
    return {
      backgroundText: 'the double of a double, an action of inverses, returning to a next iteration by way of its opposite'
    }
  },

  computed: {
    ...mapGetters({
      siteContent: 'global/siteContent'
    }),
    navigation () {
      return this.siteContent.general.navigation
    },
    backgroundCharacters () {
      return this.backgroundText.split('')
    }
  },

  methods: {
    getCharacterStyle () {
      const style = {
        fontSize: (Math.random() * 40) + 52 + 'px',
        transform: `translate(-20px, ${(Math.random() * 40) - 20}px) rotate(${(Math.random() * 10) - 5}deg)`
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
#site-nav {
  position: fixed;
  width: 20rem;
  height: 100vh;
}

.nav-container {
  position: relative;
  margin-top: 7rem;
  width: 12rem;
}

.navigation {
  padding: 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
  transform: skew(-1deg, 2deg) translateX(4px);
  &:after {
    content: '';
    position: absolute;
    left: -3rem;
    top: -1rem;
    width: 17rem;
    height: 17rem;
    background-color: #cbe8ff;
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.05);
  }
}

.nav-backing {
  position: absolute;
  word-break: break-all;
  top: 20rem;
  left: 0;
  font-family: 'Prompt';
  font-weight: 700;
  letter-spacing: -0.35em;
  color: white;
  font-size: 72px;
  line-height: 0.4;
  // opacity: 0.2;
  z-index: -1;
}

.background-character {
  display: inline-block;
  // filter: drop-shadow(0 0 0.75rem black);
}

.nav-item,
.sub-item {
  padding: 0.75rem 1rem;
  font-family: 'Prompt';
  display: block;
  width: fit-content;
  // font-style: italic;
  letter-spacing: -0.05em;
  font-weight: 600;
  font-size: 14px;
  color: $taupe;


}

.nav-item {

}

.sub-item {
  padding-right: 0;
  padding-left: 0.75rem;
  font-weight: 500;
}
  // background-color: $softPeach;
  // transform: skew(-5deg, 5deg);
  // letter-spacing: -0.07em;
  // &:after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 1px;
  //   opacity: 0.33;
  //   background: linear-gradient(90deg, rgba($taupe , 0) 0%, $taupe 33%, $taupe 66%, rgba($taupe, 0) 100%);
  // }
  //
  // &:last-child {
  //   &:after {
  //     content: unset;
  //   }
  // }

</style>

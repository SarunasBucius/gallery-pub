<template>
  <div v-if="galleries">
    <desktop-nav
      class="desktop-display"
      :isHome="isHome"
      @toggleGalleries="toggleGalleries"
    ></desktop-nav>
    <extend-galleries
      :class="isHome ? '' : 'not-home-display'"
      v-show="showGalleries"
      :galleries="activeGalleries"
    ></extend-galleries>
    <mobile-nav
      class="mobile-display"
      :isHome="isHome"
      :galleries="activeGalleries"
      @toggleGalleries="toggleGalleries"
    ></mobile-nav>
  </div>
</template>

<script>
import firebase from '../firebase'
import ExtendGalleries from './ExtendGalleries'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

export default {
  name: 'TopNav',
  components: { ExtendGalleries, MobileNav, DesktopNav },
  computed: {
    activeGalleries() {
      if (!this.galleries) {
        return
      }
      return this.galleries.filter(gallery => gallery.isActive)
    },
    isHome() {
      return this.$route.name === 'home'
    }
  },
  data() {
    return {
      galleries: null,
      showGalleries: false
    }
  },
  created() {
    this.fetchGalleries()
  },
  methods: {
    fetchGalleries() {
      firebase
        .firestore()
        .collection(process.env.VUE_APP_DB_GALLERIES)
        .doc('galleries')
        .get()
        .then(doc => {
          if (doc.exists) {
            this.galleries = doc.data().galleries
          }
        })
    },
    toggleGalleries(e) {
      this.showGalleries = !this.showGalleries
      if (this.showGalleries) {
        e.stopPropagation()
        document.addEventListener('click', this.closeGalleries)
        return
      }
    },
    closeGalleries(e) {
      if (!e.target.classList.contains('galleries')) {
        this.showGalleries = false
        document.removeEventListener('click', this.closeGalleries)
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 769px) {
  .mobile-display {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .not-home-display {
    display: none;
  }
  .desktop-display {
    display: none;
  }
}
</style>

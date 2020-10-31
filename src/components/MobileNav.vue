<template>
  <nav>
    <div class="mobile-nav" :class="isExpanded ? 'is-expanded' : ''">
      <div class="mobile-nav__logo">
        <router-link to="/">
          <img src="../assets/logo.png" />
        </router-link>
      </div>
      <div class="mobile-nav__burger">
        <a class="mobile-nav__burger-button" @click="openBurger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        class="mobile-nav__links"
        :class="isExpanded ? 'mobile-nav__links-expanded' : ''"
      >
        <router-link
          class="mobile-nav__link"
          :to="'/gallery/' + gallery.id"
          v-for="gallery in galleries"
          :key="gallery.id"
        >
          {{ gallery.title }}
        </router-link>
        <div class="mobile-nav__galleries-line"></div>
        <router-link class="mobile-nav__link" :to="'/prices'">
          Kainos
        </router-link>
        <router-link class="mobile-nav__link" :to="'/partners'">
          Partnerės
        </router-link>
        <router-link to="/contacts" class="mobile-nav__link"
          >Kontaktai</router-link
        >
        <router-link to="/calendar" class="mobile-nav__link"
          >Užimtumas</router-link
        >
      </div>
    </div>
    <div v-if="isHome" class="mobile-nav-home">
      <div class="mobile-nav-home__button-container">
        <a @click="$emit('toggleGalleries', $event)">
          Galerijos
        </a>
      </div>
      <div class="mobile-nav-home__button-container">
        <router-link to="/contacts">
          Kontaktai
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileNav',
  props: {
    isHome: Boolean,
    galleries: Array
  },
  data() {
    return {
      isExpanded: false,
      scrolledHeight: null
    }
  },
  methods: {
    openBurger(e) {
      if (this.isExpanded) {
        this.closeBurger()
        return
      }
      e.stopPropagation()
      this.isExpanded = !this.isExpanded
      if (this.isExpanded) {
        document.addEventListener('click', this.closeBurger, { once: true })
      }
      let htmlEl = document.getElementsByTagName('html')[0]
      this.scrolledHeight =
        window.scrollY || window.scrollTop || htmlEl.scrollTop

      htmlEl.classList.add('js-clipped')
    },
    closeBurger() {
      this.isExpanded = false
      document.getElementsByTagName('html')[0].classList.remove('js-clipped')
      window.scrollTo(0, this.scrolledHeight)
    }
  }
}
</script>

<style scoped>
.mobile-nav__galleries-line {
  margin: auto;
  width: 200px;
  border-top: 1px solid #4a4a4a;
}
/* Other pages navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: left;
  height: 3.25rem;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  transition: background-color ease-out 0.5s;
  font-size: 24px;
}
.mobile-nav.is-expanded {
  transition: none;
  background-color: rgba(255, 255, 255, 1);
}
.mobile-nav__logo img {
  height: 3.25rem;
  vertical-align: bottom;
}
.mobile-nav__logo {
  display: inline-block;
  line-height: 3.25rem;
}
.mobile-nav__links {
  text-align: center;
  display: none;
}
.mobile-nav__links-expanded {
  display: block;
}
.mobile-nav__link {
  padding: 5px;
  display: block;
  color: #1a1c1b;
  margin: 15px;
}
.is-expanded {
  left: 0;
  width: 100%;
  height: auto;
  bottom: 0;
  position: absolute;
  display: block;
  overflow-y: auto;
}
.mobile-nav__burger {
  position: absolute;
  top: 0;
  right: 0;
}
.mobile-nav__burger-button {
  color: #4a4a4a;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
}
.mobile-nav__burger-button span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
}
.mobile-nav__burger-button span:nth-child(1) {
  top: calc(50% - 6px);
}

.mobile-nav__burger-button span:nth-child(2) {
  top: calc(50% - 1px);
}

.mobile-nav__burger-button span:nth-child(3) {
  top: calc(50% + 4px);
}

.mobile-nav__burger-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.mobile-nav.is-expanded .mobile-nav__burger-button span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.mobile-nav.is-expanded .mobile-nav__burger-button span:nth-child(2) {
  opacity: 0;
}

.mobile-nav.is-expanded .mobile-nav__burger-button span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}
/* Home navigation */
.mobile-nav-home {
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
}
.mobile-nav-home__button-container {
  display: inline-block;
  width: 50%;
}
.mobile-nav-home__button-container > a {
  padding: 5px;
  font-size: 24px;
  display: inline-block;
  /* color should be defined in root as variable */
  color: #1a1c1b;
}
</style>

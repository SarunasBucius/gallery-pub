<template>
  <nav :class="isHome ? 'is-home' : ''" class="desktop-nav">
    <div class="desktop-nav__logo">
      <router-link to="/">
        <img src="../assets/logo.png" />
      </router-link>
    </div>
    <div class="desktop-nav__links">
      <div class="desktop-nav__links-container">
        <a class="desktop-nav__link" @click="$emit('toggleGalleries', $event)">
          Galerijos
        </a>
        <router-link class="desktop-nav__link" :to="'/prices'">
          Kainos
        </router-link>
        <router-link class="desktop-nav__link" :to="'/partners'">
          Partnerės
        </router-link>
        <router-link to="/contacts" class="desktop-nav__link"
          >Kontaktai</router-link
        >
        <router-link to="/calendar" class="desktop-nav__link"
          >Užimtumas</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DesktopNav',
  props: {
    isHome: Boolean
  }
}
</script>

<style scoped>
/* Navigation on other pages */
.desktop-nav {
  margin-top: -3.25rem;
  height: 3.25rem;
  background-color: rgba(255, 255, 255, 0.8);
}
.desktop-nav__logo img {
  height: 3.25rem;
  vertical-align: bottom;
}
.desktop-nav__logo a {
  display: inline-block;
  height: 3.25rem;
}
.desktop-nav__logo {
  display: inline-block;
  height: 100%;
  max-width: 170px;
  min-width: 170px;
}
.desktop-nav__links {
  display: inline-block;
  width: calc(100% - 170px);
  height: 100%;
  vertical-align: bottom;
  text-align: center;
}
.desktop-nav__links-container {
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  font-size: 24px;
  align-items: center;
}
.desktop-nav__link {
  padding: 5px;
  color: #1a1c1b;
}
/* Navigation on home page */
.is-home.desktop-nav {
  margin-top: -3.25rem;
  height: 6.5rem;
  background-color: rgba(255, 255, 255, 0.8);
}
.is-home .desktop-nav__logo img {
  height: 4rem;
}
.is-home .desktop-nav__logo a {
  display: inline-block;
  height: 4rem;
  margin-top: 1.25rem;
}
.is-home .desktop-nav__logo {
  display: inline-block;
  height: 100%;
  max-width: 170px;
  min-width: 170px;
}
.is-home .desktop-nav__links {
  display: inline-block;
  width: calc(100% - 170px);
  height: 100%;
  vertical-align: bottom;
  text-align: center;
}
.is-home .desktop-nav__links-container {
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  font-size: 26px;
  align-items: center;
}
.is-home .desktop-nav__link {
  padding: 5px;
  color: #1a1c1b;
}
</style>

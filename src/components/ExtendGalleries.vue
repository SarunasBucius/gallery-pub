<template>
  <transition
    @enter="enter"
    @afterEnter="afterEnter"
    @leave="leave"
    name="expand"
  >
    <div class="galleries-nav">
      <div class="galleries-nav__list" v-if="galleries">
        <router-link
          :to="'/gallery/' + gallery.id"
          v-for="gallery in galleries"
          :key="gallery.id"
        >
          {{ gallery.title }}
        </router-link>
      </div>
      <div v-else></div>
      <div></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ExtendGalleries',
  props: {
    galleries: Array
  },
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
    leave(element) {
      const height = getComputedStyle(element).height
      element.style.height = height

      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 0
      })
    }
  }
}
</script>

<style scoped>
.galleries-nav {
  background-color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
}
.galleries-nav__list {
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  font-size: 22px;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
}
.galleries-nav__list a {
  padding: 10px;
  color: #1a1c1b;
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
</style>

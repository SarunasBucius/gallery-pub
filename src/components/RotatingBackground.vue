<template>
  <div>
    <div id="bg-z-1" class="background-img"></div>
    <div id="bg-z-0" class="background-img"></div>
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
  name: 'RotatingBackground',
  data() {
    return {
      loadedImages: [],
      currentImage: null,
      currentIndex: null,
      rotationTime: 5000
    }
  },
  watch: {
    currentImage() {
      if (!this.currentImage) {
        return
      }
      let bg0 = document.getElementById('bg-z-0')
      let bg1 = document.getElementById('bg-z-1')
      let bg1op = bg1.style.opacity
      let img = new Image()
      img.onload = () => {
        if (Number(bg1op) === 1) {
          bg0.setAttribute(
            'style',
            'background-image:url(' + this.currentImage + '); opacity: 1'
          )
          bg1.style.opacity = '0'
          return
        }
        bg1.setAttribute(
          'style',
          'background-image:url(' + this.currentImage + '); opacity: 1'
        )
        bg0.style.opacity = '0'
      }
      img.src = this.currentImage
    }
  },
  async created() {
    let doc = await this.fetchImagesDoc()
    if (!doc) {
      return
    }
    let groupId = this.getImagesGroupIdForMedia(doc, this.getMedia())
    this.loadImg(doc[groupId].photos)
  },
  methods: {
    async fetchImagesDoc() {
      return await firebase
        .firestore()
        .collection(process.env.VUE_APP_DB_PHOTOS)
        .doc('background')
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    },
    getImagesGroupIdForMedia(doc, media) {
      if (!doc) {
        return
      }
      let groupId
      Object.keys(doc).forEach(key => {
        if (doc[key].name === media) {
          groupId = key
        }
      })
      return groupId
    },
    getMedia() {
      if (window.screen.width < 480 || window.screen.height < 480) {
        return 'phone'
      }
      return 'main'
    },
    loadImg(images) {
      const img = new Image()
      let currentImage = images[0]
      img.src = currentImage.url
      img.onload = () => {
        this.loadedImages.push(currentImage.url)
        let index = images.indexOf(currentImage)
        images.splice(index, 1)
        if (this.loadedImages.length === 1) {
          this.startBackgroundRotation()
        }
        if (images.length > 0) {
          this.loadImg(images)
        }
      }
    },
    startBackgroundRotation() {
      this.currentImage = this.loadedImages[0]
      this.currentIndex = 0
      setInterval(this.changeBg, this.rotationTime)
    },
    changeBg() {
      if (this.loadedImages.length - 1 > this.currentIndex) {
        this.currentImage = this.loadedImages[++this.currentIndex]
        return
      }
      this.currentImage = this.loadedImages[0]
      this.currentIndex = 0
    }
  }
}
</script>

<style scoped>
.background-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0;
  background-position: center;
  background-size: cover;
  -webkit-transition: opacity 1s;
  -moz-transition: opacity 1s;
  -ms-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s;
}
</style>

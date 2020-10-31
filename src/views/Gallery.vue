<template>
  <div class="images">
    <div v-for="(photo, index) in loadedPhotos" :key="index">
      <div class="images__image-container">
        <img
          v-if="photo.url"
          :id="index"
          class="image-size images__image js-image"
          :src="photo.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'

export default {
  name: 'Gallery',
  data() {
    return {
      readyToLoad: [],
      photos: [],
      loadedPhotos: []
    }
  },
  created() {
    this.fetchPhotos()
  },
  watch: {
    readyToLoad() {
      if (this.readyToLoad.length === 0) {
        return
      }
      this.loadImage()
    }
  },
  methods: {
    fetchPhotos() {
      firebase
        .firestore()
        .collection(process.env.VUE_APP_DB_PHOTOS)
        .doc(this.$route.params.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            Object.entries(doc.data()).forEach(entry => {
              if (!entry[1].photos) {
                return
              }
              this.photos.push(...entry[1].photos)
            })
            if (this.photos.length < 15) {
              this.readyToLoad.push(...this.photos)
              this.photos = []
              return
            }
            this.readyToLoad.push(...this.photos.slice(0, 10))
            this.photos.splice(0, 10)
          }
        })
    },
    loadImage() {
      const img = new Image()
      img.src = this.readyToLoad[0].url
      img.onload = () => {
        this.loadedPhotos.push(this.readyToLoad[0])
        this.readyToLoad.splice(0, 1)
        if (this.readyToLoad.length === 0) {
          this.startObserve()
        }
      }
    },
    startObserve() {
      if (this.photos.length === 0 || this.$route.name !== 'gallery') {
        return
      }
      if ('IntersectionObserver' in window) {
        let groups = document.getElementsByClassName('js-image')
        if (!groups) {
          return
        }
        let obsGroup = groups[groups.length - 1]
        if (groups.length > 5) {
          obsGroup = groups[groups.length - 5]
        }
        let observer = new IntersectionObserver(entries => {
          if (
            entries[0].isIntersecting ||
            entries[0].boundingClientRect.top < 0
          ) {
            if (this.photos.length < 10) {
              this.readyToLoad.push(...this.photos)
              this.photos = []
              observer.unobserve(obsGroup)
              return
            }
            this.readyToLoad.push(...this.photos.slice(0, 5))
            this.photos.splice(0, 5)
            observer.unobserve(obsGroup)
          }
        })
        observer.observe(obsGroup)
      }
    }
  }
}
</script>

<style scoped>
.images {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.images__image {
  object-fit: contain;
  display: block;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .images__image {
    padding: 10px;
    max-height: calc(100vh - 20px);
    max-width: calc(100vw - 20px);
  }
}
@media screen and (min-width: 769px) {
  .images__image {
    max-width: 740px;
    max-height: calc(100vh - 20px);
    padding: 10px;
  }
}
</style>

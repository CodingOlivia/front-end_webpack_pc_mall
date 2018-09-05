<template>
  <div>
    <div class="overviewBox">
      <img v-for="gallery in Gallery" :src=gallery.src class="responsive">
    </div>
  </div>
</template>

<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      Gallery: [
        {'src': 'statics/images/overview/1.png'},
        {'src': 'statics/images/overview/2.png'},
        {'src': 'statics/images/overview/3.png'},
        {'src': 'statics/images/overview/4.png'},
        {'src': 'statics/images/overview/bottom.png'}
      ]
    }
  }
}
</script>
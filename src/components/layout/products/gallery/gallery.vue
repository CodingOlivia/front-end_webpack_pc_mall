<template>
  <div>
    <div>
      <q-gallery-carousel
        horizontal-quick-view
        infinite
        autoplay
        fullscreen  
        :src="slider" 
        class="imagesbox" />
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
      slider: [
        'statics/images/gallery/pic1.png',
        'statics/images/gallery/pic2.png',
        'statics/images/gallery/pic3.png',
        'statics/images/gallery/pic4.png'
      ]
    }
  }
}
</script>
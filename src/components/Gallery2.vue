<template>
<div class="" v-if="images != undefined && images.length > 0">
  <div :id="id" class="blueimp-gallery blueimp-gallery-display" :class="[showControls ? 'blueimp-gallery-controls' : '']" style="display: none;">
    <div class="slides" id="slides"></div>
    <img class="logo" src="img/logo1.png"/>
    <h3 class="title bottom"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">
      <slot name="close">✖</slot>
    </a>
    <ol class="indicator"></ol>
    <a class="play-pause"></a>
  </div>
    <div class="gallery" :id="'gallery-'+id">
      <div class="gallery-item" v-for="(image, i) in images" :key="i" @click="index = i">
        <img :src="image.href" :height="imgHeight">
      </div>
    </div>
</div>
</template>

<script>
import 'blueimp-gallery/css/blueimp-gallery.min.css'
import 'blueimp-gallery/js/blueimp-helper.js'
import 'blueimp-gallery/js/blueimp-gallery-video.js'
import 'blueimp-gallery/js/blueimp-gallery-youtube.js'
import blueimp from 'blueimp-gallery/js/blueimp-gallery.js'

import { AppFullscreen } from 'quasar'

export default {
  name: 'Gallery2',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    id: {
      type: String,
      default: 'blueimp-gallery'
    }
  },
  data () {
    return {
      instance: null,
      index: null,
      showControls: false,
      mousemove: false,
      imgHeight: 200
    }
  },
  watch: {
    index (value) {
      if (value !== null) {
        AppFullscreen.request()
        this.open(value)
      } else {
        if (this.instance !== null) {
          this.instance.destroyEventListeners()
          this.instance = null
          AppFullscreen.exit()
        }
      }
    },
    '$q.fullscreen.isActive' (value) {
      if (!value) {
        if (this.instance !== null) {
          this.instance.close()
        }
      }
    }
  },
  destroyed () {
    if (this.instance !== null) {
      this.instance.destroyEventListeners()
      this.instance.close()
      this.instance = null
    }
  },
  methods: {
    open (index = 0) {
      const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp
      const options = Object.assign(
        {
          toggleControlsOnReturn: false,
          toggleControlsOnSlideClick: false,
          closeOnSlideClick: false,
          container: `#${this.id}`,
          index,
          onopen: () => this.$emit('onopen'),
          onopened: () => this.$emit('onopened'),
          onslide: (index, slide) =>
            this.$emit('onslide', { index, slide }),
          onslideend: (index, slide) =>
            this.$emit('onslideend', { index, slide }),
          onslidecomplete: (index, slide) =>
            this.$emit('onslidecomplete', { index, slide }),
          onclose: () => { this.index = null },
          onclosed: () => this.$emit('onclosed')
        },
        this.options
      )
      this.instance = instance(this.images, options)
    }
  },
  mounted () {
    document.getElementById('slides').addEventListener('mousemove', () => {
      this.mousemove = true
    })
    document.getElementById('slides').addEventListener('mousedown', () => {
      this.mousemove = false
    })
    document.getElementById('slides').addEventListener('mouseup', () => {
      if (!this.mousemove) {
        this.showControls = !this.showControls
      } else {
        this.mousemove = false
      }
    })
  }
}
</script>

<style scoped>
.gallery {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.gallery-item {
  flex-grow: 1;
  padding: .16rem;
}
.gallery-item img {
  display: block;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;
}
.blueimp-gallery>.bottom {
  bottom: 15px;
  top: unset;
}
.blueimp-gallery>.logo {
  position: absolute;
  top: 15px;
  left: 15px;
  opacity: 1;
  display: block;
  height: 120px;
}
.blueimp-gallery>.next, .blueimp-gallery>.prev {
  background: none;
  border: none;
}
</style>

<template>
<div class="" v-if="images != undefined && images.length > 0">
  <div :id="id" class="blueimp-gallery blueimp-gallery-display" :class="[showControls ? 'blueimp-gallery-controls' : '']" style="display: none;">
    <div class="slides" id="slides"></div>
    <img class="logo" src="https://www.kchilites.com/skin/frontend/kchilites/default/images/branding/logo-kc-yellow-480-minimal.png"/>
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
        <div class="content">
          <img :src="image.href">
        </div>
      </div>
    </div>
</div>
</template>

<script>
import 'blueimp-gallery/css/blueimp-gallery.min.css'
// import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js'
import 'blueimp-gallery/js/blueimp-gallery-video.js'
import 'blueimp-gallery/js/blueimp-gallery-youtube.js'
import blueimp from 'blueimp-gallery/js/blueimp-gallery.js'

import { AppFullscreen } from 'quasar'

export default {
  name: 'Gallery',
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
      mousemove: false
    }
  },
  watch: {
    index (value) {
      if (value !== null) {
        AppFullscreen.request()
        this.open(value)
      } else {
        this.close()
        AppFullscreen.exit()
      }
    },
    mousemove (value) {
      console.log(value)
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
          onslide: this.onSlideCustom,
          onslideend: (index, slide) =>
            this.$emit('onslideend', { index, slide }),
          onslidecomplete: (index, slide) =>
            this.$emit('onslidecomplete', { index, slide }),
          onclose: () => this.close(),
          onclosed: () => this.$emit('onclosed')
        },
        this.options
      )
      this.instance = instance(this.images, options)
    },
    onSlideCustom (index, slide) {
      this.$emit('onslide', { index, slide })
    },
    close () {
      this.index = null
    },
    getVal (elem, style) {
      return parseInt(window.getComputedStyle(elem).getPropertyValue(style))
    },
    getHeight (item) {
      return item.querySelector('.content').getBoundingClientRect().height
    },
    resizeAll () {
      console.log('chamou')
      let gallery = document.querySelector(`#gallery-${this.id}`)
      let altura = this.getVal(gallery, 'grid-auto-rows')
      let gap = this.getVal(gallery, 'grid-row-gap')
      gallery.querySelectorAll('.gallery-item').forEach((item) => {
        let el = item
        el.style.gridRowEnd = 'span ' + Math.ceil(((this.getHeight(item) + gap) / (altura + gap)) - 1)
      })
    }
  },
  mounted () {
    const gallery = document.querySelector(`#gallery-${this.id}`)
    gallery.querySelectorAll('img').forEach(function (item) {
      item.classList.add('byebye')
      if (item.complete) {
        console.log(item.src)
      } else {
        item.addEventListener('load', () => {
          let altura = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'))
          let gap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-row-gap'))
          let gitem = item.parentElement.parentElement
          gitem.style.gridRowEnd = 'span ' + Math.ceil(((gitem.querySelector('.content').getBoundingClientRect().height + gap) / (altura + gap)) - 1)
          item.classList.remove('byebye')
        })
      }
    })
    window.addEventListener('resize', this.resizeAll)
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('full')
      })
    })
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
    this.resizeAll()
  }
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 8px;
}
.gallery img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 16px #333;
  transition: all 1.5s ease;
}
.gallery .content {
  padding: 4px;
}
.gallery .gallery-item {
  transition: grid-row-start 300ms linear;
  transition: transform 300ms ease;
  transition: all 0.5s ease;
  cursor: pointer;
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
  height: 60px;
}
.blueimp-gallery>.next, .blueimp-gallery>.prev {
  background: none;
  border: none;
}
</style>

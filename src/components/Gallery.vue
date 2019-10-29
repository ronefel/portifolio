<template>
<div class="row" v-if="images != undefined && images.length > 0">
      <div class="col-12" v-if="images.length >= 5">
        <div class="row">
          <div
            :id="id"
            class="blueimp-gallery blueimp-gallery-controls"
          >
            <div class="slides"></div>
            <!-- <h3 class="title"></h3> -->
            <a class="prev">
              <slot name="prev">‹</slot>
            </a>
            <a class="next">
              <slot name="next">›</slot>
            </a>
            <a class="close">
              <slot name="close">X</slot>
            </a>
            <ol class="indicator"></ol>
            <a class="play-pause"></a>
          </div>
          <img
            v-for="(image, i) in images"
            :key="i"
            @click="index = i"
            class="img"
            :src="image.href"/>
        </div>
      </div>
    </div>
</template>

<script>
import 'blueimp-gallery/css/blueimp-gallery.min.css'
import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js'
import 'blueimp-gallery/js/blueimp-gallery-video.js'
import 'blueimp-gallery/js/blueimp-gallery-youtube.js'
import blueimp from 'blueimp-gallery/js/blueimp-gallery.js'

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
      index: null
    }
  },
  watch: {
    index (value) {
      if (value !== null) {
        this.open(value)
      } else {
        if (this.instance) {
          this.instance.close()
        }
        this.close()
      }
    }
  },
  mounted () {
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
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .img-left {
    height: 365px;
    max-width: 100%;
    min-width: 100%;
  }
  .img-right {
    height: 350px;
  }
  .img-right {
    display: none;
  }
}
.blueimp-gallery > .description {
  position: absolute;
  top: 30px;
  left: 15px;
  color: #fff;
  display: none;
}
.blueimp-gallery-controls > .description {
  display: block;
}
.blueimp-gallery > .next,
.blueimp-gallery > .prev {
  color: #fff !important;
  background: transparent;
  border: 0px;
  opacity: 0.8;
  font-size: 90px;
  font-weight: 100;
}
.blueimp-gallery > .close,
.blueimp-gallery > .title {
  color: #fff !important;
  opacity: 0.7;
}
.img{
  height: 200px;
  margin: 5px;
  cursor: pointer;
}
</style>

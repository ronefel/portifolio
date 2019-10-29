<template>
  <div>
    <div>Galeria 1</div>
    <Gallery :images="images" id="images"/>
    <div>Galeria 2</div>
    <Gallery :images="img" id="img"/>
  </div>
</template>

<script>
import Gallery from '../components/Gallery'
export default {
  name: 'Index',
  components: {
    Gallery
  },
  data () {
    return {
      images: [
        {
          title: 'Galeria 1 title 1',
          href: 'https://source.unsplash.com/random/?tech' },
        {
          title: 'Galeria 1 title 2',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 3',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 4',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 5',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 2',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 3',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 4',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 5',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 2',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 3',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 4',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 5',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 2',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 3',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 4',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 5',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lamp'
        }
      ],
      img: [
        {
          title: 'Galeria 2 title 1',
          href: 'https://source.unsplash.com/random/?tech,care' },
        {
          title: 'Galeria 2 title 2',
          href: 'https://source.unsplash.com/random/?tech,studied'
        },
        {
          title: 'Galeria 2 title 3',
          href: 'https://source.unsplash.com/random/?tech,substance'
        },
        {
          title: 'Galeria 2 title 4',
          href: 'https://source.unsplash.com/random/?tech,choose'
        },
        {
          title: 'Galeria 2 title 5',
          href: 'https://source.unsplash.com/random/?tech,past' },
        {
          title: 'Galeria 2 title 6',
          href: 'https://source.unsplash.com/random/?tech,lamp'
        }
      ]
    }
  }
}
</script>
<style>
body{
  background: #222222;
}
</style>

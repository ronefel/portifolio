<template>
  <div class="row">
    <div class="col-xs-12">
      <div>Galeria 1</div>
      <Gallery :images="images" id="images"/>
      <div>Galeria 2</div>
      <Gallery :images="img" id="img"/>
    </div>
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
          title: 'Galeria 1 title 7',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 8',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 9',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 10',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 11',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 12',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 13',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 14',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 15',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 16',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 17',
          href: 'https://source.unsplash.com/random/?care'
        },
        {
          title: 'Galeria 1 title 18',
          href: 'https://source.unsplash.com/random/?substance'
        },
        {
          title: 'Galeria 1 title 19',
          href: 'https://source.unsplash.com/random/?choose'
        },
        {
          title: 'Galeria 1 title 20',
          href: 'https://source.unsplash.com/random/?past' },
        {
          title: 'Galeria 1 title 21',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 22',
          href: 'https://source.unsplash.com/random/?lamp'
        },
        {
          title: 'Galeria 1 title 23',
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

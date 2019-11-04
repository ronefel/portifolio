<template>
  <div class="page-index q-pa-sm">
    <div class="logo-principal">
      <img src="~assets/logo2.png" class="responsive" >
    </div>
    <div class="menu-principal">
      <q-tabs align="justify" indicator-color="transparent" no-caps>
        <q-route-tab label="Trabalho" to="/" exact />
        <q-route-tab label="Cursos" to="/" exact />
        <q-route-tab label="Informações" to="/" exact />
      </q-tabs>
    </div>
    <div class="row">
      <div class="col-xs-12 q-pb-xl">
        <div class="titulo-galeria">Galeria 1</div>
        <Gallery :images="images" id="images"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 q-pb-xl">
        <div class="titulo-galeria">Galeria 2</div>
        <Gallery :images="img" id="img"/>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '../components/Gallery2'
export default {
  name: 'Index',
  components: {
    Gallery
  },
  data () {
    return {
      images: [
        {
          title: 'Vídeo',
          type: 'text/html',
          youtube: 'zi4CIXpx7Bg',
          href: 'https://img.youtube.com/vi/zi4CIXpx7Bg/maxresdefault.jpg'
        },
        {
          title: 'Galeria 1 title 1',
          href: 'https://source.unsplash.com/random/?makeup' },
        {
          title: 'Galeria 1 title 2',
          href: 'https://source.unsplash.com/random/?makeup-flatlays'
        },
        {
          title: 'Galeria 1 title 3',
          href: 'https://source.unsplash.com/random/?makeup-artist-tay'
        },
        {
          title: 'Galeria 1 title 4',
          href: 'https://source.unsplash.com/random/?makeup-artist'
        },
        {
          title: 'Galeria 1 title 5',
          href: 'https://source.unsplash.com/random/?beauty' },
        {
          title: 'Galeria 1 title 6',
          href: 'https://source.unsplash.com/random/?lana'
        },
        {
          title: 'Galeria 1 title 7',
          href: 'https://source.unsplash.com/random/?fashion'
        },
        {
          title: 'Galeria 1 title 8',
          href: 'https://source.unsplash.com/random/?makeup-tools'
        },
        {
          title: 'Galeria 1 title 9',
          href: 'https://source.unsplash.com/random/?beauty-art-concepts'
        },
        {
          title: 'Galeria 1 title 10',
          href: 'https://source.unsplash.com/random/?just-because' },
        {
          title: 'Galeria 1 title 11',
          href: 'https://source.unsplash.com/random/?beauty-makeup-artist-blush-shadow-design-brushes'
        },
        {
          title: 'Galeria 1 title 12',
          href: 'https://source.unsplash.com/random/?cm-bridal'
        },
        {
          title: 'Galeria 1 title 13',
          href: 'https://source.unsplash.com/random/?maquiagem'
        },
        {
          title: 'Galeria 1 title 14',
          href: 'https://source.unsplash.com/random/?maquiador'
        },
        {
          title: 'Galeria 1 title 15',
          href: 'https://source.unsplash.com/random/?beleza-maquiagem' },
        {
          title: 'Galeria 1 title 16',
          href: 'https://source.unsplash.com/random/?fashion-amd-make-up'
        },
        {
          title: 'Galeria 1 title 17',
          href: 'https://source.unsplash.com/random/?beauty-make-up'
        },
        {
          title: 'Galeria 1 title 18',
          href: 'https://source.unsplash.com/random/?make-up-and-hair'
        },
        {
          title: 'Galeria 1 title 19',
          href: 'https://source.unsplash.com/random/?make-up'
        },
        {
          title: 'Galeria 1 title 20',
          href: 'https://source.unsplash.com/random/?makeup-pack' },
        {
          title: 'Galeria 1 title 21',
          href: 'https://source.unsplash.com/random/?clarena-make-up'
        },
        {
          title: 'Galeria 1 title 22',
          href: 'https://source.unsplash.com/random/?make-up-cosmetics'
        },
        {
          title: 'Galeria 1 title 23',
          href: 'https://source.unsplash.com/random/?make-up-stylist'
        }
      ],
      img: [
        {
          title: 'Galeria 2 title 1',
          href: 'https://source.unsplash.com/random/?cosmetics-makeup-skincare-fragrance' },
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
  background: #222f3e;
  color: #ffffff;
}
.logo-principal{
  text-align: center;
  margin-top: 15px;
}
.logo-principal img {
  width: 100%;
  height: auto;
  max-width: 500px;
}
.menu-principal {
  margin: 50px 0;
}
@media (max-width: 767px) {
  .menu-principal {
    display: none;
  }
}
.menu-principal .q-tab__label{
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
}
.menu-principal .q-tab--active .q-tab__label {
  color: #e3b24f;
}
.menu-principal .col a.select {
  color: #e3b24f;
}
.titulo-galeria{
  font-size: 1.6rem;
}
</style>

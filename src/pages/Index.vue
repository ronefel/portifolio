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

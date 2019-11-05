<template>
  <q-layout class="layout" view="lHh lpR lFf">
    <q-header class="header" reveal elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
        </q-toolbar-title>

        <div class="social-links">
          <a href="https://wa.me/+5569984885482">
            <q-icon class="logo-social logo-whatsapp" name="fab fa-whatsapp" />
          </a>
          <q-icon class="logo-social logo-instagram" name="fab fa-instagram" />
          <q-icon class="logo-social logo-facebook" name="fab fa-facebook-f" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="drawer-index" v-model="drawer" side="left" overlay behavior="mobile" bordered>
      <div class="absolute-top logo-secundario">
        <img  src="~assets/logo1.png">
      </div>
      <q-scroll-area class="scroll-area">
        <q-list padding>
          <q-item class="item" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>

            <q-item-section>
              Trabalho
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>

            <q-item-section>
              Cursos
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section>
              Informações
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="footer">
        <div>
          Desenvolvido por: Rone Santos
          <a href="https://wa.me/+5569984062227">
            <q-icon class="logo-social logo-whatsapp" name="fab fa-whatsapp" />
          </a></div>
      </footer>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
<style scoped>
.layout{
  background: #222f3e;
  color: #ffffff;
}
.header, .footer {
  background-color: #2C3A47;
}
.footer {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24);
}
.footer>div {
  font-size: 12px;
  padding: 10px;
  text-align: center;
}
.drawer-index {
  background-color: #2C3A47;
  border-color: #2C3A47;
}
.drawer-index .scroll-area {
  background-color: #2C3A47;
  height: calc(100% - 180px);
  margin-top: 180px;
}
.logo-secundario {
  text-align: center;
  height: 180px;
  background-color: #222f3e;
}
.logo-secundario img {
  height: 150px;
  margin-top: 15px;
}
.item.q-item--active {
  color: #e3b24f;
}
.logo-social {
  cursor: pointer;
  font-size: 1.8rem;
  padding: 20px;
  border-radius: 10px;
}
.logo-instagram:hover {
  background-color: #f44747;
}
.logo-facebook:hover {
  background-color: #3c5a99;
}
.logo-whatsapp:hover {
  background-color: #00e676;
}
.social-links a, footer a{
  text-decoration: none;
  color: #ffffff;
}
.footer .logo-social{
  font-size: 20px;
  margin: -10px 0px;
  padding: 13px;
  border-radius: 7px;
}
</style>

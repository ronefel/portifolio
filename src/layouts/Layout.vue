<template>
  <q-layout view="lHh lpR lFf">
    <q-header reveal elevated>
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

        <div>
          <q-icon class="logo-social logo-instagram" name="fab fa-instagram" />
          <q-icon class="logo-social logo-facebook" name="fab fa-facebook-f" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" overlay behavior="mobile" bordered>
      <div class="absolute-top logo-secundario">
        <img  src="~assets/logo1.png">
      </div>
      <q-scroll-area style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item active clickable v-ripple>
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
<style>
.q-header {
  background-color: #2C3A47;
}
.q-drawer {
  background-color: #2C3A47;
  border-color: #2C3A47;
}
.q-drawer .q-scrollarea {
  border-right: none !important;
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
.q-item--active {
  color: #e3b24f;
}
.logo-social {
  cursor: pointer;
  font-size: 1.5rem;
  padding: 20px;
}
.logo-instagram:hover {
  background-color: #f44747;
}
.logo-facebook:hover {
  background-color: #3c5a99;
}
</style>

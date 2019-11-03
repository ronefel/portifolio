<template>
  <q-layout id="admin-layout" class="admin-layout" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Portifólio App
        </q-toolbar-title>

        <div>v 0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item active clickable v-ripple active-class="text-primary" :to="{ name: 'galerias' }">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>

            <q-item-section>
              Galerias
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-prymary" :to="{ name: 'informacoes' }">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section>
              Informações
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="text-red">
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>

            <q-item-section>
              Sair
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~assets/perfil.jpg">
          </q-avatar>
          <div class="text-weight-bold">Krys Cardoso</div>
          <div>@krys.cardoso_makeup_artist</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style scoped>
.admin-layout{
  background-color: #ffffff;
  color: #222222;
}
.q-drawer--left.q-drawer--bordered {
    border-right: none;
}
</style>

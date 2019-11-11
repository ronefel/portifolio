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
        <q-list class="menu" padding>
          <q-item v-for="(link, i) in links" :key="i"
            clickable
            v-ripple
            active-class="text-primary"
            class="item"
            :to="{ name: link.to }">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              {{ link.label }}
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="item" @click="sair()">
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
            <img src="img/perfil.jpg" />
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
      leftDrawerOpen: false,
      links: [
        { label: 'Galerias', to: 'galerias', icon: 'image' },
        { label: 'Informações', to: 'informacoes', icon: 'info' }
      ]
    }
  }
}
</script>
<style scoped>
.admin-layout{
  background-color: #ffffff;
  color: #222222;
}
.menu .item {
  color: #666;
}
.menu .item.q-router-link--exact-active {
  background-color: #e7f1fb;
}
</style>

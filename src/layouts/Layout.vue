<template>
  <q-layout class="index-layout" view="lHh Lpr lFf">
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
    }
  }
}
</script>
<style lang="stylus" scoped>
.index-layout{
  background: #222222;
  color: #ffffff;
}
</style>

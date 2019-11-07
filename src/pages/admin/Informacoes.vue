<template>
  <q-page>
    <q-editor
      v-model="editor"
      flat
      :definitions="{
        save: {
          tip: 'Salvar texto',
          icon: 'save',
          label: 'Salvar',
          handler: saveWork
        }
      }"
      :toolbar="[
        [ 'save',
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: 'Sailec Light',
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'sailec_light',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          }
        ],
        ['bold', 'italic', 'strike', 'underline'],
        ['left', 'center', 'right', 'justify'],
        ['unordered', 'ordered', 'outdent', 'indent'],
        ['undo', 'redo', 'hr', 'link'],
        ['viewsource', 'removeFormat']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana',
        sailec_light: 'Sailec Light'
      }"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Informacoes',
  data () {
    return {
      editor: 'What you see is <b>what</b> you get.'
    }
  },
  methods: {
    saveWork () {
      console.log('salvar executado')
    }
  }
}
</script>
<style scoped>
.q-page {
  margin: 10px;
}
</style>

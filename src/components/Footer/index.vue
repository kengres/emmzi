<template>
  <v-footer :fixed="fixedFooter" class="primary pa-4" light>
    <v-spacer></v-spacer>
    <span class="white--text">Copyrights © {{ new Date().getFullYear() }} Emmzi.com</span>
  </v-footer>
</template>
<script>
export default {
  computed: {
    fixedFooter () {
      return this.$store.getters.fixedFooter
    }
  }
}
</script>

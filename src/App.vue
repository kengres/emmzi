<template>
  <v-app>
    <App-Header v-if="!isAdmin"></App-Header>
    <App-Header-Admin v-else></App-Header-Admin>
    <main>
      <router-view></router-view>
    </main>
    <App-Footer></App-Footer>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import HeaderAdmin from './components/HeaderAdmin'
  import Footer from './components/Footer'
  export default {
    components: {
      'AppHeader': Header,
      'AppHeaderAdmin': HeaderAdmin,
      'AppFooter': Footer
    },
    created () {
      console.log(this.$route.path)
    },
    computed: {
      isAdmin () {
        if ((this.$route.path).indexOf('/admin') !== -1) {
          return true
        }
        return false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
<style>
  @media(min-width: 768px) {
    button.toolbar__side-icon{
      display: none;
    }

  }
</style>

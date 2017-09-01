<template>
  <div>
      <App-Header></App-Header>
      <router-view></router-view>
      <AppFooter></AppFooter>
  </div>
</template>
<script>
import Header from '../Header'
import Footer from '../Footer'
export default {
  components: {
    'AppHeader': Header,
    'AppFooter': Footer
  }
}
</script>

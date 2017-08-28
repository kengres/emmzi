<template>
  <div id="homeCover" class="masked">
    <div class="mask"></div>
  </div>
</template>

<script>
var body = document.querySelector('body')

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the Home page'
    }
  },
  created () {
    this.addHomeClass()
  },
  beforeRouteLeave (to, from, next) {
    this.removeHomeClass()
    next()
  },
  methods: {
    addHomeClass () {
      // add home class to body to hide elements
      body.classList.add('home')
      // fixed footer
      this.$store.dispatch('toggleFooter')
    },
    removeHomeClass () {
      // remove home class to body to hide elements
      body.classList.remove('home')
      this.$store.dispatch('toggleFooter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  #homeCover
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index 1
    background #ccc url('../assets/images/home-cover-mobile.jpg') center/cover no-repeat

    @media screen and (min-width: 767px)
      background-image url('../assets/images/home-cover.jpg')
    @media screen and (min-width: 1024px)
      background-image url('../assets/images/home-cover-large.jpg')
</style>

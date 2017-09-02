<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

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
<style src="vue-notifyjs/themes/default.css"></style>
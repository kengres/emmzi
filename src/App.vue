<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="sideNav"
    >
      <v-list>
        <v-list-tile
        v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Emmzi.com</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :fixed="fixedFooter" class="primary pa-4" light>
      <v-spacer></v-spacer>
      <span class="white--text">Copyrights © {{ new Date().getFullYear() }} Emmzi.com</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        iconClass: 'testing',
        menuItems: [
          {title: 'Songs', link: '/songs', icon: 'library_music'},
          {title: 'Hiphop', link: '/hiphop', icon: 'headset_mic'},
          {title: 'Poetry', link: '/poetry', icon: 'edit'},
          {title: 'Contact', link: '/contact', icon: 'contact_mail'}
        ]
      }
    },
    computed: {
      fixedFooter () {
        return this.$store.getters.fixedFooter
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

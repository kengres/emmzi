<template>
  <header>
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
            class="hidden-sm-and-up menuIcon"
            @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">Emmzi.com</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only ">
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-icon left class="">{{item.icon}}</v-icon>
            {{item.title}}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </header>
</template>
<script>
export default {
  data () {
    return {
      sideNav: false,
      iconClass: 'testing',
      isUser: true,
      menuItems: [
        {title: 'Songs', link: '/songs', icon: 'library_music'},
        {title: 'Hiphop', link: '/hiphop', icon: 'headset_mic'},
        {title: 'Poetry', link: '/poetry', icon: 'edit'},
        {title: 'Contact', link: '/contact', icon: 'contact_mail'}
      ]
    }
  }
}
</script>

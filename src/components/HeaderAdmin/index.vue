<template>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon
        class="hidden-sm-and-up menuIcon"
        @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
    <v-toolbar-title>
        <router-link to="/admin" tag="span" style="cursor: pointer">Admin Panel</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only ">
        <v-btn flat v-for="item in adminItems" :key="item.title" :to="item.link">
        <v-icon left class="">{{item.icon}}</v-icon>
        {{item.title}}
        </v-btn>
    </v-toolbar-items>
  </v-toolbar> 
</template>
<script>
export default {
  data () {
    return {
      sideNav: false,
      adminItems: [
        {title: 'Pages', link: '/admin/pages', icon: 'contact_mail'},
        {title: 'Songs', link: '/admin/songs', icon: 'library_music'}
      ]
    }
  }
}
</script>
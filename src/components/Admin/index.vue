<template>
  <v-app>
    <v-navigation-drawer 
      v-model='drawer'
      :mini-variant.sync="mini"
      permanent floating enable-resize-watcher>
      <v-list>
        <template v-for="(item, i) in menu">
          <v-list-group v-if="item.items" :group='item.group' :key="item.items.title">
            <v-list-tile :to='item.href' slot='item' :title="item.title">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-for='subItem in item.items'
              :key='subItem.title' :to='subItem.href' 
              :router='!subItem.target'
               ripple v-bind:disabled='subItem.disabled' v-bind:target='subItem.target'>

              <v-list-tile-action v-if='subItem.icon'>
                <v-icon class="success--text">{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
                
          </v-list-group>
          <v-subheader v-else-if='item.header' :key="item.header">
            {{ item.header }}
          </v-subheader>
          <v-divider v-else-if='item.divider' :key="item.divider">
            {{ item.header }}
          </v-divider>
          <v-list-tile 
            v-else :to='item.href' router ripple  v-bind:disabled='item.disabled'  :key="item.title" :title="item.title">
            <v-list-tile-action>
              <v-icon class="success--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>

        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar darken-1 fixed dark :class="theme">
      <v-toolbar-side-icon @click.native.stop='drawer = !drawer'></v-toolbar-side-icon>
      <v-toolbar-title>Title dynamic</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn icon dark slot="activator"></v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  
  <main>
    <v-container fluid class="pa-4">
      <v-alert v-bind='message' v-model='message.body' dismissible>{{message.body}}</v-alert>
      <div class="py-2">
        <v-slide-y-transition mode='out-in'>
          <router-view></router-view>
        </v-slide-y-transition>
      </div>
    </v-container>
  </main>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      drawer: true,
      mini: false,
      theme: 'primary',
      adminItems: [
        {title: 'Pages', link: '/admin/pages', icon: 'contact_mail'},
        {title: 'Songs', link: '/admin/songs', icon: 'library_music'}
      ],
      message: {
        type: null,
        body: null
      }
    }
  },
  computed: {
    menu () {
      return this.$store.getters.menu
    }
  }
}
</script>
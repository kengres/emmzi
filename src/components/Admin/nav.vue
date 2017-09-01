<template>
  <div>
      <v-list-group v-if='item.items' v-bind:group='item.group' :key="item.title">
            <v-list-tile :to='item.href' slot='item' :title="item.title">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>

             <v-list-tile 
                v-for='subItem in item.items'
                :key='subItem.href'
                :to='subItem.href'
                v-bind:router='!subItem.target'
                ripple  v-bind:disabled='subItem.disabled' v-bind:target='subItem.target'>
                  <v-list-tile-action v-if='subItem.icon'>
                    <v-icon class="success--text">{{ subItem.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile> 
            </v-list-tile>
          </v-list-group>
  </div>
</template>

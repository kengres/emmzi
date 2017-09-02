<template>
  <div>
    <v-card>
      <v-card-text>{{$route.params.resource}}</v-card-text>
    </v-card>
    <v-card class="mt-3">
      <v-data-table
      v-bind:headers="headers" :items="items"
      hide-actions class=""
      >
        <template slot="items" scope="props">
          <tr>
            <td 
              :class="column.align? '': 'text-xs-right'" 
              v-for="(column, i) in headers"
              v-html="getColumnData(props.item, column)"
              :key="i"></td>
            <td>
              <v-btn primary fab small dark>
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>

      </v-data-table>
        
    </v-card>

  </div>
</template>
<script>
  import config from '../../../config'
  const api = config.apiHost

  export default {
    data () {
      return {
        headers: [],
        items: []
      }
    },
    created () {
      this.addNotification()
      this.fetchData(this.$route.params)
    },
    computed: {
      usersHeaders () {
        return this.$store.getters.userHeaders
      },
      postsHeaders () {
        return this.$store.getters.postHeaders
      },
      typesHeaders () {
        return this.$store.getters.typeHeaders
      }
    },
    watch: {
      '$route.params': 'fetchData'
    },
    methods: {
      addNotification () {
        if (this.$route.query && this.$route.query.message === 'post_created') {
          this.$notify({
            message: 'Post successfylly created!',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            timeout: 6000,
            type: 'success'
          })
          setTimeout(() => {
            this.$router.replace({path: '/admin/crud/posts'})
          }, 1000)
        }
      },
      fetchData (type) {
        var apiUrl = api + '/' + type.resource
        if (type.resource === 'posts') {
          this.headers = this.postsHeaders
        } else if (type.resource === 'users') {
          this.headers = this.usersHeaders
        } else {
          this.headers = this.typesHeaders
        }
        console.log('api url: ', apiUrl)
        this.$http.get(apiUrl).then(response => {
          this.items = response.data
        }, response => {
          console.log('Error: ')
        })
      },
      postsTest () {
        console.log('test success...')
      },
      fetchUsers () {
        var apiUrl = api + '/users'
        this.$http.get(apiUrl).then(response => {
          console.log('users: ', response.data)
          this.userItems = response.data
        }, response => {
          console.log('Error: ')
        })
      },
      getColumnData (row, field) {
        let [l1, l2] = field.value.split('.')
        let value = row[l1]
        let tag = null
        if (l2) {
          value = row[l1] ? row[l1][l2] : null
        }
        if (field.type === 'image') {
          tag = 'img'
        }
        if (tag) {
          value = `<${tag} src="${value}" class="crud-grid-thumb" controls />`
        }
        if (value && value.length > 100) {
          return value.slice(0, 100) + '...'
        }
        return value
      }
    },
    filters: {
      getFirst_100_char (str) {
        if (str.length > 100) {
          return str.slice(0, 100) + '...'
        }
      }
    }
  }
</script>

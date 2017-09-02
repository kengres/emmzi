<template>
 <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 class=""
        v-for="card in cards" :key="card.id" >
        <v-card 
                :class="card.id%2==0 ? 'primary': 'secondary'"
                class="mb-3">
          <v-card-media :src="img" height="350px">
          </v-card-media>
          <v-card-title primary-title>
            Sing. Write. Dance!
          </v-card-title>
          <v-card-text class="">
            {{card.id}}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, similique corrupti repudiandae blanditiis sint assumenda voluptatum ad aliquam. Fugit repellat laudantium neque, consequuntur commodi, exercitationem placeat dolorem iusto magnam.
          </v-card-text>
          <v-btn @click="testApi">Test Api</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// Vue.use(VueResource)
export default {
  data () {
    return {
      cards: [
        {id: 1},
        {id: 2}
      ],
      img: require('../../assets/images/song-cover3.jpg')
    }
  },
  methods: {
    testApi () {
      var apiUrl = 'http://slimapp.dev/api/types'
      this.$http.get(apiUrl).then(response => {
        console.log('response: ', response.data)
      }, response => {
        console.log('Error: ')
      })
    }
  }
}
</script>
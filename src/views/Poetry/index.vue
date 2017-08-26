<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="">
        <v-card v-for="card in cards" :key="card.id" 
                :class="card.id%2==0 ? 'primary': 'secondary'"
                class="mb-3">
          <v-card-text class="">
            {{card.id}}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, similique corrupti repudiandae blanditiis sint assumenda voluptatum ad aliquam. Fugit repellat laudantium neque, consequuntur commodi, exercitationem placeat dolorem iusto magnam.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="">
        <v-card v-for="card in cards" :key="card.id" 
            :class="card.id%2!=0 ? 'primary': 'secondary'"
            class="mb-3">
          <v-card-text>
            {{card.id}}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, similique corrupti repudiandae blanditiis sint assumenda voluptatum ad aliquam. Fugit repellat laudantium neque, consequuntur commodi, exercitationem placeat dolorem iusto magnam.
          </v-card-text>
        </v-card>
      </v-flex>
      
      
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]
    }
  }
}
</script>

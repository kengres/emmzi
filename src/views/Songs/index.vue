<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 sm6 md4>
        <v-card>
          <a-player :music="playList" ref="player"></a-player>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card class="mt-4 mb-2">
          <a-player :music="song1" ref="player1" class="mb-3 mt-3"></a-player>
          <v-divider></v-divider>
          <a-player :music="song2" ref="player2" class="mb-3 mt-3"></a-player>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import VueAplayer from 'vue-aplayer'
export default {
  name: 'songs',
  data () {
    return {
      msg: 'Welcome to the Songs page',
      song1: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      },
      song2: {
        title: 'It Ain\'t Me',
        author: 'Emily Matt',
        url: 'static/music/it-aint-me.mp3',
        pic: 'static/images/song-cover2.jpg'
      },
      playList: [
        {
          title: 'Preparation',
          author: 'Hans Zimmer/Richard Harvey',
          url: 'http://devtest.qiniudn.com/Preparation.mp3',
          pic: 'static/images/song-cover2.jpg',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        },
        {
          title: 'Preparation2',
          author: 'Hans Zimmer/Richard Harvey',
          url: 'http://devtest.qiniudn.com/Preparation.mp3',
          pic: 'http://devtest.qiniudn.com/Preparation.jpg',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }
      ]
    }
  },
  components: {
    'a-player': VueAplayer
  },
  mounted () {
    let aplayer = this.$refs.player.control
    console.log('player: ', aplayer)
  }
}
</script>
<style lang="stylus" scoped>
  .card
    padding: 20px
    background: #a8a8a8
  .aplayer
    background: rgba(255,255,255,.9)
</style>

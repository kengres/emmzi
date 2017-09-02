<template>
  <div>
    <div class="text-center">
      <v-card>
        <v-card-text>Home Component</v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import Notify from './notify'
export default {
  data () {
    return {
      img: require('../../../assets/images/song-cover3.jpg')
    }
  },
  methods: {
    addNotification (verticalAlign, horizontalAlign) {
      this.$notify({
        horizontalAlign,
        verticalAlign,
        timeout: 6000,
        component: Notify,
        type: 'success'
      })
    }
  },
  components: {
    Notify
  }
}
</script>
<style scoped>
button.close {
  position: absolute;
  right: 10px;
}
</style>

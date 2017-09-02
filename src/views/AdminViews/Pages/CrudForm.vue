<template>
  <v-layout>
  <v-flex xs8>
    <form>
      <v-text-field
        label="Title"
        v-model="title"
        :error-messages="titleErrors"
        :counter="15"
        @blur="$v.title.$touch()"
        required
      ></v-text-field>
      <v-text-field
        label="Content"
        v-model="body"
        required
        multi-line
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit">submit</v-btn>
    </form>
  </v-flex>
</v-layout>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import config from '../../../config'

  export default {
    mixins: [validationMixin],
    validations: {
      title: { required, maxLength: maxLength(15) },
      body: { required }
    },
    data () {
      return {
        title: '',
        body: ''
      }
    },
    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.maxLength && errors.push('title must be at most 5 characters long')
        !this.$v.title.required && errors.push('title is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
        if (!this.$v.$error) {
          var apiUrl = config.apiHost + '/post/add'
          var data = {
            title: this.title,
            body: this.body,
            type_id: 1,
            user_id: 1
          }
          this.$http.post(apiUrl, data).then((response) => {
            console.log('response', response)
            this.sendNotification('post_created')
          }).catch((e) => {
            console.log('error: ', e)
          })
          console.log({'title': this.title, 'body': this.body})
        }
      },
      sendNotification (message) {
        setTimeout(() => {
          this.$router.push({path: '/admin/crud/posts', query: {message}})
        }, 1000)
      },
      clear () {
        console.log('clear...')
      }
    }

  }
</script>
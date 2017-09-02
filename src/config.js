// created le 2 sept 2017
// by kengres

let apiHost = ''

if (process.env.NODE_ENV === 'production') {
  apiHost = '/'
} else {
  apiHost = 'http://slimapp.dev/api'
}

const config = {
  apiHost
}
export default config

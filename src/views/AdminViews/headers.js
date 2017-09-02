const postHeaders = [
    { text: 'id', align: 'left', value: 'id' },
    { text: 'Title', align: 'left', value: 'title' },
    { text: 'Body', value: 'body', align: 'left', sortable: false },
    { text: 'Date', align: 'left', value: 'created_at' }
]
const userHeaders = [
    { text: 'id', align: 'left', value: 'id' },
    { text: 'Name', align: 'left', value: 'name' },
    { text: 'user Name', align: 'left', value: 'user_name' },
    { text: 'Date', align: 'left', value: 'created_at' }
]
const typeHeaders = [
    { text: 'id', align: 'left', value: 'id' },
    { text: 'Name', align: 'left', value: 'name' },
    { text: 'Date', align: 'left', value: 'created_at' }
]

const headers = {
  postHeaders,
  userHeaders,
  typeHeaders
}
export default headers

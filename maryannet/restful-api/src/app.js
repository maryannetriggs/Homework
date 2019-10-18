import axios from 'axios'

axios.get('/api/characters')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

console.log('HW')
import React from 'react'
import Axios from 'axios'
// import axios from 'axios'

class CharIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }

  componentDidMount() {
    axios.get('http://localhost:4000/api/characters')
    .then(res => this.setState({ characters: res.data }))
    .err(err => console.log(err))
  }

  render() {
    return (
      <div>

      </div>
    )
  }
  }
    

}

export default CharIndex
import React from 'react'
import axios from 'axios'

import CharCard from './CharCard'

class CharIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get('/api/characters')
      .then(res => this.setState({ characters: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.characters)
    return (
      <div className="comicStripImg">
        {this.state.characters.map(char => (
          <CharCard key={char._id} {...char}/>
        ))}
      </div>
    )
  }
}



export default CharIndex
import React from 'react'
import axios from 'axios'

class CharShow extends React.Component {
  constructor() {
    super()

    this.state = {
      char: []
    }
  }

  componentDidMount() {
    const charId = this.props.match.params.id
    axios.get(`/api/characters/${charId}`)
      .then(res => this.setState({ char: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { char } = this.state
    console.log(this.state)
    return (
      <div className="charWrapper">
        <div className="charItem">
          <div className="charText">
            <h2>{char.name}</h2>
            <h4>First appeared in issue: <strong>{char.firstIssue}</strong></h4>
            <h3>Pets</h3>
            <h4>{char.pets}</h4>
            <h3>Character Traits</h3>
            <h4>{char.traits}</h4>
          </div>
          <div className="charImg">
            <img src={char.image} />
          </div>
        </div>
      </div>
    )
  }
}

export default CharShow
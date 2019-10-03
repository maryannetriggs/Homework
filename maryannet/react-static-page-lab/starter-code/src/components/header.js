import React from 'react'
// import '././scss/style.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      image: '/assets/hero.jpg',
      title: 'Sargent Portraits of Artists & Friends',
      subtitle: 'by John Sergent'
    }
  }

  render() {
    const { image, title, subtitle } = this.state
    return (
      <header>
        <h1>The Metropolitan Museum of Art</h1>
        <h2>Exhibit</h2>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
      </header>
    )
  }
}

export default Header
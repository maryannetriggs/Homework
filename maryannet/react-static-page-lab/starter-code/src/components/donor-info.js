import React from 'react'

class DonorInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      contact: {
        email: 'development@metmuseum.org',
        phone: '212-650-2425'
      },
      amounts: [50, 100, 250, 500, 1000, 5000]
    }
  }

  render() {
    const { contact, amounts } = this.state
    return (
      <article className="donorInfo">
        <h2>Donor Information</h2>
        <h3>Contact:</h3>
        <p><a href="#">{contact.email}</a> • {contact.phone}</p>
        <h3>Donation Amounts:</h3>
        {amounts.map(info => (
          <p key={info.donations}>${info}</p>
        ))}

      </article>
    )
  }
}

export default DonorInfo
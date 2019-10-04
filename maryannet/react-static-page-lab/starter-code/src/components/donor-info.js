import React from 'react'

const DonorInfo = ({ contact, amounts }) => (
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


export default DonorInfo
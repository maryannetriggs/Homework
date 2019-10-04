import React from 'react'

const GeneralInfo = ({ hours, admissions }) => (
  <article className="generalInfo">
    <h2>General Info</h2>
    <h3>Hours:</h3>

    {hours.map(info => (
      <p key={info.day}>{info.day}: {info.times}</p>
    ))}

    <h3>Suggested Admission:</h3>
    {admissions.map(info => (
      <p key={info.admissions}>{info.type} - ${info.amount}</p>
    ))}
  </article>
)


export default GeneralInfo
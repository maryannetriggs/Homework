import React from 'react'

class GeneralInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      hours: [
        { day: 'Friday', times: '10.00am - 9.00pm' },
        { day: 'Saturday', times: '10.00am - 9.00pm' },
        { day: 'Sunday', times: '10.00am - 5.30pm' },
        { day: 'Monday', times: '10.00am - 5.50pm' },
        { day: 'Tuesday', times: '10.00am - 5.30pm' },
        { day: 'Wednesday', times: '10.00am - 5.30pm' },
        { day: 'Thursday', times: '10.00am - 5.30pm' }
      ],
      admissions: [
        { type: 'Adults', amount: 25 },
        { type: 'Seniors', amount: 17 },
        { type: 'Students', amount: 12 }
      ]
    }
  }

  render() {
    const { hours, admissions } = this.state
    return (
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
  }
}

export default GeneralInfo
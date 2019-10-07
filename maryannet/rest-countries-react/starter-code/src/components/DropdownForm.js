import React from 'react'

const DropdownForm = ({ handleChange }) => {
  return (
    <form className="dropdown-wrapper" onChange={handleChange}>
      <select >
        <option onChange={handleChange} value="All">All</option>
        <option onChange={handleChange} value="Africa">Africa</option>
        <option onChange={handleChange} value="Americas">Americas</option>
        <option onChange={handleChange} value="Asia">Asia</option>
        <option onChange={handleChange} value="Europe">Europe</option>
        <option onChange={handleChange} value="Oceania">Oceania</option>
      </select>
      <input placeholder="Search..."></input>
    </form>
  )
}

export default DropdownForm

import React from 'react'

const DropdownForm = ({ handleChange }) => {
  return (
    <form className="dropdown-wrapper" >
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <input placeholder="Search..."></input>
    </form>
  )
}

export default DropdownForm

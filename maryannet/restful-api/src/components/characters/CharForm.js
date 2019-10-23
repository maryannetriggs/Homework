// import React from 'react'

// const CharForm = ({ data, handleChange, handleSubmit, errors }) => (
//   <form onSubmit={handleSubmit}>
//     <div className="field">
//       <label className="label">Name</label>
//       <div className="control">
//         <input 
//           className={`input ${errors.name ? 'is-danger' : ''}`}
//           placeholder="Character Name"
//           name="name"
//           onChange={handleChange}
//           value={data.name}
//         />
//       </div>
//       {errors.name && <small className="help is-danger">{errors.name}</small>}
//     </div>

//     <div className="field">
//       <label className="label">Gender</label>
//       <div className="control">
//         <input 
//           className={`input ${errors.gender ? 'is-danger' : ''}`}
//           placeholder="Gender (male, female or mixed)"
//           name="gender"
//           onChange={handleChange}
//           value={data.gender}
//         />
//       </div>
//       {errors.gender && <small className="help is-danger">{errors.gender}</small>}
//     </div>

//     <div className="field">
//       <label className="label">First Issue</label>
//       <div className="control">
//         <input 
//           className={`input ${errors.firstIssue ? 'is-danger' : ''}`}
//           placeholder="First Issue Character Appeared In"
//           name="firstIssue"
//           onChange={handleChange}
//           value={data.firstIssue}
//         />
//       </div>
//       {errors.firstIssue && <small className="help is-danger">{errors.firstIssue}</small>}
//     </div>

//     <div className="field">
//       <label className="label">Pets</label>
//       <div className="control">
//         <input 
//           className="input"
//           placeholder="pets"
//           name="pets"
//           onChange={handleChange}
//           value={data.pets}
//         />
//       </div>
//       {errors.pets && <small className="help is-danger">{errors.pets}</small>}
//     </div>

//     <div className="field">
//       <label className="label">Character Traits</label>
//       <div className="control">
//         <input 
//           className={`input ${errors.traits ? 'is-danger' : ''}`}
//           placeholder="traits"
//           name="traits"
//           onChange={handleChange}
//           value={data.traits}
//         />
//       </div>
//       {errors.traits && <small className="help is-danger">{errors.traits}</small>}
//     </div>
    
//     <button type="submit" className="button is-info">Beano me up!</button>
//   </form>
// )

// export default CharForm
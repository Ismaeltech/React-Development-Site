import React from 'react'
import { Link } from 'react-router-dom'

const BusinessForm = ({ name, industry, location, proposal, deadline, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        name="name"
        onChange={handleChange}
        required
      />
      <label>Industry</label>
      <input
        placeholder="Industry"
        value={industry}
        name="industry"
        onChange={handleChange}
        required
      />

      <label>Location</label>
      <input
        placeholder="Location"
        value={location}
        name="location"
        onChange={handleChange}
        required
      />

      <label>Proposal</label>
      <textarea
        placeholder="Proposal"
        value={proposal}
        name="proposal"
        onChange={handleChange}
        required
      >
      </textarea>

      <label>Deadline</label>
      <input
        placeholder="Deadline"
        value={deadline}
        name="deadline"
        onChange={handleChange}
        required
      />

      <button className="button-form" type="submit">Submit</button>
      <Link to={cancelPath}>
        <button className="button-form">Cancel</button>
      </Link>
    </form>
  )
}
export default BusinessForm

import React from 'react'

const BusinessForm = ({ business, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Business Name</label>
    <input
      placeholder="Enter name"
      value={business.name}
      name="name"
      onChange={handleChange}
      required
    />
    <label>Industry</label>
    <input
      value={business.industry}
      name="industry"
      onChange={handleChange}
    />
    <label>Location</label>
    <input
      value={business.location}
      name="location"
      onChange={handleChange}
    />
    <label>Proposal</label>
    <input
      value={business.proposal}
      name="proposal"
      onChange={handleChange}
    />
    <label>Deadline</label>
    <input
      value={business.deadline}
      name="deadline"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <button>Edit</button>
  </form>
)
export default BusinessForm

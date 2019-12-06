import React from 'react'

const BusinessForm = ({ business, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <div className='wrap'>
      <div>
        <label className='business'>Business Name</label>
        <div>
          <input
            placeholder="Enter name"
            value={business.name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label className='business'>Industry</label>
        <div>
          <input
            value={business.industry}
            name="industry"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label className='business'>Location</label>
        <div>
          <input
            value={business.location}
            name="location"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label className='business'>Proposal</label>
        <div>
          <input
            value={business.proposal}
            name="proposal"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label className='business'>Deadline</label>
        <div>
          <input
            value={business.deadline}
            name="deadline"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button>Edit</button>
      </div>
    </div>
  </form>
)
export default BusinessForm

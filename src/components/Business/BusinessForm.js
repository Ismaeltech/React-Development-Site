import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const BusinessForm = ({ business, handleSubmit, handleChange }) => (
  <Form className='profile-form' onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Business name"
          value={business.name}
          name="name"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridIndustry">
        <Form.Label>Industry</Form.Label>
        <Form.Control
          placeholder="enter industry"
          value={business.industry}
          name="industry"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          placeholder="enter location"
          value={business.location}
          name="location"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridProposal">
        <Form.Label>Proposal</Form.Label>
        <Form.Control
          placeholder="enter proposal"
          value={business.proposal}
          name="proposal"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridDeadline">
        <Form.Label>Deadline</Form.Label>
        <Form.Control
          placeholder="enter deadline"
          value={business.deadline}
          name="deadline"
          onChange={handleChange}
        />
      </Form.Group>

    </Form.Row>
    <button type="submit">Submit</button>
    <Link to="/businesses">
      <button type="text">Cancel</button>
    </Link>
  </Form>
)
export default BusinessForm

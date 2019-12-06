import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
// import Layout from '../Header/Layout.js'
import BusinessForm from './BusinessForm.js'

class BusinessCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      business: {
        name: '',
        industry: '',
        location: '',
        proposal: '',
        deadline: ''
      },
      createdId: null,
      createdBusiness: null
    }
  }
  handleChange = event => {
    // Store the updated data in an object
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // Combine that object with the current state
    const editedBusiness = Object.assign(this.state.business, updatedField)
    // Set the state to the new object
    this.setState({ business: editedBusiness })
  }
  handleSubmit = event => {
    event.preventDefault()

    const { user } = this.props
    axios({
      url: `${apiUrl}/businesses`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        business: this.state.business
      }
    })
      .then(res => {
        this.setState({ createdId: res.data.business._id })
        axios(`${apiUrl}/businesses/${this.state.createdId}`)
          .then(res => {
            this.setState({ createdBusiness: res.data.business })
          })
          .catch(console.error)
      })
      .catch(console.error)
  }
  showBiz () {
    if (this.state.createdBusiness !== null) {
      console.log(this.state)
      return (
        <div>
          <h1>Most recent business made (User should have only one business at time</h1>
          <h3>Business Name: {this.state.createdBusiness.name}</h3>
          <p>Industry: {this.state.createdBusiness.industry}</p>
          <p>Location: {this.state.createdBusiness.location}</p>
          <p>Proposal: {this.state.createdBusiness.proposal}</p>
          <p>Deadline: {this.state.createdBusiness.deadline}</p>
          <button>Delete Profile</button>
          <button>Edit</button>
        </div>
      )
    }
  }
  render () {
    return (
      <div>
        <h3>Create Business Accounttt</h3>
        <BusinessForm
          business={this.state.business}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.showBiz()}
      </div>
    )
  }
}
export default withRouter(BusinessCreate)

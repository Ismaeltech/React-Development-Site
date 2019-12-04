import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
      createdId: null
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
    axios({
      url: `${apiUrl}/businesses`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        business: this.state.business
      }
    })
      .then(res => {
        this.setState({ createdId: res.data.business.id })
      })
      .catch(console.error)
  }
  render () {
    const { createdId } = this.state
    // const business = this.state.business
    // const createdId = this.state.createdId
    if (createdId) {
      return <Redirect to={`/businesses/${createdId}`}/>
    }
    return (
      <div>
        <h3>Create Business Account</h3>
        <BusinessForm
          business={this.state.business}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
export default BusinessCreate

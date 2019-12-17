import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import BusinessForm from './BusinessForm.js'

class BusinessCreate extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      industry: '',
      location: '',
      proposal: '',
      deadline: '',
      createdId: null
    }
  }

    handleChange = event => this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/businesses`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        business: {
          name: this.state.name,
          industry: this.state.industry,
          location: this.state.location,
          proposal: this.state.proposal,
          deadline: this.state.deadline
        }
      }
    })
      .then(response => this.setState({
        createdId: response.data.business._id
      }))
      .catch(console.error)
  }

  render () {
    const { createdId } = this.state
    if (createdId) {
      return <Redirect to={`/businesses/${createdId}`} />
    }
    return (
      <Fragment>
        <h1>Create!</h1>
        <BusinessForm
          name={this.state.name}
          industry={this.state.industry}
          location={this.state.location}
          proposal={this.state.proposal}
          deadline={this.state.deadline}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cancelPath={'/businesses'}
        />
      </Fragment>
    )
  }
}
export default withRouter(BusinessCreate)

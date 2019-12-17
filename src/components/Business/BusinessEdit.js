import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig.js'
import BusinessForm from './BusinessForm.js'

class BusinessEdit extends Component {
  constructor () {
    super()

    this.state = {
      business: null
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/businesses/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ business: res.data.business }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const businessEdit = Object.assign(this.state.business, updatedField)

    this.setState({ business: businessEdit })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/businesses/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { business: this.state.business }
    })
      .then((response) => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { updated, business } = this.state
    const { handleChange, handleSubmit } = this

    if (!business) {
      return <p>Loading...</p>
    }

    if (updated) {
      return <Redirect to={'/businesses/'} />
    }
    console.log(business)

    return (
      <Fragment>
        <h1>Update Business</h1>
        <BusinessForm
          name={business.name}
          industry={business.industry}
          location={business.location}
          proposal={business.proposal}
          deadline={business.deadline}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={'/businesses'}
        />
      </Fragment>
    )
  }
}

export default withRouter(BusinessEdit)

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig.js'
import BusinessForm from './BusinessForm.js'

class BusinessEdit extends Component {
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
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/businesses/${this.props.match.params.id}`)
      .then(res =>
        this.setState({ business: res.data.business }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedBusiness = Object.assign(this.state.business, updatedField)

    this.setState({ business: editedBusiness })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/businesses/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { business: this.state.business }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { business, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/businesses/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <BusinessForm
          business={business}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/businesses/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default BusinessEdit

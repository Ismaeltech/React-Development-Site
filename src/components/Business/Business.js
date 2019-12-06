import React, { Component } from 'react'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'

class Business extends Component {
  constructor (props) {
    super(props)

    this.state = {
      business: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/businesses/${this.props.createdBusiness}`)
      .then(res => {
        this.setState({ business: res.data.business })
        console.log(this.state)
      })
      .catch(console.error)
  }

  render () {
    return (
      <div className='wrap'>
        <h2>Most recent business made</h2>
        <h3>Business Name: {this.state.business.name}</h3>
        <p>Industry: {this.state.business.industry}</p>
        <p>Location: {this.state.business.location}</p>
        <p>Proposal: {this.state.business.proposal}</p>
        <p>Deadline: {this.state.business.deadline}</p>
        <button>Delete Profile</button>
        <button>Edit</button>
      </div>
    )
  }
}

export default Business

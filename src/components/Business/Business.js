import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import Layout from '../Header/Layout.js'

class Business extends Component {
  constructor () {
    super()

    this.state = {
      business: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/businesses/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ business: res.data.business })
      })
      .catch(console.error)
  }

  onDeleteBusiness = (event) => {
    axios.delete(`${apiUrl}/businesses/${this.props.match.params.id}`)
      .then(res => {
        console.log(res)
        this.setState({ deleted: true })
      })
      .catch(console.error)
  }

  render () {
    const { business, deleted } = this.setState

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Business succesfully deleted!' } }
      }/>
    }
    return (
      <Layout>
        <h3>Business Name: {business.name}</h3>
        <p>Industry: {business.industry}</p>
        <p>Location: {business.location}</p>
        <p>Proposal: {business.proposal}</p>
        <p>Deadline: {business.deadline}</p>
        <button onClick={this.onDeleteBusiness}>Delete Profile</button>
        <Link to={`/businesses/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/businesses">Back</Link>
      </Layout>
    )
  }
}

export default Business

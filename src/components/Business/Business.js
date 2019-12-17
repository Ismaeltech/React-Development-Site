import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Business extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      business: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/businesses/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(responseData => this.setState({ business: responseData.data.business }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/businesses/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { business, deleted } = this.state

    if (!business) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/businesses', state: { msg: 'Profile succesfully deleted!' } }
      } />
    }

    return (
      <React.Fragment>
        <div className="one-business">
          <h4>{business.name}</h4>
          <h5>Industry: {business.industry}</h5>
          <h5>Location: {business.location}</h5>
          <h5>Proposal: {business.proposal}</h5>
          <h5>Deadline: {business.deadline}</h5>
          <button onClick={this.destroy}>Delete Business</button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Business)

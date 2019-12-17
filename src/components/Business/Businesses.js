import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

class Businesses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      businesses: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/businesses`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ businesses: res.data.business }))
      .catch(console.error)
  }

  render () {

    const businesses = this.state.businesses.map(business => (
      <Link to={`/businesses/${business._id}`} key={business._id}>
        <button className="businesses">{business.name}: {business.industry}</button>
      </Link>
    ))

    return (
      <Fragment>
        <h1>Business</h1>
        <Link to="/create-profile"> Create Business</Link>
        <div>
          {businesses}
        </div>
      </Fragment>
    )
  }
}

export default Businesses

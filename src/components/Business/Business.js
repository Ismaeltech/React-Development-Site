import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Business = props => {
  const [business, setBusiness] = useState(null)
  const userId = props.user.id

  useEffect(() => {
    axios({ url: `${apiUrl}/businesses/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setBusiness(res.data.business))
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/businesses/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'business deleted ', variant: 'warning' })
        props.history.push('/businesses')
      })
  }

  if (!business) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h4>{business.name}</h4>
      <h5>Industry: {business.industry}</h5>
      <h5>Location: {business.location}</h5>
      <h5>Proposal: {business.proposal}</h5>
      <h5>Deadline: {business.deadline}</h5>
      {userId === business.user.id && <button onClick={handleDelete}>Delete</button>}
      <Link to={`/businesses/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/businesses">
        <button type="text">My Businesses</button>
      </Link>
    </div>
  )
}

export default withRouter(Business)

import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig.js'
import BusinessForm from './BusinessForm.js'

const BusinessEdit = props => {
  const [business, setBusiness] = useState({ name: '',
    industry: '',
    location: '',
    proposal: '',
    deadline: '' })

  const [edited, setEdited] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/businesses/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setBusiness(res.data.business))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setBusiness(business => ({ ...business, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/businesses/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${props.user.token}`
      },
      data: { business }
    })
      .then(res => setEdited(true))
      .catch(console.error)
  }

  if (edited) {
    return <Redirect to={`/businesses/${props.match.params.id}`} />
  }

  return (
    <BusinessForm
      business={business}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/businesses/${props.match.params.id}`}
    />
  )
}

export default withRouter(BusinessEdit)

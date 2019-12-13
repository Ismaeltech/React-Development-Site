import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import BusinessForm from './BusinessForm.js'

const BusinessCreate = props => {
  const [business, setBusiness] = useState({ name: '', industry: '', location: '', proposal: '', deadline: '' })

  const handleChange = event => {
    event.persist()
    setBusiness({ ...business, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/businesses`,
      method: 'POST',
      headers: {
        Authorization: `Token token=${props.user.token}`
      },
      data: { business }
    })
      .then(response =>
        props.history.push(`businesses/${response.data.business.id}`)
      )
      .catch(console.error)
  }
  return (
    <BusinessForm
      business={business}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath="/"
    />
  )
}
export default withRouter(BusinessCreate)

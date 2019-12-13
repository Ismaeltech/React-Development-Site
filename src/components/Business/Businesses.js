import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const Businesses = props => {
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/businesses`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        setBusinesses(response.data.businesses)
      })
      .then(() => props.alert({ heading: 'Success', message: 'All your businesses', variant: 'success' }))
      .catch(console.error)
  }, [])
  const businessesJsx = businesses.map(business => (
    <ListGroup.Item key={business.id}>
      <Nav.Link href={`#create-profile/${business.id}`}>{business.name}</Nav.Link>
    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Business</h1>
      <Link to="/create-profile"><button>Add New Business</button></Link>
      <ListGroup variant="flush">
        <ListGroup.Item action variant="info">
          {businessesJsx}
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Businesses

import React from 'react'

const Layout = (props) => (
  <div>
    <h1>Welcome to LoboTeck</h1>
    <p>Modernizing and Monetizing your business to new heights!</p>
    {props.children}
  </div>
)

export default Layout

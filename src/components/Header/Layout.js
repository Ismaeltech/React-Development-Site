import React from 'react'

const Layout = (props) => (
  <div className='welcome-message'>
    <h1>Welcome to LoboTeck</h1>
    <p className='welcome-p'>Modernizing and Monetizing your business to new heights!</p>
    {props.children}
  </div>
)

export default Layout

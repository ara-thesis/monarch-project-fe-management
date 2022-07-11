import React from 'react'
import { Col, Navbar, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logout from './Logout'

function NavigationB() {
  return (<div>
    <Navbar
      bg="light"
      expand="lg"
      style={{ width: '90%', position: 'fixed' }}>
      <Navbar.Brand href="/Dashboard">
        Travelia
      </Navbar.Brand>

      
      <Logout />

      <Navbar.Collapse id="basic-navbar-nav" />
    </Navbar>
  </div>)
}

export default NavigationB

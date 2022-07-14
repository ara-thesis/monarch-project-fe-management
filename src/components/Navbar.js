import React from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logout from './Logout'

function NavigationB() {
  return (<div>
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ width: '100%', padding: '12px' }}>
      <Container>
      <Navbar.Brand href="/Dashboard">
        Jalanria
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Logout />
        </Navbar.Collapse>
      </Container>
    
      
      
    </Navbar>
  </div>)
}

export default NavigationB

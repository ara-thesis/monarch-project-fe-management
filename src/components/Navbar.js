import React, { useEffect, useState } from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logout from './Logout'
import { GetToken } from '../helper/TokenHelper'
import { ApiConnect } from '../helper/ApiConnect'

function NavigationB() {

  const [isLogedin, setIsLogedin] = useState()
  const [username, setUsername] = useState()

  const fetchUserInfo = async () => {
    const fetchApi = await ApiConnect(GetToken).get('/auth/me')
    const respData = fetchApi.data.data[0]
    setUsername(respData.username)
  }

  useEffect(() => {
    if (GetToken !== '') {
      fetchUserInfo()
      setIsLogedin(true)
    }
    else setIsLogedin(false)
  })

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
        {isLogedin && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="">{username}</a>
            </Navbar.Text>
            <Logout />
          </Navbar.Collapse>
        )}
      </Container>



    </Navbar>
  </div>)
}

export default NavigationB

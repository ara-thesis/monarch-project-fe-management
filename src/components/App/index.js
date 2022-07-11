import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import "../AppBody.css"

import NavigationB from '../Navbar'
import Login from '../Login'
// Import Dashboard from '../Dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import DB from '../../pages/Dashboard'
import PlaceInfo from '../Placeinfo'
import News from '../News'
import Banner from '../Banner'
import Ticketing from '../../components/Ticketing'
import Layout from '../Layout'

function App() {
  const [
    isAuthenticated,
    setIsAuthenticated
  ] = useState(false)

  useEffect(
    () => {
      if (localStorage.getItem('token') === '') {
        setIsAuthenticated(false)
      } else {
        setIsAuthenticated(true)
      }
    },
    []
  )

  return (

    <div className="App">

      <Container>
        <NavigationB />
      </Container>

      <div className='App-Body'>
        {!isAuthenticated ? (
          <div>
            <BrowserRouter>
              <Route
              component={Login}
              exact
              path='/Login'/>
            </BrowserRouter>
          </div>
        ) : (
          <BrowserRouter>
            <Route render={(props) => (
              <Layout {...props}>
                <Switch>

                  <Route
                    component={DB}
                    exact
                    path="/Dashboard"
                  />

                  <Route
                    component={PlaceInfo}
                    path="/PlaceInfo"
                  />

                  <Route
                    component={Banner}
                    path="/Banner"
                  />

                  <News setIsAuthenticated={setIsAuthenticated} />

                  <Route
                    component={News}
                    path="/news"
                  />

                  <Route
                    component={Ticketing}
                    path="/Ticketing"
                  />

                  <Redirect to='/Dashboard' />
                </Switch>
              </Layout>
            )}
            />
          </BrowserRouter>
        )};
      </div>


    </div>

  )
}

export default App

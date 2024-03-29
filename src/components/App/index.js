import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import "../AppBody.css"

import NavigationB from '../Navbar'
import Login from '../Login'
// Import Dashboard from '../Dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import PlaceInfo from '../Placeinfo'
import News from '../News'
import Banner from '../Banner'
import Ticketing from '../Ticketing'
import Payconf from '../PaymentConf'
import Layout from '../Layout'

function App() {
  const [
    isAuthenticated,
    setIsAuthenticated
  ] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') === '') {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
    }
  }, [])

  return (

    <div className="App">
      
      <NavigationB />

      <div className='App-Body'>
        {!isAuthenticated ? (
          <div>
            <BrowserRouter>
              <Route
                component={Login}
                exact
                path='/Login' />
              <Redirect to='/Login' />
            </BrowserRouter>
          </div>
        ) : (
          <BrowserRouter>
            <Route render={(props) => (
              <Layout {...props}>
                <Switch>
                  <Route
                    component={Dashboard}
                    exact
                    path="/Dashboard" />
                  <Route
                    component={PlaceInfo}
                    path="/PlaceInfo" />
                  <Route
                    component={Banner}
                    path="/Banner" />
                  <Route
                    component={News}
                    path="/news" />
                  <Route
                    component={Ticketing}
                    path="/Ticketing" />
                  <Route
                    component={Payconf}
                    path='/Payconfm' />
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

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,} from'react-bootstrap';
import NavigationB from '../Navbar'


import Login from '../Login';
// import Dashboard from '../Dashboard';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DB from '../../pages/Dashboard'
import PlaceInfo from '../../pages/PlaceInfo'
import News from '../News'
import Ticketing from '../../components/Ticketing'
import Banner from '../../pages/Banner'
import Layout from '../Layout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (

    <div className="App">
    <Container>
      <NavigationB  />
    </Container>
    <header className="App-header">

  <>
  <BrowserRouter>
          <Route render={(props)=>(
              <Layout {...props}>
                  <Switch>
                  {/* <Route path={'/NewsAdd'} component={NewsAdd}/> */}
                      <Route path="/Dashboard" exact component={DB}/>
                      <Route path="/PlaceInfo" component={PlaceInfo}/>
                      <Route path="/Banner" component={Banner}/>

                      {isAuthenticated ? (
                      <News setIsAuthenticated={setIsAuthenticated} />
                      ) : (
                      <Login setIsAuthenticated={setIsAuthenticated} />
                      )};
                      <Route path="/News" component={News} />
                      <Route path="/Ticketing" component={Ticketing}/>
                  </Switch>
              </Layout>
          )}/>
      </BrowserRouter>
  </>
    </header>
  </div>

    
    
  );
};

export default App;

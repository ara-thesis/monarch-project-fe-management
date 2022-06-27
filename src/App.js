import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Ticketing from './pages/Ticketing';
import PlaceInfo from './pages/PlaceInfo';
import News from './pages/News';
import Banner from './pages/Banner';
import NewsAdd from './pages/NewsAdd';
import NotFound from "./pages/NotFound";
import NavigationB from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,} from'react-bootstrap';
import Layout from "./components/Layout";

function App() {
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
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/Dashboard" exact component={Dashboard}/>
                        <Route path="/PlaceInfo" component={PlaceInfo}/>
                        <Route path="/News" component={News}/>
                        <Route path="/Ticketing" component={Ticketing}/>
                        <Route path="/Banner" component={Banner}/>
                        <Route path={'/NewsAdd'} component={NewsAdd}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
                
            )}/>
        </BrowserRouter>
        
    </>
      </header>

    </div>

    
  );
}

export default App;

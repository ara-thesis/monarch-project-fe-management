import React from 'react';
import './App.css';
import Navbar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Ticketing from './pages/Ticketing';
import PlaceInfo from './pages/PlaceInfo';
import News from './pages/News';
import Banner from './pages/Banner';
import NewsAdd from './pages/NewsAdd';
import NavigationB from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,} from'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationB  />
      </Container>
      <header className="App-header">

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/Dashboard' exact component={Dashboard} />
          <Route path='/PlaceInfo' component={PlaceInfo} />
          <Route path='/Ticketing' component={Ticketing} />
          <Route path='/News'    component={News} />
          <Route path={'/Banner'}  component={Banner}/>
        </Switch>
          <Route path={'/NewsAdd'} component={NewsAdd}/>
      </Router>
    </>
      </header>

    </div>

    
  );
}

export default App;

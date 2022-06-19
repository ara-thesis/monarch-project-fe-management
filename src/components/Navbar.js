import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

const NavigationB = () => {
    return(        
        <div>
        <Navbar bg="light" expand="lg">        
          <Navbar.Brand href="/Dashboard">JakSign</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <div style={{ textAlign:'center',  float:'right'}}>
            <Row>
              {/* <Col>
                <Login />
              </Col> */}
              <Col>
                <Login />
                {/* <Register /> */}
              </Col>
              </Row>
              </div>  
      </Navbar>        
        </div>
    );
}

export default NavigationB;
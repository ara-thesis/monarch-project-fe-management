import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationB = () => {
    return(        
        <div>
        <Navbar bg="light" expand="lg">        
          <Navbar.Brand href="/Dashboard">Travelia</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <div style={{ textAlign:'center',  float:'right'}}>
            <Row>
              {/* <Col>
                <Login />
              </Col> */}
              <Col>
                {/* <Register /> */}
              </Col>
              </Row>
              </div>  
      </Navbar>        
        </div>

        
    );
}

export default NavigationB;
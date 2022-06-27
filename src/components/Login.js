import React, { useState } from 'react';
import '../App.css';
import { Button, Modal, Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactDOM } from 'react';
import { Link } from "react-router-dom";
import Register from './Register';

class Login extends React.Component {
  
  constructor(){
    super();
    this.state={
        show:false
    }
}
handleModal(){
    this.setState({show:!this.state.show})
}
render(){
    return(
        <div>                
            <div className="modalClass">
                <Button onClick={()=>this.handleModal()}>Sign In</Button>
            </div>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
            <Modal.Header closeButton>You can sign in here</Modal.Header>
            <Modal.Body>
            <Form>
              <Row>
                <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder="Example@gmail.com"></Form.Control>
                  <Form.Text className='text-muted'>We'll never share your email address, believe in us</Form.Text>
                </Form.Group>
                </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder="********"></Form.Control>
                  <Form.Text className='text-muted'>You better believe us will never share your password</Form.Text>
                </Form.Group>
              </Col>
              </Row>              
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>this.handleModal}>Login</Button>
                <Button onClick={()=>this.handleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
}

export default Login;
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard () {
    return(
        <>
        <h4 style={{textAlign: 'center'}}>Income</h4>
        <br />
        <Row>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem', height: '200rem'}}>
          <Card.Body>
            <Card.Title>Total Earnings</Card.Title>
            <Card.Text style={{fontSize: '22px', textAlign: 'center'}}>
            Rp. 999999999
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '24rem'}}>
          <Card.Body>
            <Card.Title>Ticket Sold Today</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            100
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </>
    );
}

export default Dashboard;

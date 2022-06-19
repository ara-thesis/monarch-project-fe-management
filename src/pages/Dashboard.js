import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard () {
    return(
        <>
        <h4 style={{textAlign: 'center'}}>Income</h4>
        <br />
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Total earnings</Card.Title>
      <Card.Text>
       Rp.9999999{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Ticket sold today</Card.Title>
      <Card.Text>
        1000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
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

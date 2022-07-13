import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'

function Ticketing() {
  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        Income
      </h4>

      <br />

      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>
              Total earnings
            </Card.Title>

            <Card.Text>
              Rp.9999999
              {' '}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>
              Ticket sold today
            </Card.Title>

            <Card.Text>
              1000
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>
              Total ticket sold
            </Card.Title>

            <Card.Text>
              1000
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  )
}

export default Ticketing

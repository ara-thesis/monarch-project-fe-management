import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
// Import Add from './Add';

function TableTicketDashboard({ apiTicket }) {
  const [ticketList = [], ticketListHook] = useState()

  const fetchProcess = async () => {
    try {
      const resp = await apiTicket.get('/ticket/list/admin')
      if (resp.data.data[0] !== null) {
        ticketListHook(resp.data.data)
      }
      else ticketListHook([])
    } catch (error) {
      console.log(error)
    }
  }

  const formatter = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: null
    }
  )

  useEffect(() => {
    fetchProcess()
  }, [apiTicket, ticketList])

  return (
    <div className='TicketDashboard'>
      <h3>
        Ticket Income
      </h3>
      <br />
      <CardGroup>
        <Card>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              Total earnings
            </Card.Title>
            <Card.Text>
              Rp.9999999
              {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: 'center' }}>
            <Button>
              Request Withdraw
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              Total ticket sold
            </Card.Title>
            <Card.Text>
              1000
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: 'center' }}>
            <Button>
              Redeem
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      <br />
    </div>
  )
}

export default TableTicketDashboard

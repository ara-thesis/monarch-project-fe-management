import React, { useCallback, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import Swal from 'sweetalert2'

function TableTicketDashboard({ apiTicket, setIsRedeem }) {
  const [totalEarning, setTotalEarnings] = useState(0)
  const [totalSold, setTotalSold] = useState(0)

  const fetchProcess = useCallback(async () => {
    try {
      const resp = await apiTicket.get('/ticket/list/admin')
      if (resp.data.data[0] !== null) {
        setTotalEarnings(resp.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [apiTicket])


  const formatter = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: null
    }
  )

  // useEffect(() => {
  //   fetchProcess()
  // }, [fetchProcess])

  return (
    <div className='TicketDashboard'>
      <CardGroup>
        <Card style={{width: '1000px', height: '125px'}}>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              Total earnings
            </Card.Title>
            <Card.Text>
              {formatter.format(totalEarning)}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              Total ticket sold
            </Card.Title>
            <Card.Text>
              {totalSold}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              Total review
            </Card.Title>
            <Card.Text>
              {totalSold}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>
              User rating
            </Card.Title>
            <Card.Text>
              {totalSold}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
    </div>
  )
}

export default TableTicketDashboard

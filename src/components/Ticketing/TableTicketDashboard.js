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

  const requestWithdraw = async () => {
    // const resp = await apiTicket.get('')
    Swal.fire({
      icon: 'success',
      title: 'Request sent',
      text: `Withdrawal request has been sent.`,
      showConfirmButton: false,
      timer: 2000
    })
  }

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
              {formatter.format(totalEarning)}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: 'center' }}>
            <Button
            onClick={() => {
              requestWithdraw()
            }}>
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
              {totalSold}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: 'center' }}>
            <Button
              onClick={() => {
                setIsRedeem(true)
              }}>
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

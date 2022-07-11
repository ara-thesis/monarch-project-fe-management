import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'

import Header from './Header'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'

import { ticketData } from '../../data/ticket-data'

function Dashboard({ setIsAuthenticated }) {
  const [
    ticket,
    setTicket
  ] = useState(ticketData)
  const [
    selectedEmployee,
    setSelectedEmployee
  ] = useState(null)
  const [
    isAdding,
    setIsAdding
  ] = useState(false)
  const [
    isEditing,
    setIsEditing
  ] = useState(false)

  useEffect(
    () => {
      const data = JSON.parse(localStorage.getItem('employees_data'))
      if (data !== null && Object.keys(data).length !== 0) setTicket(data)
    },
    []
  )

  const handleEdit = (id) => {
    const [EditTicket] = ticket.filter((news) => EditTicket.id === id)

    setSelectedEmployee(EditTicket)
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.value) {
        const [EditTicket] = ticket.filter((EditTicket) => EditTicket.id === id)

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${EditTicket.title}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500
        })

        const ticketCopy = ticket.filter((EditTicket) => EditTicket.id !== id)
        localStorage.setItem(
          'employees_data',
          JSON.stringify(ticketCopy)
        )
        setTicket(ticketCopy)
      }
    })
  }

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />

          <Table
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            ticket={ticket}
          />
        </>
      )}

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

      {isAdding
        ? <Add
          setIsAdding={setIsAdding}
          setTicket={setTicket}
          ticket={ticket}
        />
        : null}

      {isEditing
        ? <Edit
          selectedEmployee={selectedEmployee}
          setIsEditing={setIsEditing}
          setTicket={setTicket}
          ticket={ticket}
        />
        : null}
    </div>
  )
}

export default Dashboard

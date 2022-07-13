import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import axios from 'axios'

import Header from './Header'
import TableTicketList from './TableTicketList'
import TableTicketDashboard from './TableTicketDashboard'
import Add from './Add'
import Edit from './Edit'

import { ticketData } from '../../data/ticket-data'

function TicketDashboard() {
  const [ticket, setTicket] = useState(ticketData)
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(true)

  const apiTicket = axios.create({
    baseURL: 'http://172.22.56.135:8000/api',
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  const handleEdit = (id) => {
    const [EditTicket] = ticket.filter((news) => EditTicket.id === id)
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

      {!isAuthorized && (
        <h3>
          ACCESS UNAUTHORIZED
        </h3>
      )}

      {isAuthorized && !isAdding && !isEditing && (
        <>
          <TableTicketDashboard
            apiTicket={apiTicket} />
          <Header
            setIsAdding={setIsAdding} />
          <TableTicketList
            apiTicket={apiTicket}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setIsAuthorized={setIsAuthorized} />
        </>
      )}

      {isAuthorized && isAdding && (
        <Add
          setIsAdding={setIsAdding}
          setTicket={setTicket}
          ticket={ticket} />
      )}

      {isAuthorized && isEditing && (
        <Edit
          setIsEditing={setIsEditing}
          setTicket={setTicket}
          ticket={ticket} />
      )}
    </div>
  )
}

export default TicketDashboard

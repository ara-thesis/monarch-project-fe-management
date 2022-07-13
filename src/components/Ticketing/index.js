import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Header'
import TableTicketList from './TableTicketList'
import TableTicketDashboard from './TableTicketDashboard'
import Add from './Add'
import Edit from './Edit'
// import Redeem from './redeem'


function TicketDashboard() {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(true)
  const [currData, setCurrData] = useState()

  const apiTicket = axios.create({
    baseURL: 'http://172.22.56.135:8000/api',
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  const handleEdit = (id) => {
    // const [EditTicket] = ticket.filter((news) => EditTicket.id === id)
    
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
            setIsEditing={setIsEditing}
            setCurrData={setCurrData}
            setIsAuthorized={setIsAuthorized} />
        </>
      )}

      {isAuthorized && isAdding && (
        <Add
          apiTicket={apiTicket}
          setIsAdding={setIsAdding} />
      )}

      {isAuthorized && isEditing && (
        <Edit
          apiTicket={apiTicket}
          setIsEditing={setIsEditing}
          currData={currData} />
      )}
    </div>
  )
}

export default TicketDashboard

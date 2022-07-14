import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Header'
import TableTicketList from './TableTicketList'
import TableTicketDashboard from './TableTicketDashboard'
import Add from './Add'
import Edit from './Edit'
import Redeem from './Redeem'


function TicketDashboard() {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isRedeem, setIsRedeem] = useState(false)
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

  return (
    <div className="container">
      {!isAuthorized && (
        <h3>
          ACCESS UNAUTHORIZED
        </h3>
      )}

      {isAuthorized && !isAdding && !isEditing && !isRedeem && (
        <>
          <TableTicketDashboard
            apiTicket={apiTicket}
            setIsRedeem={setIsRedeem} />
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

      {isAuthorized && isRedeem && (
        <Redeem
          apiTicket={apiTicket}
          setIsRedeem={setIsRedeem} />
      )}
    </div>
  )
}

export default TicketDashboard

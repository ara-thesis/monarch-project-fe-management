import React, { useEffect, useState } from 'react'
import axios from 'axios'

import TableTicketDashboard from './PlaceManagerDashboard'


function MainDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(true)

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

      {isAuthorized && (
        <>
          <h3>
            Home Dashboard
          </h3>
          <br />
          <TableTicketDashboard
            apiTicket={apiTicket} />
        </>

      )}

    </div>
  )
}

export default MainDashboard

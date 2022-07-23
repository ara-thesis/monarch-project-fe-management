import React, { useEffect, useState } from 'react'
import { ApiConnect } from '../../helper/ApiConnect'
import { GetToken } from '../../helper/TokenHelper'

import TableTicketDashboard from './PlaceManagerDashboard'


function MainDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(true)

  const apiTicket = ApiConnect(GetToken)

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

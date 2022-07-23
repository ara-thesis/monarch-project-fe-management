import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ApiConnect } from '../../helper/ApiConnect'
import { GetToken } from '../../helper/TokenHelper'

import Header from './Header'
import Table from './Table'
import Edit from './Edit'

function PayConfmDashboard() {
  const [isEditing, setIsEditing] = useState(false)
  const [currData, setCurrData] = useState()
  const [isAuthorized, setIsAuthorized] = useState(true)

  const apiPayment = ApiConnect(GetToken)

  return (
    <div className="container">

      {!isAuthorized && (
        <h3>
          ACCESS UNAUTHORIZED
        </h3>
      )}

      {isAuthorized && !isEditing && (
        <>
          <Header />
          <Table
            apiPayment={apiPayment}
            setCurrData={setCurrData}
            setIsEditing={setIsEditing}
            setIsAuthorized={setIsAuthorized} />
        </>
      )}

      {isAuthorized && isEditing && (
        <Edit
          apiPayment={apiPayment}
          currData={currData}
          setIsEditing={setIsEditing} />
      )}
    </div>
  )
}

export default PayConfmDashboard

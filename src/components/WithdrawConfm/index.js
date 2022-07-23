import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ApiConnect } from '../../helper/ApiConnect'
import { GetToken } from '../../helper/TokenHelper'

import Header from './Header'
import Table from './Table'
import Edit from './Edit'

function WithdrawConfmDashboard() {
  const [isEditing, setIsEditing] = useState(false)
  const [currData, setCurrData] = useState()
  const [isAuthorized, setIsAuthorized] = useState(true)

  const apiNews = ApiConnect(GetToken)
  
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
        apiNews.delete(`news/${id}`).then((resp) => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'data has been deleted.',
            showConfirmButton: false,
            timer: 1500
          })
        })
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

      {isAuthorized && !isEditing && (
        <>
          <Header />
          <Table
            apiNews={apiNews}
            setCurrData={setCurrData}
            setIsEditing={setIsEditing}
            setIsAuthorized={setIsAuthorized} />
        </>
      )}

      {isAuthorized && isEditing && (
        <Edit
          apiNews={apiNews}
          currData={currData}
          setIsEditing={setIsEditing} />
      )}
    </div>
  )
}

export default WithdrawConfmDashboard

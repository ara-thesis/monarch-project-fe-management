import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

import Header from './Header'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'

function NewsDashboard() {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currData, setCurrData] = useState()
  const [isAuthorized, setIsAuthorized] = useState(true)

  const apiNews = axios.create({
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
        <h3>ACCESS UNAUTHORIZED</h3>
      )}

      {isAuthorized && !isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding} />
          <Table
            apiNews={apiNews}
            setCurrData={setCurrData}
            setIsEditing={setIsEditing}
            setIsAuthorized={setIsAuthorized}/>
        </>
      )}

      {isAuthorized && isAdding && (
        <Add
          apiNews={apiNews}
          setIsAdding={setIsAdding} />
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

export default NewsDashboard

import React, { useState } from 'react'
import axios from 'axios'

import Header from './Header'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'

function BannerDashboard() {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currData, setCurrData] = useState()

  const apiBanner = axios.create({
    baseURL: 'http://172.22.56.135:8000/api',
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })


  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
          />

          <Table
            apiBanner={apiBanner}
            setCurrData={setCurrData}
            setIsEditing={setIsEditing}
          />
        </>
      )}

      {isAdding
        ? <Add
          apiBanner={apiBanner}
          setIsAdding={setIsAdding}
        />
        : null}

      {isEditing
        ? <Edit
          apiBanner={apiBanner}
          currData={currData}
          setIsEditing={setIsEditing}
        />
        : null}
    </div>
  )
}

export default BannerDashboard

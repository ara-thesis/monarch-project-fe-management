import React, { useState } from 'react'
import { ApiConnect } from '../../helper/ApiConnect'
import { GetToken } from '../../helper/TokenHelper'

import Header from './Header'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'

function BannerDashboard() {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currData, setCurrData] = useState()

  const apiBanner = ApiConnect(GetToken)

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

import React, { useCallback, useEffect, useState } from 'react'

function Table({ apiPayment, setIsEditing, setCurrData, setIsAuthorized }) {
  // Let newsList = [];
  const [newsList = [], newsListHook] = useState()
  const [isUpdated, setIsUpdated] = useState(true)

  const fetchProcess = useCallback(async () => {
    try {
      const resp = await apiPayment.get('/payment')
      if (resp.data.data[0] !== null) newsListHook(resp.data.data)
      else newsListHook([])
      setIsAuthorized(true)
    } catch (err) {
      if (err.request.status === 403) {
        setIsAuthorized(false)
      }
    }
    setIsUpdated(false)
  }, [apiPayment, setIsAuthorized])

  useEffect(() => {

    fetchProcess()
  }, [apiPayment, fetchProcess, newsList]
  )

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Payment Id
            </th>
            <th>
              Date Created
            </th>
            <th
              className="text-center"
              colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {newsList.length > 0 ? (
            newsList.map((PaymentData, i) => (
              <tr key={PaymentData.id}>
                <td>
                  {i + 1}
                </td>
                <td>
                  {PaymentData.id}
                </td>
                <td>
                  {PaymentData.created_at}
                </td>

                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      setIsEditing(true)
                      setCurrData(PaymentData)
                    }}>
                    Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                No payment confirmation request
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table

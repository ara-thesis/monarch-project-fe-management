import React, { useEffect, useState } from 'react'
// Import Add from './Add';

// Const Table = ({ news, handleEdit, handleDelete }) => {
function Table({ apiNews, setIsEditing, setCurrData, setIsAuthorized }) {
  // Let newsList = [];
  const [newsList = [], newsListHook] = useState()
  const [isUpdated, setIsUpdated] = useState(true)

  const fetchProcess = async () => {
    try {
      const resp = await apiNews.get('/payment')
      if (resp.data.data[0] !== null) newsListHook(resp.data.data)
      else newsListHook([])
      setIsAuthorized(true)
    } catch (err) {
      if (err.request.status === 403) {
        setIsAuthorized(false)
      }
    }
    setIsUpdated(false)
  }

  useEffect(() => {

    fetchProcess()
  }, [apiNews, newsList]
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
              Name
            </th>
            <th>
              Total Price
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
            newsList.map((EditNews, i) => (
              <tr key={EditNews.id}>
                <td>
                  {i + 1}
                </td>
                <td>
                  {EditNews.total_price}
                </td>
                <td>
                  {EditNews.created_at}
                </td>

                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      setIsEditing(true)
                      setCurrData(EditNews)
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

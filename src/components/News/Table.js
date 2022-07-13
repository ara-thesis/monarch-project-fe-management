import React, { useCallback, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Table({ apiNews, setIsEditing, setCurrData, setIsAuthorized }) {
  const [newsList = [], newsListHook] = useState()
  // const [isUpdated, setIsUpdated] = useState(true)
  const [fetchTrigger, setFetchTrigger] = useState(0)

  const fetchProcess = useCallback(async () => {
    try {
      const resp = await apiNews.get('/news/list/admin')
      if (resp.data.data[0] !== null) newsListHook(resp.data.data)
      else newsListHook([])
    } catch (err) {
      if (err.request.status === 403) {
        setIsAuthorized(false)
      }
    }
    setFetchTrigger(num => num + 1)
  }, [apiNews, setIsAuthorized])

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
          setFetchTrigger(0)
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

  useEffect(() => {
    if (fetchTrigger < 3) {
      console.log("re-render result")
      fetchProcess()
    }
  }, [fetchProcess, fetchTrigger])

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Title
            </th>
            <th>
              Status
            </th>
            <th
              className="text-center"
              colSpan={2} >
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
                  {EditNews.title}
                </td>
                <td>
                  {EditNews.status}
                </td>
                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      setIsEditing(true)
                      setCurrData({
                        id: EditNews.id
                      })
                    }}>
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      handleDelete(EditNews.id)
                    }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                No News
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table

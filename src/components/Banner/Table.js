import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
// Import Add from './Add';

// Const Table = ({ news, handleEdit, handleDelete }) => {
function Table({ apiBanner, setIsEditing, setCurrData }) {
  // Let newsList = [];
  const [bannerList = [], bannerListHook] = useState()
  const [updateState, setUpdateState] = useState(true)

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
        apiBanner.delete(`banner/${id}`).then(response => {
          setUpdateState(true)
          fetchProcess()
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

  const fetchProcess = async () => {
    console.log(updateState)
    if (updateState) {
      const resp = await apiBanner.get('/banner')
      if (resp.data.data[0] !== null) {
        bannerListHook(resp.data.data)
        console.log(resp.data.data)
        setUpdateState(false)
      }
      else bannerListHook([])
    }
  }

  useEffect(() => {
      fetchProcess()
    }, [apiBanner, bannerList])

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
              colSpan={2}
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {(bannerList.length > 0)
            ? (
              bannerList.map((EditBanner, i) => (
                <tr key={EditBanner.id}>
                  <td>
                    {i + 1}
                  </td>

                  <td>
                    {EditBanner.title}
                  </td>

                  <td>
                    {EditBanner.status}
                  </td>

                  <td className="text-right">
                    <button
                      className="button muted-button"
                      onClick={() => {
                        setIsEditing(true)
                        setCurrData(EditBanner)
                      }}
                    >
                      Edit
                    </button>
                  </td>

                  <td className="text-left">
                    <button
                      className="button muted-button"
                      onClick={() => {
                        setUpdateState(true)
                        handleDelete(EditBanner.id)
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )
            : (
              <tr>
                <td colSpan={7}>
                  No Banner
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Table

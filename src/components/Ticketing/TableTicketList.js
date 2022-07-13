import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
// Import Add from './Add';

function TableTicketList({ apiTicket, setIsEditing, setCurrData, setIsAuthorized }) {
  const [ticketList = [], ticketListHook] = useState()

  const formatter = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: null
    }
  )

  const fetchProcess = async () => {
    try {
      const resp = await apiTicket.get('/ticket/list/admin')
      if (resp.data.data[0] !== null) {
        ticketListHook(resp.data.data)
      }
      else ticketListHook([])
    } catch (error) {
      console.log(error)
      if (error.request.status === 403) {
        setIsAuthorized(false)
      }
    }
  }

  const handleEdit = data => {
    setIsEditing(true)
    setCurrData(data)
  }

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then(async (result) => {
      if (result.value) {
        apiTicket.delete(`/ticket/${id}`)
          .then(reponse => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `Ticket data has been deleted.`,
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(error => {
            if (error.response.data.message.includes('violates foreign key constraint'))
              Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Cannot delete ticket that still in used by user'
              })
          })
      }
    })
  }

  useEffect(() => {
    fetchProcess()
  }, [apiTicket, ticketList])

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Ticket Name
            </th>
            <th>
              Ticket Details
            </th>
            <th>
              Ticket Price
            </th>
            <th
              className="text-center"
              colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {ticketList.length > 0 ? (
            ticketList.map((EditTicket, i) => (
              <tr key={EditTicket.id}>
                <td>
                  {i + 1}
                </td>
                <td>
                  {EditTicket.name}
                </td>
                <td>
                  {EditTicket.details}
                </td>
                <td>
                  {formatter.format(EditTicket.price)}
                </td>
                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => handleEdit(EditTicket)}>
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    className="button muted-button"
                    onClick={() => handleDelete(EditTicket.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                No Ticket
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableTicketList

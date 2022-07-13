import React, { useEffect, useState } from 'react'
// Import Add from './Add';

function TableTicketList({ apiTicket, handleEdit, handleDelete, setIsAuthorized }) {
  const [ticketList = [], ticketListHook] = useState()

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

  const formatter = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: null
    }
  )

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
                    onClick={() => handleEdit(EditTicket.id)}>
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

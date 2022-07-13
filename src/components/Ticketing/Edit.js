import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Edit({ apiTicket, setIsEditing, currData }) {

  const [ticketName, setTicketName] = useState("")
  const [ticketDetails, setTicketDetails] = useState("")
  const [ticketPrice, setTicketPrice] = useState("")
  const [startStatus, setStartStatus] = useState(true)

  const handleUpdate = (e) => {
    e.preventDefault()

    if (!ticketName || !ticketDetails || !ticketPrice) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      })
    }

    apiTicket.put(`/ticket/${currData.id}`, {
      ticket_name: ticketName,
      ticket_details: ticketDetails,
      ticket_price: ticketPrice
    })

    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `Ticket data has been updated.`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const fetchData = async () => {
    if (startStatus) {
      const result = await apiTicket.get(`/ticket/${currData.id}`)
      if (result.data.data[0] !== null){
        setTicketName(result.data.data[0].name)
        setTicketDetails(result.data.data[0].details)
        setTicketPrice(result.data.data[0].price)
      }
      setStartStatus(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [startStatus])

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h3>
          Edit Ticket
        </h3>

        <label htmlFor="title">
          Ticket Name
        </label>

        <input
          id="ticketName"
          name="ticketName"
          onChange={(e) => setTicketName(e.target.value)}
          type="text"
          value={ticketName} />

        <label htmlFor="status">
          Ticket Details
        </label>

        <input
          id="ticketDetails"
          name="ticketDetails"
          onChange={(e) => setTicketDetails(e.target.value)}
          type="text"
          value={ticketDetails} />

        <label htmlFor="ticketPrice">
          Ticket Price (IDR)
        </label>

        <input
          id="ticketPrice"
          name="salary"
          onChange={(e) => setTicketPrice(e.target.value)}
          type="number"
          value={ticketPrice} />

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Update" />

          <input
            className="muted-button"
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel" />

        </div>
      </form>
    </div>
  )
}

export default Edit

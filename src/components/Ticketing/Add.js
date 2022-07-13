import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ apiTicket, setIsAdding }) => {
  const [ticketName, setTicketName] = useState('');
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault()

    if (!ticketName || !ticketDetails || !ticketPrice) {

      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      })
    }

    apiTicket.post('/ticket', {
      ticket_name: ticketName,
      ticket_details: ticketDetails,
      ticket_price: ticketPrice
    })

    setIsAdding(false);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${ticketName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h3>
          Add Ticket
        </h3>

        <label htmlFor="ticketName">
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
            value="Add" />
          <input
            className="muted-button"
            onClick={() => setIsAdding(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel" />
        </div>
      </form>
    </div>
  )
}

export default Add

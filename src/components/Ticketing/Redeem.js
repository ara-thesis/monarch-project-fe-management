import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Redeem = ({ apiTicket, setIsRedeem }) => {
  const [ticketCode, setTicketCode] = useState('');

  const handleRedeem = async e => {
    e.preventDefault()

    if (!ticketCode) {

      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      })
    }

    const result = await apiTicket.put('/ticket/redeem/tourist', {
      code: ticketCode
    })

    setIsRedeem(false);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `Ticket redeem success.`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleRedeem}>
        <h3>
          Redeem Ticket Code
        </h3>

        <label htmlFor="ticketName">
          Ticket code
        </label>

        <input
          id="ticketName"
          name="ticketName"
          onChange={(e) => setTicketCode(e.target.value)}
          type="text"/>

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Redeem" />
          <input
            className="muted-button"
            onClick={() => setIsRedeem(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel" />
        </div>
      </form>
    </div>
  )
}

export default Redeem

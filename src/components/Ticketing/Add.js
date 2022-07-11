import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Add({ ticket, setTicket, setIsAdding }) {
  const [
    ticketName,
    setTicketName
  ] = useState('')
  const [
    ticketDetails,
    setTicketDetails
  ] = useState('')
  const [
    ticketPrice,
    setTicketPrice
  ] = useState('')

  /*
   * Const styles = {
   *   container: {
   *     display: "flex",
   *     flexDirection: "column",
   *     justifyContent: "center",
   *     alignItems: "center",
   *     paddingTop: 50,
   *   },
   *   preview: {
   *     marginTop: 50,
   *     display: "flex",
   *     flexDirection: "column",
   *   },
   *   image: { maxWidth: "100%", maxHeight: 320 },
   *   delete: {
   *     cursor: "pointer",
   *     padding: 15,
   *     background: "red",
   *     color: "white",
   *     border: "none",
   *   },
   * };
   */

  /*
   *   //function ini dipanggil ketika file akan diganti/di change
   *   Const imageChange = (e) => {
   *     If (e.target.files && e.target.files.length > 0) {
   *       SetSelectedImage(e.target.files[0]);
   *     }
   * };
   */

  // //function ini dipanggil ketika file akan dihapus
  // Const removeSelectedImage = () => {
  //     SetSelectedImage();
  // };

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

    const id = ticket.length + 1
    const newTicket = {
      // NewEmployee
      id,
      ticketName,
      ticketDetails,
      ticketPrice
    }

    ticket.push(newTicket)
    localStorage.setItem(
      'employees_data',
      JSON.stringify(ticket)
    )
    setTicket(ticket)
    setIsAdding(false)

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
        <h1>
          Add Ticket
        </h1>

        <label htmlFor="ticketName">
          Ticket Name
        </label>

        <input
          id="ticketName"
          name="ticketName"
          onChange={(e) => setTicketName(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginBottom: '40px'
          }}
          type="text"
          value={ticketName}
        />

        <label htmlFor="status">
          Ticket Details
        </label>

        <input
          id="ticketDetails"
          name="ticketDetails"
          onChange={(e) => setTicketDetails(e.target.value)}
          style={{
            width: '50%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginLeft: '20px'
          }}
          type="text"
          value={ticketDetails}
        />

        <label htmlFor="ticketPrice">
          Ticket Price (IDR)
        </label>

        <input
          id="ticketPrice"
          name="salary"
          onChange={(e) => setTicketPrice(e.target.value)}
          type="number"
          value={ticketPrice}
        />

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Add"
          />

          <input
            className="muted-button"
            onClick={() => setIsAdding(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )
}

export default Add

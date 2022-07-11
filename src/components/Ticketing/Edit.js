import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ ticket, selectedEmployee, setTicket, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [ticketName, setTicketName] = useState(selectedEmployee.ticketName);
  const [ticketDetails, setTicketDetails] = useState(selectedEmployee.ticketDetails);
  const [ticketPrice, setTicketPrice] = useState(selectedEmployee.ticketPrice);

  const handleUpdate = e => {
    e.preventDefault();

    if (!ticketName || !ticketDetails || !ticketPrice) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const EditTicket  = {
      //employee
      id,
      ticketName,
      ticketDetails,
      ticketPrice,
    };

    for (let i = 0; i < ticket.length; i++) {
      if (ticket[i].id === id) {
        ticket.splice(i, 1, EditTicket);
        break;
      }
    }

    localStorage.setItem('ticket_data', JSON.stringify(ticket));
    setTicket(ticket);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${EditTicket.ticketName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="title">Ticket Name</label>
        <input
          id="ticketName"
          type="text"
          name="ticketName"
          value={ticketName}
          onChange={e => setTicketName(e.target.value)}
          style={{
            width: "100%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingRight: "6px",
            marginBottom:"40px",
        }}
        />

<label htmlFor="status">Ticket Details</label>
        <input
          id="ticketDetails"
          type="text"
          name="ticketDetails"
          value={ticketDetails}
          onChange={e => setTicketDetails(e.target.value)}
          style={{
            width: "50%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingRight: "6px",
            marginLeft:"20px",
        }}
        />
    


    <label htmlFor="ticketPrice">Ticket Price (IDR)</label>
        <input
          id="ticketPrice"
          type="number"
          name="salary"
          value={ticketPrice}
          onChange={e => setTicketPrice(e.target.value)}
        />

        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />

        </div>
      </form>
    </div>
  );
};

export default Edit;

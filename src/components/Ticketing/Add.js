import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ ticket, setTicket, setIsAdding }) => {
  const [ticketName, setTicketName] = useState('');
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  
  // const styles = {
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     paddingTop: 50,
  //   },
  //   preview: {
  //     marginTop: 50,
  //     display: "flex",
  //     flexDirection: "column",
  //   },
  //   image: { maxWidth: "100%", maxHeight: 320 },
  //   delete: {
  //     cursor: "pointer",
  //     padding: 15,
  //     background: "red",
  //     color: "white",
  //     border: "none",
  //   },
  // };

  
          //   //function ini dipanggil ketika file akan diganti/di change
          //   const imageChange = (e) => {
          //     if (e.target.files && e.target.files.length > 0) {
          //       setSelectedImage(e.target.files[0]);
          //     }
          // };
          
          // //function ini dipanggil ketika file akan dihapus
          // const removeSelectedImage = () => {
          //     setSelectedImage();
          // };

  const handleAdd = e => {


    e.preventDefault();

    if (!ticketName || !ticketDetails || !ticketPrice) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = ticket.length + 1;
    const newTicket = {
      //newEmployee
      id,
      ticketName,
      ticketDetails,
      ticketPrice,
    };

    ticket.push(newTicket);
    localStorage.setItem('employees_data', JSON.stringify(ticket));
    setTicket(ticket);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${ticketName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Ticket</h1>
        <label htmlFor="ticketName">Ticket Name</label>
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
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );

  
};

export default Add;

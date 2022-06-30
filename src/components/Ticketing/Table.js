import React from 'react';
// import Add from './Add';

const Table = ({ ticket, handleEdit, handleDelete }) => {
  ticket.forEach((EditTicket, i) => {
    EditTicket.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Ticket Name</th>
            <th>Ticket Details</th>
            <th>Ticket Price</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {ticket.length > 0 ? (
            ticket.map((EditTicket, i) => (
              <tr key={EditTicket.id}>
                <td>{i + 1}</td>
                <td>{EditTicket.ticketName}</td>
                <td>{EditTicket.ticketDetails}</td>
                <td>{formatter.format(EditTicket.ticketPrice)}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(EditTicket.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(EditTicket.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Ticket</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

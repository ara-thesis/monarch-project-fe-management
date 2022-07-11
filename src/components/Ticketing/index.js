import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Card, Col, Row, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { ticketData } from '../../data/ticket-data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [ticket, setTicket] = useState(ticketData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ticket_data'));
    if (data !== null && Object.keys(data).length !== 0) setTicket(data);
  }, []);

  const handleEdit = id => {
    const [EditTicket] = ticket.filter(news => EditTicket.id === id);

    setSelectedEmployee(EditTicket);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [EditTicket] = ticket.filter(EditTicket => EditTicket.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${EditTicket.title}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const ticketCopy = ticket.filter(EditTicket => EditTicket.id !== id);
        localStorage.setItem('ticket_data', JSON.stringify(ticketCopy));
        setTicket(ticketCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            ticket={ticket}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && (
        <Add
          ticket={ticket}
          setTicket={setTicket}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          ticket={ticket}
          selectedEmployee={selectedEmployee}
          setTicket={setTicket}
          setIsEditing={setIsEditing}
        />
      )}

<>
      <h4 style={{textAlign: 'center'}}>Income</h4>
      <br />
      <CardGroup>
  <Card>
  <Card.Body>
    <Card.Title>Total earnings</Card.Title>
    <Card.Text>
     Rp.9999999{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
  </Card>
  
  <Card>
  <Card.Body>
    <Card.Title>Ticket sold today</Card.Title>
    <Card.Text>
      1000
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
  </Card>
  
  <Card>
  <Card.Body>
    <Card.Title>Total ticket sold</Card.Title>
    <Card.Text>
      1000
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
  </Card>
  </CardGroup>
      </>
    </div>

    
  );
};

export default Dashboard;

import React from 'react';
import './TicketStatus.css';

const TicketStatus = ({ ticketCount }) => {
  return (
    <div className="ticket-status">
      <h2>Ticket Pool Status</h2>
      <p>Available Tickets: {ticketCount}</p>
    </div>
  );
};

export default TicketStatus;

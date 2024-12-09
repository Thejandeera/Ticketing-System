import React, { useState } from 'react';
import './ConfigurationForm.css';

const ConfigurationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="configuration-form" onSubmit={handleSubmit}>
      <h2>Configure System</h2>
      <input
        type="number"
        name="totalTickets"
        placeholder="Total Tickets"
        value={formData.totalTickets}
        onChange={handleChange}
      />
      <input
        type="number"
        name="ticketReleaseRate"
        placeholder="Ticket Release Rate"
        value={formData.ticketReleaseRate}
        onChange={handleChange}
      />
      <input
        type="number"
        name="customerRetrievalRate"
        placeholder="Customer Retrieval Rate"
        value={formData.customerRetrievalRate}
        onChange={handleChange}
      />
      <input
        type="number"
        name="maxTicketCapacity"
        placeholder="Max Ticket Capacity"
        value={formData.maxTicketCapacity}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfigurationForm;

import React from 'react';
import './ErrorNotification.css'; // Optional: Add styles for the notification box.

const ErrorNotification = ({ message, onClose }) => {
  if (!message) return null; // Do not render if there's no message.

  return (
    <div className="error-notification">
      <div className="error-content">
        <p>{message}</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default ErrorNotification;

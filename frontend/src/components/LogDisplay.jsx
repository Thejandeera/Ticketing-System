import React from 'react';
import './LogDisplay.css';

const LogDisplay = ({ logs }) => {
  return (
    <div className="log-display">
      <h2>System Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogDisplay;

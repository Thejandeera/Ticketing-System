import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import TicketStatus from './components/TicketStatus';
import ConfigurationForm from './components/ConfigurationForm';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';
import ErrorNotification from './components/ErrorNotification';
import './App.css';

const App = () => {
  const [error, setError] = useState(null);
  const [ticketCount, setTicketCount] = useState(0);
  const [logs, setLogs] = useState([]);

  // Add a new log entry
  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  return (
    
      <div className="app">
        <NavigationBar />
        <ErrorNotification message={error} onClose={() => setError(null)} />
        <Routes>
          <Route
            path="/"
            element={<TicketStatus ticketCount={ticketCount} />}
          />
          <Route
            path="/configuration"
            element={
              <ConfigurationForm
                onSubmit={(config) => {
                  if (
                    config.totalTickets <= 0 ||
                    config.ticketReleaseRate <= 0 ||
                    config.customerRetrievalRate <= 0 ||
                    config.maxTicketCapacity <= 0
                  ) {
                    setError('All configuration values must be greater than zero.');
                    return;
                  }
                  setTicketCount(parseInt(config.totalTickets));
                  addLog('Configuration updated.');
                }}
              />
            }
          />
          <Route
            path="/control-panel"
            element={
              <ControlPanel
                onStart={() => {
                  addLog('System started.');
                  setError(null);
                }}
                onStop={() => {
                  addLog('System stopped.');
                }}
                onReset={() => {
                  setTicketCount(0);
                  setLogs([]);
                  addLog('System reset.');
                }}
              />
            }
          />
          <Route path="/log-display" element={<LogDisplay logs={logs} />} />
        </Routes>
      </div>
    
  );
};

export default App;

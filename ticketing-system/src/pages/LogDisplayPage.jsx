import React from 'react';
import LogDisplay from '../components/LogDisplay';

const LogDisplayPage = () => {
  return (
    <div>
      <h2>Log Display</h2>
      <LogDisplay logs={["Log entry 1", "Log entry 2"]} />
    </div>
  );
};

export default LogDisplayPage;

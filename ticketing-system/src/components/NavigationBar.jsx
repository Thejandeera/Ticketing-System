import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <h1 className="nav-title">Ticketing System</h1>
      <ul className="nav-links">
        <li><NavLink to="/" exact activeClassName="active">Ticket Status</NavLink></li>
        <li><NavLink to="/configuration" activeClassName="active">Configuration</NavLink></li>
        <li><NavLink to="/control-panel" activeClassName="active">Control Panel</NavLink></li>
        <li><NavLink to="/log-display" activeClassName="active">Log Display</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

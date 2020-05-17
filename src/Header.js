import React from 'react';
import './Header.css';

const Header = ({
  title,
  subtitle,
}) => {

  return (
    <header className="header">
      <h1>{title || "♟️ John Harrison Championship Series ♟️"}</h1>
      {<h2>{subtitle || "Harison-Denby vs. Harrison, Correspondence 2020."}</h2>}
    </header>
  );
};

export default Header;
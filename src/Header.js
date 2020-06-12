import React from 'react';
import lewisChessWebp from './lewis-chess.webp';
import lewisChessJpg from './lewis-chess.jpg';
import './Header.css';

const Header = ({
  title,
  subtitle,
}) => {

  return (
    <header className="header">
      <picture className="headerBg">
        <source srcSet={lewisChessWebp} type="image/webp"/>
        <source srcSet={lewisChessJpg} type="image/jpeg"/>
        <img src={lewisChessJpg} alt="Lewis Chessmen"/>
      </picture>
      <h1>{title || "♟️ John Harrison Championship Series ♟️"}</h1>
      <h2>{subtitle || "Harison-Denby vs. Harrison, Correspondence 2020."}</h2>
      <h3>{'4 - 3'}</h3>
    </header>
  );
};

export default Header;
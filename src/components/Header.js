import { Link } from 'react-router-dom';

import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/vehicle'>Vehículo</Link></li>
          <li><Link to='/review'>Revisión</Link></li>
        </ul>
      </nav>
    </header>
  );
}

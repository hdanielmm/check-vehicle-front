import { Link } from 'react-router-dom';

import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/vehicle'>Vehículo</Link>
        <Link to='/review'>Revisión</Link>
      </nav>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export const NewVehicle = () => {
  return (
    <div>
      New vehicle
      <Link to='/vehicle'>Back</Link>
    </div>
  )
}

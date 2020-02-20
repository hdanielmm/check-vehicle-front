import React from 'react';
import { Link } from 'react-router-dom';

const NewVehicle = () => {
  return (
    <div>
      New vehicle
      <li>
        <Link to='/vehicle'>Back</Link>
      </li>
    </div>
  )
}

export default NewVehicle;
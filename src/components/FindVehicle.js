import React from 'react'
import { Link } from 'react-router-dom'
import { Finder } from './Finder';

export const FindVehicle = () => {
  return (
    <div>
      
      <Finder />
      <Link to='/vehicle/newVehicle'>Nuevo vehículo</Link>
    </div>
  )
}

export default FindVehicle;

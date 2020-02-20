import React from 'react'
import { Link } from 'react-router-dom'

export const FindVehicle = () => {

  const findVehicle = () => {
    return (
      <div className='buscar-vehiculo'>
        <form>
          <label>
            <input type="text" />
          </label>
          <input type='submit' value='Buscar' />
        </form>
      </div>
    )
  }

  return (
    <div>
      {findVehicle()}
      <Link to='/vehicle/newVehicle'>Nuevo vehículo</Link>
    </div>
  )
}

export default FindVehicle;

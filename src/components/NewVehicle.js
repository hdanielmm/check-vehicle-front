import React from 'react';
import { Link } from 'react-router-dom';

const NewVehicle = () => {

  const addVehicle = () => {
    return (
      <div>
        <form className='form-vehiculo'>
          <label>
            <input
              type='text'
              name='placa'
              value=""
              placeholder='Placa' />
          </label>
          <label>
            <input
              type='text'
              name='marca'
              value=""
              placeholder='Marca' />
          </label>
          <label>
            <input
              type='text'
              name='linea'
              value=""
              placeholder='Línea' />
          </label>
          <label>
            <input
              type='text'
              name='modelo'
              value=""
              placeholder='Modelo' />
          </label>
          <div className='div-boton'>
            <input className='boton' type='submit' value='Guardar' />
            <input className='boton' type='submit' value='Cancelar' onClick="" />
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      New vehicle
      {addVehicle()}
      <li>
        <Link to='/vehicle'>Back</Link>
      </li>
    </div>
  )
}

export default NewVehicle;
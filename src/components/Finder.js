import React from 'react'

export const Finder = () => {

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
    </div>
  )
}

export default Finder;

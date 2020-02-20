import React from 'react'

const NewReview = () => {
  const addReview = () => {
    return (
      <div>
        <form className='form-vehiculo'>
          <label>
            <input
              type='text'
              name='date'
              value=""
              placeholder='Fecha' />
          </label>
          <label>
            <input
              type='text'
              name='item1'
              value=""
              placeholder='Nuevo item' />
          </label>
          <label>
            <input
              type='text'
              name='item2'
              value=""
              placeholder='Nuevo item' />
          </label>
          <label>
            <input
              type='text'
              name='item3'
              value=""
              placeholder='Nuevo item' />
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
      {addReview()}
    </div>
  )
}

export default NewReview;
import React, { useState, useEffect } from 'react'
import { getVehicles } from '../api/api';

export const Finder = (props) => {
  const [query, setQuery] = useState('AAA111');
  const [foundVehicle, setFoundVehicle] = useState({
    found: []
  })
  const [state, setState] = useState({
    vehicles: []
  });


  useEffect(() => {
    const fetchData = async () => {
      const result = await getVehicles();

      setState({ vehicles: [...state.vehicles, ...result.data] });
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = event => {
    findVehicle();
    event.preventDefault();
  }

  const findVehicle = () => {
    const result = state.vehicles.filter(vehicle => {
      return vehicle.licensePlate === query;
    });
    setFoundVehicle({ found: result });
    console.log(result[0].id);
  };

  const showVehicle = () => {
    return (
      <div className='buscar-vehiculo'>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={query}
              onChange={handleChange}
            />
          </label>
          <input
            type='submit'
            value='Buscar'
          />
        </form>
        <ul>
          {
            foundVehicle.found.map(vehicle => {
              return (
                <div key={vehicle.licensePlate}>
                  <li>Placa: {vehicle.licensePlate}</li>
                  <li>Marca: {vehicle.brand}</li>
                  <li>Línea: {vehicle.line}</li>
                  <li>Modelo: {vehicle.model}</li>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }

  return (
    <div>
      {showVehicle()}
    </div>
  )
}

export default Finder;

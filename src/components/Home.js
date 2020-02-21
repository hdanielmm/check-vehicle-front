import React, { useState, useEffect } from 'react';
import { getVehicles } from '../api/api';

const Home = () => {
  const [state, setState] = useState({
    vehicles: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVehicles();
      console.log(result.data);
      setState({vehicles: [...state.vehicles, ...result.data]});
    };
    fetchData(); 
  }, []);

  return (
    <div>
      <ul>
        {state.vehicles.map((i, index) => (

          <li key={i.licensePlate}>{index} - {i.licensePlate}</li>

        ))}
      </ul>
    </div>

  )
}


export default Home

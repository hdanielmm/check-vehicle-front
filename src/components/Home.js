import React, { useState, useEffect } from 'react';
import { getVehicles } from '../api/api';
import Axios from 'axios';

const Home = () => {
  const [state, setState] = useState({
    vehicles: []
  });

  componentDidMount() {
    axios.get(`https://localhost:5001/vehicles`)
      .then(res => {
        const vehicles = res.data;
        setState({ vehicles });
        // setState({vehicles: [...state.vehicles, ...vehicles]});
        console.log(state);
      })
  }

  return (
    <div>
      <ul>
        {state.vehicles.map((i, index) => (

          <li>{index} - {i.LicensePlate}</li>

        ))}
      </ul>
    </div>

  )
}


export default Home

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { FindVehicle } from './FindVehicle';
import { NewVehicle } from './NewVehicle';

const Vehicle = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/vehicle' component={FindVehicle} />
        <Route path='/vehicle/newVehicle' component={NewVehicle} />
      </Switch>
    </div>
  );
}

export default Vehicle

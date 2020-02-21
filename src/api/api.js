import axios from 'axios';

export const getVehicles = () => {
  const url = 'https://localhost:5001/vehicles';

  return axios.get(url);
}

export const getPartReviews = () => {
  const url = 'https://localhost:5001/partreviews';

  return axios.get(url);
}

export const getVehicleParts = () => {
  const url = 'https://localhost:5001/vehicleparts';

  return axios.get(url);
}

export const getEmployees = () => {
  const url = 'https://localhost:5001/employees';

  return axios.get(url);
}
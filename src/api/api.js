import axios from 'axios';

export const getVehicles = () => {
    const url = 'https://localhost:5001/vehicles';
    
    return axios.get(url);
}

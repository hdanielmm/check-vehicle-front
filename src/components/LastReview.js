import React, { useEffect, useState } from 'react'
import { getVehiclePartReviews } from '../api/api';

const LastReview = ({ vehicle }) => {
  const [lastReview, setLastReview] = useState({
    reviews: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVehiclePartReviews();

      setLastReview({ reviews: [...lastReview.reviews, ...result.data] });
    };

    fetchData();
  }, []);

  const vehicleId = vehicle.map(i => i.id);

  const isEqual = (num) => {
    if (num === vehicleId[0]) {
      return true;
    }
  }

  const filterById = obj => {
    if (isEqual(obj.id)) {
      return true
    }
  }

  const lVehicle = lastReview.reviews.filter(filterById);

  const vReview = lVehicle.map(i => i.vehicleReviews[0]);

  const pReview = vReview.map(i => i.partReviews[0]);

  const getDiagnosis = () => {
    let d = "";
    lVehicle.forEach(element => {
      console.log(element.vehicleReviews[0].partReviews[0].diagnosis);
      d = element.vehicleReviews[0].partReviews[0].diagnosis;
    });
    return d;
  }

  const getLastReview = () => {
    return (
      <ul>
        <li>Parte</li>
        <li>Técnico</li>
        <li>Diagnóstico: {getDiagnosis()}</li>
      </ul>
    )
  }

  return (
    <div>
      {getLastReview()}
      
    </div>
  )
}

export default LastReview;
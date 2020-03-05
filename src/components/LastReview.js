import React, { useEffect, useState } from 'react'
import { getVehiclePartReviews, getEmployeePartReviews } from '../api/api';

const LastReview = ({ vehicle }) => {
  const [lastReview, setLastReview] = useState({
    reviews: []
  });

  const [employeePartReview, setEmployeePartReview] = useState({
    employees: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVehiclePartReviews();

      setLastReview({ reviews: [...lastReview.reviews, ...result.data] });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmployeePartReviews();

      setEmployeePartReview({ employees: [...employeePartReview.employees, ...result.data] });
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
  const vehicleReview = lVehicle.map(i => i.vehicleReviews[0]);
  const pReview = vehicleReview.map(i => i.partReviews[0]);
  const eId = pReview.map(i => i.employeeId);

  const getDiagnosis = () => {
    let result = "";
    lVehicle.forEach(element => {
      result = element.vehicleReviews[0].partReviews[0].diagnosis;
    });
    return result;
  }

  const getPartReviewId = () => {
    let result = "";
    lVehicle.forEach(element => {
      result = element.vehicleReviews[0].partReviews[0].id;
    });
    return result;
  }

  const getEmployeeName = () => {
    const employeeObj = employeePartReview.employees.filter(i => eId[0] === i.id);
    const employeeName = employeeObj.map(e => e.name)[0]
    return employeeName;
  }

  const getVehiclePartName = () => {
    const employeeObj = employeePartReview.employees.filter(i => eId[0] === i.id);
    const partReviewObj = employeeObj.map(e => e.partReviews)[0];

    if (partReviewObj) {
      const vehiclePartObj = partReviewObj.map(e => e.vehiclePart.name);
      return vehiclePartObj[getPartReviewId()];
    }
  }

  const getLastReview = () => {
    return (
      <ul>
        <li>{getVehiclePartName()}</li>
        <li>{getEmployeeName()}</li>
        <li>{getDiagnosis()}</li>
      </ul>
    )
  }

  return (
    <div>
      <h3>Última revisión</h3>
      {getLastReview()}
    </div>
  )
}

export default LastReview;
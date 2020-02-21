import React, { useEffect, useState } from 'react'
import { getPartReviews } from '../api/api';

const LastReview = ({ vehicle }) => {
  const [partReviewe, setPartReviewe] = useState({
    partReviews: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPartReviews();

      setPartReviewe({ partReviews: [...partReviewe.partReviews, ...result.data] });
    };

    fetchData();
  }, []);

  console.log('partReviewe', partReviewe);

  const result = vehicle.map(i => i.brand);

  console.log("props", result);
  return (
    <div>

    </div>
  )
}

export default LastReview;
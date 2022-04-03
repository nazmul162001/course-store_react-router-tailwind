import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const x = useParams();
  console.log(x);
  return (
    <div>
      <h2 className='text-5xl text-center'>This is details page</h2>
    </div>
  );
};

export default CourseDetails;
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { courseContex } from '../../App';

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [courses] = useContext(courseContex);
  // console.log(courses);
  const pd = courses.find((pd) => pd.id === +id);
  // console.log(pd.img);
  return (
    <div className="text-center">
      <div className="bg-color w-full h-[200px] bg-teal-600"></div>
      <div className="w-1/4 h-[300px] m-auto border-8 border-gray-400 -mt-40">
        <img className="w-full h-full" src={pd.img} alt="" />
      </div>
      <h2 className='text-3xl font-mono py-3'>{pd.name}</h2>
      <h3 className='md:px-5 text-gray-600'>{pd.description}</h3>

      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center mx-auto px-5 py-2 bg-gray-300 rounded-md mt-5"
      >
        {' '}
        <FaAngleLeft /> Back{' '}
      </button>
    </div>
  );
};

export default CourseDetails;

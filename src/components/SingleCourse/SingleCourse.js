import React from 'react';
import './SingleCourse.css';

const SingleCourse = ({ handleAddToCart, course, selectedCourse }) => {
  const { img, name, description, id, price } = course;
  return (
    <div className="single-course rounded-xl flex justify-between">
      <img className="w-6/12  p-5" src={img} alt="" />
      <div className="course-content">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="font-mono font-bold bg-orange-300 rounded-md">
          Price: ${price}
        </h3>
        <p>
          Description:{' '}
          {description.length > 100 ? description.slice(0, 100) : description}{' '}
          <span className="font-bold cursor-pointer">Read more...</span>
        </p>
        <button
          onClick={() => handleAddToCart(course)}
          type="button"
          className="bg-gradient-to-r from-gray-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500 w-full rounded-md py-2 my-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCourse;

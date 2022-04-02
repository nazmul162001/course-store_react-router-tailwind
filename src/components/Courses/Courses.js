import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Course.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  //handleAddToCart
  const handleAddToCart = (selectedCourse, course) => {
    console.log(selectedCourse);
    setCart([...cart, selectedCourse])
  }

  return (
    <div className="course-store">
      <div className="our-course">
        <h2 className='text-3xl text-center font-mono mt-2 text-purple-600 font-bold'>Available Course</h2>
        <div className="course-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {courses.map((course) => (
            <SingleCourse 
            key={course.id} 
            course={course} 
            handleAddToCart = {handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="cart-container text-center">
        <ReviewCart 
        cart = {cart}
        />
      </div>
    </div>
  );
};

export default Courses;

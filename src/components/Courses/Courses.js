import React, { useEffect, useState } from 'react';
import useCart from '../hooks/useCart';
import ReviewCart from '../ReviewCart/ReviewCart';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Course.css';

const Courses = () => {
  const [cart, setCart] = useState([])
  // custom hooks
  const [courses, setCourses] = useCart();

  //handleAddToCart
  const handleAddToCart = (selectedCourse) => {
    // console.log(selectedCourse.id);
    setCart([...cart, selectedCourse])
  }

  //handleRemoveCart
  const handleRemoveCart = (remove) => {
    // console.log(remove.id);
    setCart(cart.filter(pd => pd.id !== remove.id));
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
        courses = {courses}
        handleRemoveCart ={handleRemoveCart}
        />
      </div>
    </div>
  );
};

export default Courses;

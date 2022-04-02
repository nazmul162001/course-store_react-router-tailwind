import React from 'react';

const ReviewCart = ({ cart, handleRemoveCart, handleEnrollCourse }) => {
  // console.log(cart);

  return (
    <div>
      <h2 className="text-xl font-mono bg-green-200 m-3 rounded-md"> Selcected Course: {cart.length} </h2>
      <div className="cart-info">
        {cart.map((pd, index) => (
          <div key = {index}>
            <div className="course-enroll px-2 pb-3 bg-orange-300 mx-2 mb-2 rounded-lg flex">
              <img className="w-1/3 p-2 rounded-2xl " src={pd.img} alt="" />
              <div className="price">
                <p className="pl-2 font-mono">{pd.name}</p>
                <p className="font-bold">Price: ${pd.price}</p>
                <div className="enroll-btn">
                  <button onClick={() => handleRemoveCart(pd)} className='bg-gray-400 px-3 py-1 rounded-md mr-2'>Delete</button>
                  <button onClick={() => handleEnrollCourse(pd)} className='bg-gray-400 px-3 py-1 rounded-md'>Enroll</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCart;

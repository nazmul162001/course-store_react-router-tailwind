import React from 'react';

const ReviewCart = ({ cart }) => {
  // console.log(cart);

  return (
    <div>
      <h2 className="text-xl font-mono"> Selcected Course {cart.length} </h2>
      <div className="cart-info">
        {cart.map((pd, index) => (
          <div>
            <div className="course-enroll px-2 pb-3 bg-orange-300 mx-2 mb-2 rounded-lg flex">
              <img className="w-1/3 p-2 rounded-2xl " src={pd.img} alt="" />
              <div className="price">
                <p className="pl-2 font-mono">{pd.name}</p>
                <p className="font-bold">Price: ${pd.price}</p>
                <div className="enroll-btn">
                  <button className='bg-gray-400 px-3 py-1 rounded-md mr-2'>Delete</button>
                  <button className='bg-gray-400 px-3 py-1 rounded-md'>Enroll</button>
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

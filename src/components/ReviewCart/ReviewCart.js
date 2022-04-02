import React from 'react';

const ReviewCart = ({ cart }) => {
  // const {name, img} = cart
  return (
    <div>
      <h2 className="text-xl font-mono"> Selcected Course {cart.length} </h2>
      <div className="cart-info">
          
      </div>
    </div>
  );
};

export default ReviewCart;

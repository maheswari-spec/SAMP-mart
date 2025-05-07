import React from 'react'

const Cart = () => {

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 mt-20 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between border-b py-6 gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PwGy6QbmFFeASUQ4asqdcgBAQfw35gDj2g&s"
          alt="Watch"
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-1 sm:px-6 text-center sm:text-left">
          <h2 className="text-lg font-semibold">Apple Watch Series 9</h2>
          <p className="text-gray-600 mt-1">$399.00</p>
        </div>
        <input
          type="number"
          min={1}
          value={1}
          className="w-20 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          className="text-red-500 hover:text-red-700 font-medium transition ml-0 sm:ml-4 mt-2 sm:mt-0"
        >
          Remove
        </button>
      </div>

    
      <div className="text-right mt-6 text-xl font-bold">
        Total: <span className="text-yellow-600">$399.00</span>
      </div>
    </div>
  );
};

export default Cart;


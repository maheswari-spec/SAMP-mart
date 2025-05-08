import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <h1 className="text-white m-6 font-sans font-bold text-7xl">
        About <span className="text-[#dcf245]">SAMPMART</span>
      </h1>

      <p className="text-white text-4xl m-9 p-12 border-4 border-[#dcf245] rounded-3xl">
        Welcome to <span className="text-[#dcf245]">SAMPMART</span>, your trusted eCommerce platform
      </p>

      <p className="text-white text-4xl m-10 p-7 flex items-center gap-4">
        We make your Shopping easy
        <span className="text-[#dcf245]">
          <FaShoppingCart size={32} />
        </span>
      </p>

      <div className='m-12 p-10 text-center'>
        <h1 className='text-white font-sans font-bold text-6xl'>
          OUR <span className='text-[#dcf245] p-4'>VISION</span>
        </h1>

        {/* Flex container for cards */}
        <div className="flex gap-8 justify-center m-6">
          
          {/* First Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#dcf245] w-1/3">
            <h2 className="text-3xl font-semibold text-[#121212] mb-8 p-2">Why Choose SAMPMART?</h2>
            <p className="text-lg text-black">
              At SAMPMART, we provide the best products with a commitment to quality, affordability, and fast delivery.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#dcf245] w-1/3">
            <h2 className="text-3xl font-semibold text-[#121212] mb-8 p-2">Our Commitment</h2>
            <p className="text-lg text-black">
              We are dedicated to providing you with a seamless shopping experience that ensures satisfaction every time you shop.
            </p>
          </div>

        </div>
      </div>
      <div className='m-12 p-10 text-center'>
        <h1 className='text-white font-sans font-bold text-6xl'>
          OUR <span className='text-[#dcf245] p-4'>MISSION</span>
        </h1>
        </div>
        <p className='text-white text-xl m-3 max-w-3xl mx-auto'>
          Our mission is to redefine the online shopping experience by offering unbeatable value, unmatched customer service,
          and a seamless platform for everyone. We aim to empower customers with convenience and trust through every purchase.
        </p>

        {/* Go to Shopping Button */}
        <button className="mt-8 bg-white hover:bg-[#dcf245] text-black font-semibold py-3 px-6 rounded-full shadow-md transition block mx-auto">
  Go to Shopping
</button>

    </div>
  );
};

export default About;

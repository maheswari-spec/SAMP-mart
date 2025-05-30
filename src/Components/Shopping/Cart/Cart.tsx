import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import { removeItem } from "../../Redux/Slices/CartSlice";
import { increaseQuantity } from "../../Redux/Slices/CartSlice";
import { decreaseQuantity } from "../../Redux/Slices/CartSlice";
import { Navbar } from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id: string | number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string | number) => {
    dispatch(decreaseQuantity(id));
  };

  function handleBuyNow() {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login");
      toast.error(`Please log in to proceed`);
    }
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  });

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 mt-[150px] bg-white/5 rounded-xl ">
        <h1 className="text-2xl text-white sm:text-3xl font-bold mb-6 text-center">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <h2 className="text-center text-[#dcf245]">Your Cart is Empty</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b py-6 gap-4"
              >
                <img
                  src={item.images?.[0]}
                  alt="productImage"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 sm:px-6 text-center sm:text-left">
                  <h2 className="text-lg text-white font-semibold">
                    {item.name}
                  </h2>
                  <p className="text-gray-200 mt-1">${item.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="mx-2 font-bold h-7 w-7 bg-[#dcf245] rounded-full"
                  >
                    -
                  </button>
                  <span className="text-white font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="mx-2 font-bold h-7 w-7 bg-[#dcf245] rounded-full"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-black-500 bg-[#dcf245] py-2 px-4 hover:text-black-700 font-medium transition ml-0 sm:ml-4 mt-2 sm:mt-0 hover:bg-white rounded-xl"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
              <div className="text-white text-xl font-bold text-center sm:text-right mb-4 sm:mb-0">
                Total: <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleBuyNow}
                className="bg-[#dcf245] text-black font-semibold py-2 px-6 rounded-xl hover:bg-white transition"
              >
                Buy Now
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

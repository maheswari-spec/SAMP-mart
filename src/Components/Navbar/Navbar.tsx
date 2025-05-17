import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../Redux/Store/Store";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { loggedOut } from "../Redux/Slices/AuthSlice";
import { auth } from "../Firebase/Firebase";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const cartItem = useSelector((state: RootState) => state.cart);
  const cartItemLen = cartItem.length;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  async function handleSignOut() {
    await signOut(auth);

    dispatch(loggedOut());
  }

  function handleHomeClick() {
    navigate("/home");
  }

  function handleContactClick() {
    navigate("/contact");
  }

  function handleAboutClick() {
    navigate("/about");
  }

  function handleProductClick() {
    navigate("/product");
  }

  function handleCartClick() {
    navigate("/cart");
  }

  function handleDashboardClick() {
    navigate("/dashboard");
  }

  const location = useLocation();
  const isOnProductPage = location.pathname.startsWith("/product");

  function handleSigninClick() {
    navigate("/login");
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserDetails(user);
      setIsLoggedIn(!!user);
      if (user && user.email === "admin@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  function handleProfileDetails() {
    navigate("/profile");
  }

  console.log(userDetails?.displayName);

  return (
    <div className="bg-[#232422] z-50 h-[80px] fixed top-0 left-0 w-full flex items-center justify-between px-6 text-white">
      <div className="flex-shrink-0">
        <img src={logo} className="object-contain w-[100px]" />
      </div>

      <div className="flex-1 flex justify-center ">
        <ul className="flex gap-x-6">
          <li
            onClick={handleHomeClick}
            className="cursor-pointer hover:text-[#dcf149]"
          >
            Home
          </li>

          <li
            onClick={handleProductClick}
            className="cursor-pointer hover:text-[#dcf149]"
          >
            Product
          </li>
          <li
            onClick={handleContactClick}
            className="cursor-pointer hover:text-[#dcf149]"
          >
            Contact
          </li>
          <li
            onClick={handleAboutClick}
            className="cursor-pointer hover:text-[#dcf149]"
          >
            About us
          </li>
          {isAdmin && (
            <li
              onClick={handleDashboardClick}
              className="cursor-pointer hover:text-[#dcf149]"
            >
              Dashboard
            </li>
          )}
        </ul>
      </div>

      <div className="flex gap-5 items-center relative">
        {isOnProductPage && (
          <div className="relative">
            <FontAwesomeIcon
              onClick={handleCartClick}
              className="cursor-pointer"
              icon={faShoppingCart}
              size="lg"
            />
            {cartItemLen != 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemLen}
              </span>
            )}
          </div>
        )}
        {isLoggedIn ? (
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="bg-[#dcf149] text-black font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {userDetails?.displayName?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                } text-sm`}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleProfileDetails}
                  >
                    Profile Details
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <li
            onClick={handleSigninClick}
            className="cursor-pointer list-none hover:text-[#dcf149]"
          >
            Sign In
          </li>
        )}
      </div>
    </div>
  );
};

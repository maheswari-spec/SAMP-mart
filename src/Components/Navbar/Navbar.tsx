import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/login");
    localStorage.removeItem("authUser");
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

  return (
    <div className="bg-[#232422] z-50 h-[80px] fixed top-0 left-0 w-full flex items-center justify-between px-6 text-white">
      <div className="ml-6">
        <p className="font-bold text-[20px]">SAMP</p>
      </div>
      <div className="mr-10">
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
          {user?.role === "admin" && (
            <li className="cursor-pointer hover:text-[#dcf149]">Dashboard</li>
          )}
          <li
            onClick={handleSignOut}
            className="cursor-pointer hover:text-[#dcf149]"
          >
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import matrix from "../Assets/404.png";

export const NotFound = () => {
  const navigate = useNavigate();

  function handleRedPillClick() {
    navigate("/product");
  }

  function handleBluePillClick() {
    navigate("/home");
  }

  return (
    <div
      className="h-screen bg-[#000000] bg-auto bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${matrix})` }}
    >
      <button
        onClick={handleRedPillClick}
        className="absolute left-[465px] top-[465px] bg-red-500 hover:bg-red-700 text-white font-bold py-5 px-12 rounded"
      >
        Get Prepared
      </button>
      <button
        onClick={handleBluePillClick}
        className="absolute right-[460px] top-[465px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

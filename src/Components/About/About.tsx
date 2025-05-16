import { FaShoppingCart } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ABOUT_TEXT } from "../Utility/Utility";
const About = () => {
  const navigate = useNavigate();

  function handleShopNowClick() {
    navigate("/home");
  }
  return (
    <div>
      <Navbar />
      <div className="mt-[80px] pb-10 bg-[#232422]">
        <h1 className="text-white m-6 font-sans font-bold text-5xl text-center">
          {ABOUT_TEXT.about} <span className="text-[#dcf245]">{ABOUT_TEXT.name}</span>
        </h1>

        <p className="mt-8 text-[50px] font-bold text-center  text-[#dcf245]">
         {ABOUT_TEXT.welcome}<span className="text-white">{ABOUT_TEXT.name}</span>{ABOUT_TEXT.platform}
        </p>

        <p className="text-white text-3xl m-10 p-7 flex items-center gap-4 text-center">
          {ABOUT_TEXT.easy}
          <span className="text-[#dcf245]">
            <FaShoppingCart size={32} />
          </span>
        </p>

        <div className="m-12 p-10 text-center">
          <h1 className="text-white font-sans font-bold text-5xl">
          {ABOUT_TEXT.our}<span className="text-[#dcf245] p-4">
            {ABOUT_TEXT.vision}
          </span>
          </h1>

          <div className="flex gap-8 justify-center m-6">
        
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#dcf245] w-1/3">
              <h2 className="text-2xl font-semibold text-[#121212] mb-8 p-2">
               
               {ABOUT_TEXT.choose}
              </h2>
              <p className="text-lg text-black">
                
                {ABOUT_TEXT.chooseDesp}
              </p>
            </div>

    
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#dcf245] w-1/3">
              <h2 className="text-3xl font-semibold text-[#121212] mb-8 p-2">
             
             {ABOUT_TEXT.commitment}
              </h2>
              <p className="text-lg text-black">
             
             {ABOUT_TEXT.commitmentDescp}
              </p>
            </div>
          </div>
        </div>
        <div className="m-12 p-10 text-center">
          <h1 className="text-white font-sans font-bold text-5xl">
            {ABOUT_TEXT.our} <span className="text-[#dcf245] p-4">{ABOUT_TEXT.mission}</span>
          </h1>
        </div>
        <p className="text-white text-xl m-3 max-w-3xl mx-auto">
          
          {ABOUT_TEXT.missionDescp}
        </p>

        <button
          onClick={handleShopNowClick}
          className="mt-8 bg-white hover:bg-[#dcf245] text-black font-semibold py-3 px-6 rounded-full shadow-md transition block mx-auto"
        >
   
   {ABOUT_TEXT.shopping}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import mall from "../Assets/mall.png";
import one from "../Assets/onepic.png";
import two from "../Assets/two pic.png";
import three from "../Assets/threepic.png";
import four from "../Assets/fourpic.png";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#232422] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-7xl h-[100vh]">
          <div className="md:w-1/4 text-left">
            <h1 className="text-6xl font-bold text-white whitespace-nowrap">
              Discover everything you need in{" "}
              <span className="text-lime-300 text-7xl">SAMP</span> Mart
            </h1>

            <p className="mt-8 text-[80px] font-bold text-lime-300">
              Shopping Fastdelivery Greatprices
            </p>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10 md:w-1/2 flex justify-self-end">
            <img
              src={mall}
              alt="Shopping Illustration"
              className="w-[1000px] mt-[150px] h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Our Business Section */}
        <h2 className="text-6xl font-bold text-center mb-12 text-white">
          Now <span className="text-lime-300 text-6xl">Trending</span>{" "}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Vegetable and Fruits",
              image: one,
              description:
                "Vegetables: Edible plants or parts of plants, usually savory or less sweet, commonly used in cooking for main dishes, sides, or salads. Fruits: Naturally sweet or sour edible plant products, typically eaten raw, often used in desserts, snacks, or beverages.",
              showButton: true,
            },
            {
              title: "Food and Beverage",
              image: two,
              description:
                "Food: Solid or semi-solid edible items consumed for nutrition and energy. Beverage: Liquid consumables like water, tea, juice, and soft drinks.",
              showButton: true,
            },
            {
              title: "Online Shopping",
              image: three,
              description:
                "Online Shopping: Buying goods or services over the internet, offering convenience, variety, and home delivery.",
              showButton: true,
            },
            {
              title: "Existing Offer",
              image: four,
              description:
                "Existing Offer: A deal or promotion currently available to attract or retain customers.",
              showButton: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-lg bg-white/30 transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-2xl font-bold transition-opacity duration-300 group-hover:opacity-0">
                {item.title}
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/70 text-white flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300">
                <p className="text-sm leading-6">{item.description}</p>
                {item.showButton && (
                  <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
                    Explore More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-6xl font-bold text-center mt-12 text-white">
          Our <span className="text-lime-300 text-6xl">Promises</span>{" "}
        </h2>

        <div className="w-full py-16 bg-[#232422] flex flex-wrap justify-center gap-10">
          {["Quality", "Speed", "Offers", "Support"].map((title, index) => (
            <div
              key={index}
              className="w-[250px] h-[200px] bg-white/5 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <div className="text-center px-4 text-gray-300">
                {title === "Quality" && "Only the best products."}
                <div className="text-lime-300 ">
                  {title === "Speed" && "Fast and reliable delivery."}
                </div>
                {title === "Offers" && "Exciting deals and discounts."}
                <div className="text-lime-300 ">
                  {title === "Support" && "24/7 customer support."}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

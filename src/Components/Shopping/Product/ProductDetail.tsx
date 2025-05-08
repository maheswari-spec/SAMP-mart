import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@mui/material";

export const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-[#f1f3f6] min-h-screen pt-[100px] pb-20">
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-10 w-[90%] max-w-[1400px]">
          {/* Top Section - Image and Info */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Image Section */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="flex">
                <div className="mr-4">
                  <img
                    className="w-[80px] border p-1 border-gray-300 mb-3 cursor-pointer rounded-md"
                    src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp"
                    alt="Thumbnail 1"
                  />
                  <img
                    className="w-[80px] border p-1 border-gray-300 mb-3 cursor-pointer rounded-md"
                    src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
                    alt="Thumbnail 2"
                  />
                  <img
                    className="w-[80px] border p-1 border-gray-300 mb-3 cursor-pointer rounded-md"
                    src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
                    alt="Thumbnail 3"
                  />
                </div>
                <div className="bg-gray-100 w-full max-w-[400px] h-auto flex justify-center items-center rounded-md transition-all duration-300 ease-in-out transform hover:shadow-md">
                  <img
                    src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
                    className="rounded-md max-h-[500px]"
                    alt="Main product"
                  />
                </div>
              </div>
            </div>

            {/* Right Info Section */}
            <div className="w-full lg:w-[60%] flex flex-col">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Chanel Coco Noir Eau De
              </h1>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={index < 4 ? faStar : faStarRegular}
                    size="1x"
                    color="#facc15"
                    style={{ marginRight: "5px" }}
                  />
                ))}
                <p className="ml-3 text-sm text-gray-500">246 reviews</p>
              </div>

              <p className="text-2xl text-blue-600 font-semibold mb-6">
                $500.99
              </p>

              <div className="mb-6">
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Availability Status:</span> In
                  stock
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Shipping:</span> Ships in 3-5
                  business days
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Return Policy:</span> No return
                  policy
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Warranty:</span> 1 week warranty
                </p>
              </div>

              <Button className="w-[200px]" variant="contained">
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10  pt-8">
            <div className="flex border-b border-gray-200 mb-6">
              {["description", "details", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium capitalize ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "description" && (
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Chanel Coco Noir Eau De is an elegant fragrance that embodies
                  luxury and mystery. This perfume features a rich blend of
                  grapefruit, rose, patchouli, and sandalwood. Ideal for both
                  day and evening wear, it delivers a sophisticated presence
                  with lasting impact.
                </p>
              </div>
            )}

            {activeTab === "details" && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800">Brand:</p>
                    <p>Chanel</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Fragrance Type:</p>
                    <p>Eau de Parfum</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Size:</p>
                    <p>100ml</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Gender:</p>
                    <p>Unisex</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Origin:</p>
                    <p>Made in France</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">SKU:</p>
                    <p>CH-COCO-NOIR-EDP</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="space-y-6">
                  {[
                    {
                      name: "Eleanor Collins",
                      email: "eleanor.collins@x.dummyjson.com",
                      stars: 5,
                      text: "Would not recommend!",
                    },
                    {
                      name: "Lucas Gordon",
                      email: "lucas.gordon@x.dummyjson.com",
                      stars: 4,
                      text: "Very satisfied!",
                    },
                    {
                      name: "Ava Thompson",
                      email: "ava.thompson@x.dummyjson.com",
                      stars: 3,
                      text: "Highly impressed!",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-5 rounded-lg shadow-sm"
                    >
                      <div className="flex flex-col mb-2">
                        <p className="font-semibold text-gray-800">
                          {review.name}
                        </p>
                        <p className="text-sm text-gray-500">{review.email}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(review.stars)].map((_, j) => (
                          <FontAwesomeIcon
                            key={j}
                            icon={faStar}
                            size="sm"
                            color="#facc15"
                            className="mr-1"
                          />
                        ))}
                        {[...Array(5 - review.stars)].map((_, j) => (
                          <FontAwesomeIcon
                            key={`empty-${j}`}
                            icon={faStarRegular}
                            size="sm"
                            color="#facc15"
                            className="mr-1"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

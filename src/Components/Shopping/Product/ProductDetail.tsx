import { useState } from "react";
import { Button, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import type { CartItem, ProductItem } from "../../Types/Types";
import { Navbar } from "../../Navbar/Navbar";
import { addToCart } from "../../Redux/Slices/CartSlice";

export const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const [image, setImage] = useState(0);

  const dispatch = useDispatch();

  function handleImageClick(index: number) {
    setImage(index);
  }

  function findnearHalf(number: number) {
    return Math.round(number * 2) / 2;
  }

  const { id } = useParams();

  const product: ProductItem | undefined = useSelector((state: RootState) =>
    state.productData.data.find((p) => p.id === Number(id))
  );

  if (!product) return;

  console.log(product);
  console.log(product?.images);

  function handleCartClick(product: CartItem) {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <Navbar />

      <div className="bg-[#f1f3f6] min-h-screen pt-[100px] pb-20">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-10 w-[90%] max-w-[1400px]">
            {/* Top Section - Image and Info */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Image Section */}
              <div className="w-full lg:w-[40%] flex justify-center">
                <div className="flex">
                  <div className="mr-4">
                    {product?.images?.map((src, index: number) => (
                      <img
                        onClick={() => handleImageClick(index)}
                        key={index}
                        className="w-[80px] border p-1 border-gray-300 mb-3 cursor-pointer rounded-md"
                        src={src}
                      />
                    ))}
                  </div>
                  <div className="bg-gray-100 w-full max-w-[400px] h-auto flex justify-center items-center rounded-md transition-all duration-300 ease-in-out transform hover:shadow-md">
                    <img
                      src={product?.images[image]}
                      className="rounded-md max-h-[500px]"
                      alt="Main product"
                    />
                  </div>
                </div>
              </div>

              {/* Right Info Section */}
              <div className="w-full lg:w-[60%] flex flex-col">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">
                  {product?.title}
                </h1>

                <div className="flex items-center mb-4">
                  <Rating
                    name="half-rating-read"
                    defaultValue={findnearHalf(Number(product?.rating))}
                    precision={0.5}
                    readOnly
                  />
                  <p className="ml-3 text-sm text-gray-500">
                    {product?.reviews?.length} reviews
                  </p>
                </div>

                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  ${product?.price}
                </p>

                <div className="mb-6">
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Availability Status:</span>{" "}
                    {product?.availabilityStatus}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Shipping: </span>
                    {product?.shippingInformation}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Return Policy:</span> No
                    {product?.returnPolicy}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Warranty:</span>{" "}
                    {product?.warrantyInformation}
                  </p>
                </div>

                <Button
                  onClick={() =>
                    handleCartClick({
                      id: product.id, // No optional chaining needed
                      name: product.title,
                      price: product.price,
                      quantity: 1,
                      images: [product.images[0]],
                    })
                  }
                  className="w-[200px]"
                  variant="contained"
                >
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
                    {product?.description}
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-600">
                    <div>
                      <p className="font-medium text-gray-800">Brand:</p>
                      <p>{product?.brand ? product.brand : "Generic"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">SKU:</p>
                      <p>{product?.sku}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Weight: </p>
                      <p>{product?.weight} g</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dimesions:</p>
                      <p>
                        {product?.dimensions?.width} x{" "}
                        {product?.dimensions?.height} x{" "}
                        {product?.dimensions?.width}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && product?.reviews && (
                <div>
                  <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 p-5 rounded-lg shadow-sm"
                      >
                        <div className="flex flex-col mb-2">
                          <p className="font-semibold text-gray-800">
                            {review.reviewerName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {review.reviewerEmail}
                          </p>
                        </div>
                        <div className="flex items-center mb-2">
                          <Rating
                            name="half-rating-read"
                            defaultValue={findnearHalf(Number(review.rating))}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

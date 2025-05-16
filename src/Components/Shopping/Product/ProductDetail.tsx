import { useState } from "react";
import { Button, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import type { CartItem, ProductItem } from "../../Types/Types";
import { Navbar } from "../../Navbar/Navbar";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { addNewReview } from "../../Redux/Slices/DataSlice";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const [image, setImage] = useState(0);
  const [reviewerName, setreviewerName] = useState<string>("");
  const [reviwerEmail, setReviewerEmail] = useState<string>("");
  const [reviewText, setReviewText] = useState<string>("");
  const [reviewRating, setReviewRating] = useState<number | null>();
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

  function handleCartClick(product: CartItem) {
    dispatch(addToCart(product));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const productId = product?.id ?? 0;

    if (reviewerName.trim().length < 3) {
      toast.error("Enter a valid Name");
      return;
    } else if (reviwerEmail.trim().length < 5) {
      toast.error("Enter a valid Email");
      return;
    } else if (!reviewRating) {
      toast.error("You forgot the rating");
      return;
    } else if (reviewText.trim().length < 10) {
      toast.error("Review should contain atleast 10 characters");
      return;
    }

    const newReview = {
      rating: reviewRating ?? 0,
      comment: reviewText,
      date: new Date().toISOString().split("T")[0],
      reviewerName: reviewerName,
      reviewerEmail: reviwerEmail,
    };
    dispatch(addNewReview({ productId, review: newReview }));

    setReviewRating(0);
    setReviewText("");
    setreviewerName("");
    setReviewerEmail("");
  }

  const ratingSum =
    product.reviews?.reduce((acc, rating) => acc + Number(rating.rating), 0) ??
    0;

  const ratingCount = product.reviews?.length ?? 0;

  const productRating =
    ratingCount > 0 ? Math.round((ratingSum / ratingCount) * 10) / 10 : 0;

  return (
    <div>
      <Navbar />

      <div className="bg-[#f1f3f6] min-h-screen pt-[100px] pb-20">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-10 w-[90%] max-w-[1400px]">
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
                    defaultValue={productRating}
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
                    <span className="font-medium">Return Policy: </span>
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
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      quantity: 1,
                      images: [product.images[0]],
                    })
                  }
                  className={`w-[200px] ${
                    Number(product.stock ?? 0) <= 0
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  variant="contained"
                  disabled={product.stock === 0}
                >
                  {(product.stock ?? 0) > 0 ? "Add to cart" : "Out of stock"}
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
                <div className="space-y-10">
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
                          <p className="text-xs text-gray-400">
                            {new Date(review.date).toISOString().split("T")[0]}
                          </p>
                        </div>
                        <div className="flex items-center mb-2">
                          <Rating
                            name="half-rating-read"
                            value={findnearHalf(Number(review.rating))}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                      Write a Review
                    </h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          required
                          minLength={3}
                          value={reviewerName}
                          onChange={(e) => setreviewerName(e.target.value)}
                          type="text"
                          placeholder="Your name"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          onChange={(e) => setReviewerEmail(e.target.value)}
                          value={reviwerEmail}
                          type="email"
                          placeholder="you@example.com"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>

                      {/* Rating Component */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Rating (1-5)
                        </label>
                        <Rating
                          name="review-rating"
                          value={reviewRating ?? 0}
                          onChange={(_, newValue) => setReviewRating(newValue)}
                          precision={0.5}
                          max={5}
                          size="large"
                          className="w-full"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Comment
                        </label>
                        <textarea
                          onChange={(e) => setReviewText(e.target.value)}
                          value={reviewText}
                          rows={4}
                          placeholder="Write your review..."
                          className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </form>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200"
                      >
                        Submit Review
                      </button>
                    </div>
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

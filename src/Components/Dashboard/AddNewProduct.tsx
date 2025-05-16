import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../Redux/Slices/DataSlice";
import { useState } from "react";
import type { RootState } from "../Redux/Store/Store";
import { Navbar } from "../Navbar/Navbar";
import { toast } from "react-toastify";

export const AddNewProduct = () => {
  const dispatch = useDispatch();

  const [productTitle, setProductTitle] = useState<string>("");
  const [productDesc, setProductDesc] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productDiscount, setProductDiscount] = useState<number>(0);
  const [productStock, setProductStock] = useState<number | null>(null);
  const [productSKU, setProductSKU] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [productWeight, setProductWeight] = useState<number | null>(null);
  const [productHeight, setProductHeight] = useState<number | null>(null);
  const [productWidth, setProductWidth] = useState<number | null>(null);
  const [productDepth, setProductDepth] = useState<number | null>(null);
  const [productWarranty, setProductWarranty] = useState<string>("");
  const [productShipping, setProductShipping] = useState<string>("");
  const [productReturnPolicy, setProductReturnPolicy] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");

  const [productImage, setProductImage] = useState<string>("");

  const products = useSelector((state: RootState) => state.productData.data);

  function handleNewProductSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (productTitle.length < 5) {
      toast.error("Product Title should have atleast 5 characters");
      return;
    } else if (productDesc.trim().length < 10) {
      toast.error("Description must have atleast 10 characters");
      return;
    } else if (!productPrice) {
      toast.error("Product cannot be free in this economy");
      return;
    } else if (!productStock) {
      toast.error("Empty stocks? Are you going to scam people?");
      return;
    } else if (productSKU.length < 5) {
      toast.error("SKU Should contain atleast 10 letters");
      return;
    } else if (!productBrand) {
      toast.error("Product name cannot be empty");
      return;
    } else if (!productWeight) {
      toast.error("What are you selling? Air?");
      return;
    } else if (!productHeight) {
      toast.error("Is this product invisible?");
      return;
    } else if (!productWidth) {
      toast.error("Product with 0 width? Something fishy");
      return;
    } else if (!productDepth) {
      toast.error("What kind of two dimension product is this");
      return;
    } else if (!productWarranty) {
      toast.error("No warranty? are you going to chinese product?");
      return;
    } else if (!productShipping) {
      toast.error("C'mon people not ordering surprise");
      return;
    } else if (!productReturnPolicy) {
      toast.error(`Atleast mention 'No return policy'`);
      return;
    } else if (!productImage.trim()) {
      toast.error("Users not going to imaging how product will look");
      return;
    }

    const imageLinks = productImage
      .trim()
      .split(",")
      .map((link) => link.trim())
      .filter(Boolean);

    const newProduct = {
      id: products.length + 1,
      title: productTitle,
      description: productDesc,
      category: productCategory,
      price: productPrice,
      discountPercentage: productDiscount,
      brand: productBrand,
      rating: 5,
      stock: productStock,
      tags: ["generic"],
      sku: productSKU,
      weight: productWeight,
      dimensions: {
        width: productWidth,
        height: productHeight,
        depth: productDepth,
      },
      warrantyInformation: productWarranty,
      shippingInformation: productShipping,
      availabilityStatus: "In stock",
      reviews: [],
      returnPolicy: productReturnPolicy,
      minimumOrderQuantity: 1,
      meta: {
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        barcode: "8829514594521",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: imageLinks,
      thumbnail: imageLinks[0] ?? "",
    };

    dispatch(addNewProduct({ newProduct }));
    setProductTitle("");
    setProductDesc("");
    setProductPrice(null);
    setProductDiscount(0);
    setProductStock(null);
    setProductSKU("");
    setProductBrand("");
    setProductWeight(null);
    setProductHeight(null);
    setProductWidth(null);
    setProductDepth(null);
    setProductWarranty("");
    setProductShipping("");
    setProductReturnPolicy("");

    toast.success("New product added sucessfully");
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductImage(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="mt-32 px-4 sm:px-8">
        <div className="w-full bg-[#121212] rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Add New Product
          </h2>

          <form
            onSubmit={handleNewProductSubmit}
            className="space-y-4 text-white"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Product Title</label>
                <input
                  onChange={(e) => setProductTitle(e.target.value)}
                  type="text"
                  value={productTitle}
                  placeholder="Enter product title"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Product Description
                </label>
                <textarea
                  onChange={(e) => setProductDesc(e.target.value)}
                  value={productDesc}
                  rows={3}
                  placeholder="Enter product description"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Category</label>
                <input
                  onChange={(e) => setProductCategory(e.target.value)}
                  type="text"
                  placeholder="e.g. Electronics, Gadgets"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Price ($)</label>
                <input
                  value={productPrice ?? 0}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  type="number"
                  placeholder="Enter price"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Discount (%)</label>
                <input
                  value={productDiscount ?? 0}
                  onChange={(e) => setProductDiscount(Number(e.target.value))}
                  type="number"
                  placeholder="Enter discount"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Stock</label>
                <input
                  value={productStock ?? 0}
                  onChange={(e) => setProductStock(Number(e.target.value))}
                  type="number"
                  placeholder="Enter stock quantity"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">SKU</label>
                <input
                  onChange={(e) => setProductSKU(e.target.value)}
                  value={productSKU}
                  type="text"
                  placeholder="Enter SKU"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Brand</label>
                <input
                  onChange={(e) => setProductBrand(e.target.value)}
                  value={productBrand}
                  type="text"
                  placeholder="Enter brand"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Weight (kg)</label>
                <input
                  onChange={(e) => setProductWeight(Number(e.target.value))}
                  value={productWeight ?? 0}
                  type="number"
                  step="0.01"
                  placeholder="Enter weight"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Height (cm)</label>
                <input
                  onChange={(e) => setProductHeight(Number(e.target.value))}
                  value={productHeight ?? 0}
                  type="number"
                  step="0.01"
                  placeholder="Enter height"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Width (cm)</label>
                <input
                  onChange={(e) => setProductWidth(Number(e.target.value))}
                  value={productWidth ?? 0}
                  type="number"
                  step="0.01"
                  placeholder="Enter width"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Depth (cm)</label>
                <input
                  onChange={(e) => setProductDepth(Number(e.target.value))}
                  value={productDepth ?? 0}
                  type="number"
                  step="0.01"
                  placeholder="Enter depth"
                  className="w-full bg-gray-800 px-3 py-2 rounded text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Warranty Information</label>
              <textarea
                onChange={(e) => setProductWarranty(e.target.value)}
                value={productWarranty}
                rows={2}
                placeholder="Enter warranty details"
                className="w-full bg-gray-800 px-3 py-2 rounded text-white resize-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Shipping Information</label>
              <textarea
                onChange={(e) => setProductShipping(e.target.value)}
                value={productShipping}
                rows={2}
                placeholder="Enter shipping info"
                className="w-full bg-gray-800 px-3 py-2 rounded text-white resize-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Return Policy</label>
              <textarea
                value={productReturnPolicy}
                onChange={(e) => setProductReturnPolicy(e.target.value)}
                rows={2}
                placeholder="Enter return policy"
                className="w-full bg-gray-800 px-3 py-2 rounded text-white resize-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Images (Paste URL links separated by commas)
              </label>
              <input
                onChange={handleImageChange}
                value={productImage}
                type="text"
                placeholder="Enter comma-separated image URLs"
                className="block w-full text-white bg-gray-800 border border-gray-700 rounded px-3 py-2"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Add this product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

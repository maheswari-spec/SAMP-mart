import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/Store/Store";

import { Navbar } from "../Navbar/Navbar";
import {
  updateProductPrice,
  updateProductTitle,
  updateProductStock,
  deleteProductData,
} from "../Redux/Slices/DataSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productData.data);

  const [editingPriceId, setEditingPriceId] = useState<number | null>(null);
  const [editedPrice, setEditedPrice] = useState<string>("");

  const [editingTitleId, setEditingTitleId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");

  const [editingStocksId, setEditingStocksId] = useState<number | null>(null);
  const [editedStock, setEditedStocks] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchedData = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const navigate = useNavigate();

  // changing price data functions
  function handlePriceClick(productId: number, currentPrice: number) {
    setEditingPriceId(productId);
    setEditedPrice(currentPrice.toString());
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedPrice(e.target.value);
  }

  function handlePriceBlur(productId: number) {
    setEditingPriceId(null);

    const parsed = parseFloat(editedPrice);
    if (isNaN(parsed)) {
      toast.error("Enter a valid price");
    } else if (!isNaN(parsed)) {
      dispatch(updateProductPrice({ id: productId, value: parsed }));
    }
  }

  // changing title data functions
  function handleTitleClick(productId: number, currentTitle: string) {
    setEditingTitleId(productId);
    setEditedTitle(currentTitle);
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedTitle(e.target.value);
  }

  function handleTitleBlur(productId: number) {
    setEditingTitleId(null);

    if (editedTitle.length < 8) {
      toast.error("Product name should at least have 8 letters");
    } else {
      dispatch(updateProductTitle({ id: productId, title: editedTitle }));
    }
  }

  function handleStockClick(productId: number, currentStock: string) {
    setEditingStocksId(productId);
    setEditedStocks(currentStock?.toString() ?? "");
  }

  function handleStockChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedStocks(e.target.value);
  }

  function handleStockBlur(productId: number) {
    setEditingStocksId(null);

    if (isNaN(Number(editedStock))) {
      toast.error("Enter a valid stock data");
    } else {
      dispatch(
        updateProductStock({ id: productId, stock: Number(editedStock) })
      );
    }
  }

  function handleNewProductClick() {
    navigate("/dashboard/addnewproduct");
  }

  function handleDeleteClick(productId: number) {
    dispatch(deleteProductData(productId));
  }

  return (
    <>
      <Navbar />
      <div className="mt-32 px-4 sm:px-8">
        <div className="w-full bg-[#121212] rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Inventory
          </h2>

          {/* Search and Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
            />

            <button
              onClick={handleNewProductClick}
              className="mt-2 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add New Product
            </button>
          </div>

          {/* Table Header */}
          <div className="hidden sm:flex text-gray-400 text-sm uppercase border-b border-gray-700 py-3">
            <div className="w-24 px-2">ID</div>
            <div className="flex-1 px-2">Product Name</div>
            <div className="w-24 px-6 text-center">Price</div>
            <div className="w-24 px-6 text-center">Stock</div>
            <div className="w-20 px-2 text-center">Delete</div>
          </div>

          {/* Product List */}
          <div className="space-y-2">
            {searchedData.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center text-white text-sm bg-transparent hover:bg-gray-800 rounded-md px-2 py-3 transition"
              >
                <div className="w-24 px-2 mb-1">
                  <p>#{product.id}</p>
                </div>

                <div
                  className="flex-1 px-2 mb-1"
                  onClick={() => handleTitleClick(product.id, product.title)}
                >
                  {editingTitleId === product.id ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={handleTitleChange}
                      onBlur={() => handleTitleBlur(product.id)}
                      autoFocus
                      className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                    />
                  ) : (
                    <p>{product.title}</p>
                  )}
                </div>

                <div
                  className="w-24 px-6 text-center mb-1"
                  onClick={() => handlePriceClick(product.id, product.price)}
                >
                  {editingPriceId === product.id ? (
                    <input
                      type="text"
                      value={editedPrice}
                      onChange={handlePriceChange}
                      onBlur={() => handlePriceBlur(product.id)}
                      autoFocus
                      className="w-full bg-gray-700 text-white px-2 py-1 rounded text-center"
                    />
                  ) : (
                    <p>${product.price}</p>
                  )}
                </div>

                <div
                  className="w-24 px-6 text-center mb-1"
                  onClick={() => handleStockClick(product.id, product.stock)}
                >
                  {editingStocksId === product.id ? (
                    <input
                      type="text"
                      value={editedStock}
                      onChange={handleStockChange}
                      onBlur={() => handleStockBlur(product.id)}
                      autoFocus
                      className="w-full bg-gray-700 text-white px-2 py-1 rounded text-center"
                    />
                  ) : (
                    <p>{product.stock}</p>
                  )}
                </div>

                <div className="w-20 px-2 text-center">
                  <button
                    onClick={() => handleDeleteClick(product.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

const Bag = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productName: string) => {
    removeFromCart(productName);
  };

  const handleIncrement = (productName: string) => {
    const item = cart.find((i) => i.productName === productName);
    if (item) {
      updateQuantity(productName, item.quantity + 1);
    }
  };

  const handleDecrement = (productName: string) => {
    const item = cart.find((i) => i.productName === productName);
    if (item && item.quantity > 1) {
      updateQuantity(productName, item.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-12 font-sans w-full max-w-5xl mx-auto">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3">
        <p className="text-xl md:text-2xl font-semibold mb-4">Bag</p>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.productName} className="flex flex-col sm:flex-row gap-4 border-b pb-4">
                {/* Product Image */}
                <div className="w-full sm:w-[150px] flex justify-center">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{item.productName}</h3>
                  <p className="text-sm text-gray-600">Product Description</p>
                  <p className="text-xs text-gray-500">Color: Sample Color</p>

                  {/* Quantity Control */}
                  <div className="flex justify-center sm:justify-start items-center gap-4 mt-2">
                    <p className="text-sm text-gray-500">Size: L</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecrement(item.productName)}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        -
                      </button>
                      <p className="text-sm">{item.quantity}</p>
                      <button
                        onClick={() => handleIncrement(item.productName)}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price & Remove Button */}
                <div className="text-right">
                  <p className="font-semibold text-lg sm:text-base">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleRemove(item.productName)}
                    className="text-red-600 text-xs sm:text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 p-4 md:p-6 bg-gray-100 rounded-md">
        <h3 className="font-semibold text-lg md:text-xl mb-4">Summary</h3>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-sm">
            <p>Subtotal</p>
            <p>₹{calculateTotal().toLocaleString()}</p>
          </div>

          <div className="flex justify-between text-sm">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between border-t pt-4 font-semibold text-sm md:text-base">
            <p>Total</p>
            <p>₹{calculateTotal().toLocaleString()}</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-full text-sm md:text-base hover:bg-gray-800">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Bag;

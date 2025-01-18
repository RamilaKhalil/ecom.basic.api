// import Image from "next/image";
// const Bag = () => {
//     return (
//       <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 font-sans">
//         <div className="lg:w-2/3">
//           <div className="bg-gray-100 p-4  mb-6">
//             <p className="font-semibold">Free Delivery</p>
//             <p className="text-sm">
//               Applies to orders of ₹14,000.00 or more.{" "}
//               <a href="#" className=" underline">
//                 View details
//               </a>
//             </p>
//           </div>
//           <p className="text-2xl">Bag</p>
  
//           <div className="flex flex-col gap-6">
          
//             <div className="flex gap-4 border-b pb-4">
//               <img
//                 src="CartPic1.png"
//                 alt="Nike Dri-FIT ADV TechKnit Ultra"
//                 className="w-[150px] h-[150px] object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg">
//                   Nike Dri-FIT ADV TechKnit Ultra
//                 </h3>
//                 <p className="text-sm">Men's Short-Sleeve Running Top</p>
//                 <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <div className="flex w-[200px] justify-between text-gray-500">
//                 <p className="text-sm">Size: L</p>
//                 <p className="text-sm">Quantity: 1</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">₹3,895.00</p>
//               </div>
//             </div>
//             <div className="flex gap-4 border-b pb-4">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Nike Air Max 97 SE"
//                 className="w-24 h-24 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg">Nike Air Max 97 SE</h3>
//                 <p className="text-sm">Men's Shoes</p>
//                 <p className="text-sm text-gray-500">
//                   Flat Pewter/Light Bone/Black/White
//                 </p>
//                 <div className="flex w-[200px] justify-between text-gray-500">
//                 <p className="text-sm">Size: 8</p>
//                 <p className="text-sm">Quantity: 1</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">₹16,995.00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="lg:w-1/3  p-6 rounded-md">
//           <h3 className="font-semibold text-xl mb-4">Summary</h3>
//           <div className="space-y-4 mb-6">
//             <div className="flex justify-between">
//               <p>Subtotal</p>
//               <p>₹20,890.00</p>
//             </div>
  
//             <div className="flex justify-between">
//               <p>Estimated Delivery & Handling</p>
//               <p>Free</p>
//             </div>
  
//             <div className="flex justify-between border-t pt-4 font-semibold">
//               <p>Total</p>
//               <p>₹20,890.00</p>
//             </div>
//           </div>
  
//           <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800"> Member Checkout </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Bag;
"use client"
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
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 font-sans">
      <div className="lg:w-2/3">
        <p className="text-2xl">Bag</p>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.productName} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-[150px] h-[150px] object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.productName}</h3>
                  <p className="text-sm">Product Description</p>
                  <p className="text-sm text-gray-500">Color: Sample Color</p>
                  <div className="flex w-[200px] justify-between text-gray-500">
                    <p className="text-sm">Size: L</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDecrement(item.productName)}
                        className="text-sm bg-gray-200 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <p className="text-sm">{item.quantity}</p>
                      <button
                        onClick={() => handleIncrement(item.productName)}
                        className="text-sm bg-gray-200 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                  <button
                    onClick={() => handleRemove(item.productName)}
                    className="text-red-600 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="lg:w-1/3 p-6 rounded-md">
        <h3 className="font-semibold text-xl mb-4">Summary</h3>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{calculateTotal().toLocaleString()}</p>
          </div>

          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between border-t pt-4 font-semibold">
            <p>Total</p>
            <p>₹{calculateTotal().toLocaleString()}</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Bag;

const OrderPage = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-4">How would you like to get your order?</h3>
            <p className="text-sm mb-4 text-gray-500"> Customs regulation for Pakistan require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.{' '}
              <a href="#" className="text-blue-500 underline">Learn More</a>
            </p>
  
            <div className="mb-6">
              <label className="inline-flex items-center text-sm">
                <input type="radio" className="form-radio" name="deliveryOption" checked />
                <span className="ml-2">Deliver It</span>
              </label>
            </div>
  
          
            <h3 className="text-xl font-semibold mb-4">Enter your name and address:</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border rounded-md"
                />
              </div>
              <input
                type="text"
                name="addressLine1"
                placeholder="Address Line 1"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="addressLine2"
                placeholder="Address Line 2"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="addressLine3"
                placeholder="Address Line 3"
                className="w-full p-2 border rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  className="w-1/2 p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Locality"
                  className="w-1/2 p-2 border rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <select name="state" className="w-1/2 p-2 border rounded-md">
                  <option value="India">India</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  type="checkbox"
                  id="save-address"
                  className="form-checkbox"
                />
                <label htmlFor="save-address" className="text-sm ml-2">
                  Save this address to my profile
                </label>
              </div>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  id="preferred-address"
                  className="form-checkbox"
                />
                <label htmlFor="preferred-address" className="text-sm ml-2">
                  Make this my preferred address
                </label>
              </div>
            </form>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹20,890.00</p>
              </div>
  
              
              <div className="flex justify-between">
                <p>Delivery/Shipping</p>
                <p>Free</p>
              </div>
  
              
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
            </div>
  
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">
                (The total reflects the price of your order, including applicable taxes and fees)
              </p>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderPage;
  
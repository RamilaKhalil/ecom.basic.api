
import Image from "next/image";

export default function MainPage() {
  return (
    <>
      <div className="h-[68px] w-full bg-[#F5F5F5] p-4 text-center">
        <p className="text-lg md:text-xl font-bold">Hello Nike App</p>
        <p className="text-sm md:text-lg">Load the app to access everything Nike. <span className="font-bold underline">Get Your Great</span></p>
      </div>
      <div className="bg-white">
        <div className="relative w-full h-[50vh] md:h-screen">
          <Image src="/MainShoes.png" alt="Sneaker" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
        <div className="relative flex flex-col items-center text-center bg-white py-8 px-4">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">First Look</p>
          <h1 className="text-2xl md:text-6xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mb-6">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits.</p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Notify Me</button>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Shop Air Max</button>
          </div>
        </div>
        <div className="bg-white px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Best of Air Max</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 font-bold rounded-full">Shop</button>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-full">←</button>
                <button className="p-2 bg-gray-300 rounded-full">→</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Shoe1.png", "Shoe2.png", "Shoe3.png"].map((shoe, index) => (
              <div key={index} className="border rounded-md p-4 text-center">
                <Image src={`/${shoe}`} alt="Nike Shoe" width={250} height={250} className="mx-auto" />
                <h3 className="font-medium text-lg mt-4">Nike Air Max Pulse</h3>
                <p className="font-bold mt-1">₹ 13,995</p>
                <p className="text-gray-500 text-sm">Men's Shoes</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-white py-12 px-4 text-center">
          <Image src="/Jogging.png" alt="Running Man" width={600} height={300} className="rounded-lg mx-auto" />
          <h1 className="mt-8 text-2xl md:text-4xl text-gray-900">STEP INTO WHAT FEELS GOOD</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-lg">Cause everyone should know the feeling of running in that perfect pair!</p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Find Your Shoe</button>
        </div>
        <div className="bg-white py-12 px-4 text-center">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-6">Gear Up</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["main1.png", "main2.png", "main3.png", "main4.png"].map((gear, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={`/${gear}`} alt="Nike Gear" width={200} height={200} className="rounded-lg" />
                <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT</p>
                <p className="text-gray-500 text-sm">Men's Running Top</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-white py-12 px-4 text-center">
          <h1 className="text-xl md:text-[52px] leading-tight font-bold underline">Flight Essentials</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-lg">Built to last all week—but with style only Jordan Brand can deliver.</p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Shop</button>
        </div>
        <div className="flex flex-col items-center justify-center bg-white py-12 px-4">
          <Image src="/main6.png" alt="Nike Air Max Pulse" width={400} height={400} className="object-contain" />
        </div>
        <footer className="bg-white py-8 w-full text-center text-gray-600 text-sm">© 2025 Nike, Inc. All Rights Reserved.</footer>
      </div>
    </>
  );
}

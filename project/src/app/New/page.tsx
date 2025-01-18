import Image from "next/image";

export default function MainPage() {
  return (
    <>
    <div className="h-[68px] w-full bg-[#F5F5F5]">
    <p className="text-xl text-center font-bold"> Hello Nike App</p>
    <p className="text-xl text-center">Load the app to access everything Nike. <span className="font-bold underline">Get Your Great</span></p>
    </div>
    <div className=" bg-white">
      <div className="relative ml-[49px] mr-[49px] h-screen">
        <Image
          src="/MainShoes.png" 
          alt="Sneaker"
          layout="fill"
          objectFit="cover" 
          objectPosition="center" 
        />
      </div>
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2"> First Look
        </p>
        <h1 className="text-4xl md:text-6xl  mb-4"> NIKE AIR MAX PULSE </h1>        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6"> Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>
      <div className="bg-white px-6 py-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold"> ← </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center"> → </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe1.png" 
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"/>
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max Pulse</h3>
              <p className="font-bold mt-1 pl-11">₹ 13,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Women's Shoes</p>
            </div>
          </div>
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe2.png" 
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max Pulse</h3>
              <p className="font-bold mt-1 pl-11">₹ 13,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Men's Shoes</p>
            </div>
          </div>
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe3.png" 
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max 97 SE</h3>
              <p className="font-bold mt-1 pl-11">₹ 16,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Men's Shoes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/Jogging.png" 
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
          <h1 className="mt-8 text-4xl  text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl  text-gray-900 mb-12 text-left">Gear Up</h2>
          <div className="flex justify-between mb-8">
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900 ml-96">Shop Men</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2"> ← </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2"> → </button>
            </div>
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center  ml-2"> ← </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center  ml-2"> → </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-12">
            <div className=" flex flex-col items-center">
              <Image src="/main1.png" alt="Men's Top" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit</p>
              <p className="text-gray-700 font-medium mt-4">₹ 3,895</p>
              </div>
              <p className="text-gray-500">Men's Short Sleeve</p>
              <p className="text-gray-500"> Running Top</p>
            </div>
            <div className=" flex flex-col items-center">
              <Image src="/main2.png" alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
              <p className="text-gray-700 font-medium mt-4">₹ 2,495</p>
              </div>
              <p className="text-gray-500">Men's 18cm (approx.) 2-</p>
              <p className="text-gray-500"> in-1 Versatile Shorts</p>
            </div>
            <div className=" flex flex-col ">
              <Image src="/main3.png" alt="Women's Top" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV </p>
              <p className="text-gray-700 font-medium mt-4">₹ 5,295</p>
              </div>
              <p className="text-gray-500">Women's Long Sleeve</p>
              <p className="text-gray-500"> Running Top</p>
            </div>
            <div className=" flex flex-col ">
              <Image src="/main4.png" alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
              <p className="text-gray-700 font-medium mt-4">₹ 3,795</p>
              </div>
              <p className="text-gray-500">Women's Mid Rise 7/8 Running</p>
              <p className="text-gray-500"> Leggings With Pockets</p>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left font-sans">Gear Up</h2>
          <div className=" bg-gray-100">
      <div className="relative w-full h-screen ">
        <Image
          src="/main5.png" 
          alt="Sneaker"
          layout="fill" 
           />
      </div>
        </div>
        </div>
        </div>
        <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-helvetica text-[52px]  leading-[60px] text-center  underline ">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your buit to last all weeks wears-but with style only Joran Brand can deliver
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>
<div className="flex flex-col items-center justify-center min-h-screen bg-white">
  <Image
    src="/main6.png"
    alt="Nike Air Max Pulse"
    layout="intrinsic"
    width={1200} 
    height={1200}
    className="object-contain" />
</div>
<footer className="bg-white py-8 w-full">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pr-12">
    <div>
      <h3 className="font-bold mb-4">Icons</h3>
      <ul className="space-y-2">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 ">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 ">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    <div className="">
      <h3 className="font-bold mb-4">Kid</h3>
      <ul className="space-y-2 ">
        <li>Infant & Toddler Shoes</li>
        <li>Kid's Shoes</li>
        <li>Kid's Jordan Shoes</li>
        <li>Kid's Basketball Shoes</li>
      </ul>
    </div>
  </div>
</footer>
</div>
</div>
</>
  );
}
// import React from "react";
// import Image from "next/image";

// const Home = () => {
//   const products = [
//     {
//       title: "Nike Air Force 1 Mid '07",
//       price: "₹ 10,795.00",
//       category: "Men's Shoes",
//       imgSrc: "/All1.png",
//     },
//     {
//       title: "Nike Court Vision Low Next Nature",
//       price: "₹ 4,995.00",
//       category: "Men's Shoes",
//       imgSrc: "/All2.png",
//     },
//     {
//       title: "Nike Air Force 1 PLT.AF.FORM",
//       price: "₹ 8,695.00",
//       category: "Women's Shoes",
//       imgSrc: "/All3.png",
//     },
//     {
//       title: "Nike Air Force 1 React",
//       price: "₹ 13,295.00",
//       category: "Men's Shoes",
//       imgSrc: "/All4.png",
//     },
//     {
//       title: "Air Jordan 1 Elevate Low",
//       price: "₹ 9,495.00",
//       category: "Women's Shoes",
//       imgSrc: "/All5.png",
//     },
//     {
//       title: "Nike Standard Issue",
//       price: "₹ 3,695.00",
//       category: "Women's Basketball Jersey",
//       imgSrc: "/All6.png",
//     },

//       {
//         title: "Nike Air Force 1 React",
//         price: "₹ 13,295.00",
//         category: "Men's Shoes",
//         imgSrc: "/All4.png",
//       },
//       {
//         title: "Nike Court Vision Low",
//         price: "₹ 9,495.00",
//         category: "Women's Shoes",
//         imgSrc: "/All5.png",
//       },
//       {
//         title: "Nike Air Max 90",
//         price: "₹ 12,995.00",
//         category: "Men's Shoes",
//         imgSrc: "/All6.png",
//       },
//       {
//         title: "Nike Revolution 6 Next Nature",
//         price: "₹ 6,795.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All7.png",
//       },
//       {
//         title: "Air Jordan 1 Mid",
//         price: "₹ 11,295.00",
//         category: "Men's Shoes",
//         imgSrc: "/All8.png",
//       },
//       {
//         title: "Nike Air Zoom Pegasus 40",
//         price: "₹ 10,495.00",
//         category: "Women's Shoes",
//         imgSrc: "/All9.png",
//       },
//       {
//         title: "Nike React Infinity Run Flyknit 3",
//         price: "₹ 14,295.00",
//         category: "Men's Running Shoes",
//         imgSrc: "/All10.png",
//       },
//       {
//         title: "Nike Blazer Mid '77",
//         price: "₹ 7,995.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All11.png",
//       },
//       {
//         title: "Nike Dunk Low Retro",
//         price: "₹ 8,995.00",
//         category: "Men's Sneakers",
//         imgSrc: "/All12.png",
//       },
//       {
//         title: "Nike Air VaporMax Plus",
//         price: "₹ 19,995.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All13.png",
//       },
//       {
//         title: "Nike Zoom Fly 5",
//         price: "₹ 15,495.00",
//         category: "Men's Running Shoes",
//         imgSrc: "/All14.png",
//       },
//       {
//         title: "Nike Metcon 8",
//         price: "₹ 11,995.00",
//         category: "Training Shoes",
//         imgSrc: "/All15.png",
//       },
//       {
//         title: "Nike Free Run 5.0",
//         price: "₹ 9,495.00",
//         category: "Women's Running Shoes",
//         imgSrc: "/All16.png",
//       },
//       {
//         title: "Nike Air Max 97",
//         price: "₹ 17,495.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All17.png",
//       },
//       {
//         title: "Nike LeBron 21",
//         price: "₹ 18,995.00",
//         category: "Men's Basketball Shoes",
//         imgSrc: "/All18.png",
//       },
//       {
//         title: "Nike Phantom GT2 Academy",
//         price: "₹ 6,795.00",
//         category: "Men's Football Shoes",
//         imgSrc: "/All19.png",
//       },
//       {
//         title: "Nike Tiempo Legend 9 Academy",
//         price: "₹ 5,995.00",
//         category: "Women's Football Shoes",
//         imgSrc: "/All20.png",
//       },
//       {
//         title: "Nike Air Jordan 4 Retro",
//         price: "₹ 19,995.00",
//         category: "Men's Sneakers",
//         imgSrc: "/All15.png",
//       },
//       {
//         title: "Nike Kyrie Flytrap 6",
//         price: "₹ 9,495.00",
//         category: "Men's Basketball Shoes",
//         imgSrc: "/All13.png",
//       },
//       {
//         title: "Nike SB Dunk Low",
//         price: "₹ 11,995.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All9.png",
//       },
//       {
//         title: "Nike ZoomX Invincible Run Flyknit 3",
//         price: "₹ 14,995.00",
//         category: "Men's Running Shoes",
//         imgSrc: "/All7.png",
//       },
//       {
//         title: "Nike Air Huarache",
//         price: "₹ 10,495.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All19.png",
//       },
//       {
//         title: "Nike Air Max Plus",
//         price: "₹ 13,995.00",
//         category: "Men's Shoes",
//         imgSrc: "/All17.png",
//       },
//       {
//         title: "Nike Air Force 1 Shadow",
//         price: "₹ 11,495.00",
//         category: "Women's Shoes",
//         imgSrc: "/All1.png",
//       },
//       {
//         title: "Nike SB Blazer Mid",
//         price: "₹ 8,495.00",
//         category: "Unisex Shoes",
//         imgSrc: "/All5.png",
//       },
//       {
//         title: "Nike Air Max Pre-Day",
//         price: "₹ 9,995.00",
//         category: "Men's Sneakers",
//         imgSrc: "/All12.png",
//       },
//       {
//         title: "Nike Air Zoom Structure 24",
//         price: "₹ 12,995.00",
//         category: "Men's Running Shoes",
//         imgSrc: "/All7.png",
//       },

//     ];

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4 bg-gray-white p-4">

//         <h2 className="font-bold text-lg mb-4">Filter</h2>
//         <div>
//           <div className="flex gap-7 ">
//         <h3 className="font-medium mb-2">Gender</h3>
//         <img src="/Frame (1).png" alt=""
//         className="w-3 h-5 "/>
//         </div>
//           <div className="space-y-2">
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Men
//             </label>
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Women
//             </label>
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Unisex
//             </label>
//           </div>
//         </div>
//         <div className="mt-9">
//           <div className="flex gap-12">
//         <h3 className="font-medium mb-2">Kids</h3>
//         <img src="/Frame (1).png" alt=""
//         className="w-3 h-5 "/>
//         </div>
//           <div className="space-y-2">
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Boy
//             </label>
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Girl
//             </label>
//           </div>
//         </div>
//         <div className="mt-9">
//           <div className="flex gap-12">
//         <h3 className="font-medium mb-2">Kids</h3>
//         <img src="/Frame (1).png" alt=""
//         className="w-3 h-5 "/>
//         </div>
//           <div className="space-y-2">
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Boy
//             </label>
//             <label className="block">
//               <input type="checkbox" className="mr-2" /> Girl
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-3/4 p-4">
//       <div className="mb-8 ml-[500px] flex gap-5">
//         <h4 >Hide Filter</h4>
//         <img src="/filter.png" alt=""
//         className="w-5 h-5 cursor-pointer" />
//         <h4 >Sort By</h4>
//         <img src="/Frame (1).png" alt=""
//                 className="w-3 h-5 cursor-pointer"/>

//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="border rounded-lg overflow-hidden shadow-sm"
//             >
//               <img
//                 src={product.imgSrc}
//                 alt={product.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-md">{product.title}</h3>
//                 <p className="text-sm text-gray-500">{product.category}</p>
//                 <p className="pt-2 text-lg">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// src/app/shoes/page.tsx
// src/app/Shoes/page.tsx
// "use client"
// import React, { useEffect, useState } from "react";

// const Shoes = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const SANITY_QUERY_URL = "https://i8snfskn.api.sanity.io/v2025-01-17/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D%7B%0A++++title%2C%0A++++price%2C%0A++++category%2C%0A++++%22imgSrc%22%3A+image.asset-%3Eurl%0A++%7D%0A";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(SANITY_QUERY_URL);
//         const data = await response.json();
//         console.log(data); // Check the fetched data
//         setProducts(data.result); // Use `result` key if Sanity API returns it
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Shoes</h1>
//       <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="ml-8 w-60 border rounded-lg overflow-hidden shadow-sm">
//             <img
//               src={product.imgSrc || "/default-image.jpg"} // Default image if imgSrc is null
//               alt={product.title}
//               className="w-60 h-50 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-bold text-md">{product.title}</h3>
//               <p className="text-sm text-gray-500">{product.category}</p>
//               <p className="pt-2 text-lg">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shoes;
import Link from "next/link";

const fetchProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch products");
  // }

  const data = await res.json();

  if (!data.success) {
    throw new Error("Failed to fetch products");
  }

  return data.data;
};

export default async function ShoesPage() {
  const products = await fetchProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shoes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any, index: number) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.productName}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-800 font-bold">₹{product.price}</p>
              <p className="text-sm text-gray-500">{product.status}</p>
              <Link
                href={`/Product/${encodeURIComponent(product.productName)}`}
              >
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  See More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

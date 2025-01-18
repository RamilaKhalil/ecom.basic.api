 import Image from "next/image";

 export default function Product() {
   return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 md:flex md:items-center">
         <div className="w-full md:w-1/2 flex justify-center">
           <img
            src="/ProductDetailShoe.png" 
             alt="Nike Air Force 1 PLT.AF.ORM"
             width={'500'}
             height={'500'}
           className="rounded-lg"
           />
         </div>
         <div className=" md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
          <h1 className="text-3xl  font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-700 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 
             layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
             Swoosh add coveted appeal, while the unexpected shading, rich
             mixture of materials, and aged midsole aesthetic give this release
             an artisan finish.
             </p>
           <p className="text-2xl font-bold mb-6">₹ 8,695.00</p>
           <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-gray-800">
             Add To Cart
         </button>
         </div>
       </div>
     </div>
   );
 }
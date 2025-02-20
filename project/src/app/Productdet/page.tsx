
import Image from "next/image";

export default function Product() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center">
        <div className="w-full flex justify-center md:w-1/2">
          <img
            src="/ProductDetailShoe.png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={500}
            height={500}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 md:w-1/2 md:mt-0 md:pl-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1,
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          <p className="text-xl sm:text-2xl font-bold mb-6">₹ 8,695.00</p>
          <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 w-full sm:w-auto">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

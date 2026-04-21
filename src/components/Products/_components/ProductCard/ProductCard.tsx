/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "@/lib/formatCurrency";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
// ========================================================================
function ProductCard({ product }: { product: any }) {
  return (
    <div className="p-5 rounded-2xl shadow-xl flex flex-col gap-4 ring ring-gray-50/20 bg-white/5 hover:shadow-2xl hover:scale-102 mytransition">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="mx-auto"
      />
      <h2 className="line-clamp-1 font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-300 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <button className="flex items-center bg-linear-to-r cursor-pointer hover:scale-105 mytransition from-indigo-500 to-pink-500 py-2 px-4 rounded-md gap-2 font-semibold text-sm">
          <ShoppingBag className="size-4.5" /> اضف
        </button>
        <p className="text-[#00d3f3] font-extrabold">
          {formatCurrency.format(product.price)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

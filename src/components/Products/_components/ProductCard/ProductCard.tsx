import { formatCurrency } from "@/lib/formatCurrency";
import { ProductDbType } from "@/lib/types";
import Image from "next/image";
import ButtonAddToCart from "./_components/ButtonAddToCart";
import { User } from "@prisma/client";
// ========================================================================
function ProductCard({ product,userSession }: { product: ProductDbType,userSession:User | null }) {
  return (
    <div className="sm:p-5 p-3 rounded-2xl shadow-xl flex flex-col gap-4 ring ring-gray-50/20 bg-white/5 hover:shadow-2xl hover:scale-102 mytransition">
      <div className="relative aspect-square bg-white rounded-2xl">
        <Image
          src={product.productImages[0].image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <h2 className="sm:line-clamp-1 line-clamp-2 font-semibold sm:text-[15px] text-sm">
        {product.name}
      </h2>
      <p className="sm:text-sm text-xs text-gray-300 sm:line-clamp-2 line-clamp-3 ">
        {product.description}
      </p>
      <div className="flex items-center justify-between flex-wrap-reverse gap-2">
        <ButtonAddToCart userSession={userSession} productId={product.id} />
        <p className="text-[#00d3f3] font-extrabold sm:text-[15px] text-sm">
          {formatCurrency.format(product.price)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

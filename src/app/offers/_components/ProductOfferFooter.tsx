import ButtonAddToCart from "@/components/ButtonAddToCart/ButtonAddToCart";
import { formatCurrency } from "@/lib/formatCurrency";
import { ProductDbType } from "@/lib/types";
import { User } from "@prisma/client";
// =================================================
function ProductOfferFooter({userSession,product}:{userSession:User | null ,product:ProductDbType}) {
  return (
    <div className="flex items-center justify-between">
      {product.stock > 0 ? (
        <>
          <ButtonAddToCart userSession={userSession} productId={product.id} />
          <div className="flex flex-col items-end">
            <p
              className={`text-[#00d3f3] font-extrabold sm:text-[15px] text-sm ${product.isOnSale && "line-through text-gray-400"}`}
            >
              {formatCurrency.format(product.price)}
            </p>
            {product.discountPrice && (
              <p className="text-[#00d3f3] font-extrabold sm:text-[18px]">
                {formatCurrency.format(product.discountPrice)}
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-red-400 font-bold">لم يعد متوفر حاليًا</p>
      )}
    </div>
  );
}

export default ProductOfferFooter;

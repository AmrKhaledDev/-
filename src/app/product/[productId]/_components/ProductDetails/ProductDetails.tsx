"use client";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import ProductImage from "./_components/ProductImage";
import ProductQuantity from "./_components/ProductQuantity";
import ProductCategory from "./_components/ProductCategory";
import { ProductDbType, UserSessionWithRelations } from "@/lib/types";
import { Check } from "lucide-react";
import { CreateUserProductAction } from "@/lib/Server_Actions/Create_Actions/CreateUserProduct.action";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ProductInfo from "./_components/ProductInfo";
import ProductImages from "./_components/ProductImages";
import ProductBrand from "./_components/ProductBrand";
// ===============================================================
function ProductDetails({
  product,
  userSession,
}: {
  product: ProductDbType;
  userSession: UserSessionWithRelations | null;
}) {
  const [productImage, setProductImage] = useState(
    product.productImages[0].image,
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const existingItem = userSession?.userProducts.find(
    (p) => p.productId === product.id,
  );
  const handle = async () => {
    if (!userSession) return redirect("/login");
    setLoading(true);
    const result = await CreateUserProductAction(
      userSession.id,
      product.id,
      quantity,
    );
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <div className="ring ring-gray-50/20 bg-white/5 p-5 rounded-2xl gap-4 min-h-100 flex flex-col">
      {existingItem && (
        <h2 className="flex items-center gap-2 font-bold text-green-400 flex-row-reverse text-sm w-fit">
          هذا المنتج في العربة <Check className="text-green-400 size-5" />
        </h2>
      )}

      <div className="flex justify-between gap-6">
        <div className="flex gap-2">
          {product.productImages.length > 1 && (
            <ProductImages
              product={product}
              setProductImage={setProductImage}
            />
          )}
          <ProductImage image={productImage} />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-3.5">
            <ProductBrand product={product} />
            <ProductInfo product={product} />
            <ProductCategory category={product.category.name} />
            {!existingItem && (
              <ProductQuantity
                quantity={quantity}
                setQuantity={setQuantity}
                product={product}
              />
            )}
          </div>
          {!existingItem && (
            <button
              disabled={loading}
              onClick={handle}
              className="py-2 not-disabled:bgg-ip disabled:bg-gray-100 select-none rounded not-disabled:cursor-pointer flex items-center gap-2 justify-center font-semibold"
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  أضف الى العربة <ShoppingBag />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

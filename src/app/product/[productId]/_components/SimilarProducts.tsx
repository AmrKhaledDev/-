import Products from "@/components/Products/Products";
import { ProductDbType } from "@/lib/types";
import { User } from "@prisma/client";
// ==========================================================
function SimilarProducts({products,userSession}:{products:ProductDbType[],userSession:User | null}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-xl">منتجات مشابهة</h2>
      <Products
        products={products}
        userSession={userSession}
      />
    </div>
  );
}

export default SimilarProducts;

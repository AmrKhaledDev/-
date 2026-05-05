import { ProductDbType } from "@/lib/types";
import { Search } from "lucide-react";
import Link from "next/link";
// ==============================================
function ProductsSuggestions({ products }: { products: ProductDbType[] }) {
  return (
    <div>
      {products.length > 0 && (
        <>
          <h2 className="text-gray-500 text-xs pr-3">اقتراحات المنتجات</h2>
          <ul className="h-30 overflow-y-auto">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.id}`}
                  className="hover:bgg-ip cursor-pointer flex items-center gap-2 p-3 text-sm hover:text-white"
                >
                  <Search className="text-gray-200 size-4.5" /> {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ProductsSuggestions;

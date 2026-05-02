import { Search } from "lucide-react";
import Link from "next/link";
// ==============================================
function ProductsSuggestions() {
  return (
    <div>
      <h2 className="text-gray-500 text-xs pr-3">اقتراحات المنتجات</h2>
      <ul className="h-30 overflow-y-auto">
        {[
          "Soundcore P30i by Anker Noise Cancelling Earbuds",
          "AULA F75 Pro Wireless Mechanical Keyboard",
          "Hakjay Sweatsuits for Men 2 Piece Hoodie Men's",
        ].map((product) => (
          <li key={product}>
            <Link
              href={""}
              className="hover:bgg-ip cursor-pointer flex items-center gap-2 p-3 text-sm hover:text-white"
            >
              <Search className="text-gray-200 size-4.5" /> {product}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsSuggestions;

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
// =====================================================
function ProductImage({ product }: { product:any }) {
  return (
    <div className="min-h-100 flex-1 ring ring-gray-50/25 bg-white/10 flex items-center justify-center rounded">
      <Image src={product.image} alt="product image" width={300} height={300} />
    </div>
  );
}

export default ProductImage;

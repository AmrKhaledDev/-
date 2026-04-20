/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./_components/ProductCard/ProductCard";
// ====================================================================
function Products({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Products;

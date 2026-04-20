import SectionHead from "@/components/SectionHead/SectionHead";
import { all_products, categories } from "../../../assets/data";
import ProductsWithFilter from "./_components/Products";
// ====================================================
function Categories() {
  return (
    <main className="section-p">
      <div className="mycontainer text-white section-flex">
        <SectionHead title="تسوق حسب الفئة" />
        <ProductsWithFilter categories={categories} products={all_products} />
      </div>
    </main>
  );
}

export default Categories;

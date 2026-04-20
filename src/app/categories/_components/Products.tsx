/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import FilterButtons from "./FilterButtons";
import Products from "@/components/Products/Products";
// ==============================================================
function ProductsWithFilter({
  products,
  categories,
}: {
  products: any[];
  categories: any[];
}) {
  const [category, setCategory] = useState("all");
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  return (
    <>
      <FilterButtons
        categories={categories}
        setCategory={setCategory}
        category={category}
      />
      <Products products={filteredProducts} />
    </>
  );
}

export default ProductsWithFilter;

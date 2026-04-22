/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import FilterButtons from "./FilterButtons";
import Products from "@/components/Products/Products";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 140 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Products products={filteredProducts} />
      </motion.div>
    </>
  );
}

export default ProductsWithFilter;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
// ============================================================
function FilterButtons({
  categories,
  category,
  setCategory,
}: {
  categories: any[];
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2"
    >
      <button
        onClick={() => setCategory("all")}
        className={`font-semibold hover:bgg-ip mytransition text-[17px] bg-black/15 py-3 px-6 shadow-xl ring ring-white/5 rounded-2xl 
            ${category === "all" ? "bgg-ip cursor-default" : "hover:scale-105  active:scale-95 cursor-pointer"}`}
      >
        الكل
      </button>
      {categories.map((cat) => (
        <button
          onClick={() => setCategory(cat.name)}
          className={`font-semibold hover:bgg-ip mytransition text-[17px] bg-black/15 py-3 px-6 shadow-xl ring ring-white/5 rounded-2xl   
                ${category === cat.name ? "bgg-ip cursor-default" : "hover:scale-105  active:scale-95 cursor-pointer"}`}
          key={cat.name}
        >
          {cat.name}
        </button>
      ))}
    </motion.div>
  );
}

export default FilterButtons;

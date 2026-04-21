/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dispatch, SetStateAction } from "react";
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
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => setCategory("all")}
        className={`font-semibold bg-linear-to-r  hover:from-indigo-500 hover:to-pink-500 mytransition text-[17px] bg-black/15 py-3 px-6 shadow-xl ring ring-white/5 rounded-2xl 
            ${category === "all" ? "from-indigo-500 to-pink-500 cursor-default" : "hover:scale-105  active:scale-95 cursor-pointer"}`}
      >
        الكل
      </button>
      {categories.map((cat) => (
        <button
          onClick={() => setCategory(cat.name)}
          className={`font-semibold bg-linear-to-r hover:from-indigo-500 hover:to-pink-500 mytransition text-[17px] bg-black/15 py-3 px-6 shadow-xl ring ring-white/5 rounded-2xl   
                ${category === cat.name ? "from-indigo-500 to-pink-500 cursor-default" : "hover:scale-105  active:scale-95 cursor-pointer"}`}
          key={cat.name}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

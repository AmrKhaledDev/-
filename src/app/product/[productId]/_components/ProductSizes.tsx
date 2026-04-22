"use client";

import { Dispatch, SetStateAction } from "react";

// ======================================
function ProductSizes({
  sizes,
  setSize,
  size,
}: {
  sizes: string[];
  setSize: Dispatch<SetStateAction<string>>;
  size: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2>الحجم : </h2>
      <div className="flex items-center gap-2">
        {sizes.map((s) => (
          <button
            onClick={() => setSize(s)}
            className={`p-2 ring ring-white rounded px-4 cursor-pointer active:scale-95 mytransition ${size === s && "bg-indigo-700"}`}
            key={s}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;

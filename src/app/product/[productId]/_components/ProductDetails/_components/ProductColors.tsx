"use client";

import { Dispatch, SetStateAction } from "react";

// =============================
function ProductColors({
  colors,
  setColor,
  color,
}: {
  colors: string[];
  setColor: Dispatch<SetStateAction<string>>;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2>اللون : </h2>
      <div className="flex items-center gap-2">
        {colors.map((c) => (
          <button
            onClick={() => setColor(c)}
            key={c}
            style={{ backgroundColor: c }}
            className={`size-6.5 rounded-full ${color === c && "ring-white scale-110 "} ring-2 ring-transparent  cursor-pointer hover:scale-105`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductColors;

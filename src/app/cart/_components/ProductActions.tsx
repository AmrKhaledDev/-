"use client";
import { Plus, Minus, Trash2 } from "lucide-react";
// ========================================================
function ProductActions({ quantity }: { quantity: number }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <Minus className="size-8 rounded-full p-2 bg-white/10 hover:bg-white/20 mytransition ring shadow ring-gray-50/20 flex items-center justify-center cursor-pointer active:scale-97" />
        <span className="font-serif text-xl">{quantity}</span>
        <Plus className="size-8 rounded-full p-2 bg-white/10 hover:bg-white/20 mytransition ring shadow ring-gray-50/20 flex items-center justify-center cursor-pointer active:scale-97" />
      </div>
      <Trash2 className="size-8 flex items-center justify-center bg-red-500 cursor-pointer hover:scale-103 active:scale-97 rounded-full p-2 shadow" />
    </div>
  );
}

export default ProductActions;

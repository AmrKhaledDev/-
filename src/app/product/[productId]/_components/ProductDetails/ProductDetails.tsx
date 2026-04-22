/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { formatCurrency } from "@/lib/formatCurrency";
import {  ShoppingBag } from "lucide-react";
import { useState } from "react";
import ProductImage from "./_components/ProductImage";
import ProductColors from "./_components/ProductColors";
import ProductSizes from "../ProductSizes";
import ProductQuantity from "./_components/ProductQuantity";
import ProductCategory from "./_components/ProductCategory";
// ===============================================================
function ProductDetails({ product }: { product: any }) {
  const colors = ["blue", "black", "white"];
  const sizes = ["S", "M", "L", "XL"];
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex justify-between ring ring-gray-50/20 bg-white/5 p-5 rounded-2xl gap-6 min-h-100">
      <ProductImage product={product} />
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="font-semibold text-4xl">{product.name}</h2>
        <p className="text-gray-300 font-normal text-sm">
          {product.description}
        </p>
        <p className="text-[#47b7e9] font-extrabold text-xl">
          {formatCurrency.format(product.price)}
        </p>
        <ProductCategory category={product.category} />
        <ProductColors color={color} setColor={setColor} colors={colors} />
        <ProductSizes setSize={setSize} size={size} sizes={sizes} />
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="py-2 bgg-ip select-none rounded cursor-pointer flex items-center gap-2 justify-center font-semibold">
          أضف الى العربة <ShoppingBag />
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
// =================================================
function PurchasedProductsList({ products }: { products: any[] }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        {products.map((p, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/5 ring ring-gray-50/20 py-3 px-10 rounded-md text-white"
          >
            <Image src={p.image} alt="product image" width={111} height={111} />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-[17px]">{p.name}</h2>
              <p className="text-gray-400 text-sm">{p.description}</p>
              <p className="font-bold text-cyan-300 text-xl">
                {formatCurrency.format(p.price)}
              </p>
              <div className="flex items-center gap-2">
                <p>الكمية : </p>
                <p className="size-6 flex items-center justify-center rounded-full ring ring-gray-50/20 bg-white/5 text-sm font-serif">
                  2
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-white/5 ring ring-gray-50/20 rounded-md text-white flex items-center justify-between font-bold">
        مجموع الشراء :
        <span className="bg-white/10 ring ring-gray-50/30 font-extrabold py-2 px-6 rounded text-cyan-400">
          {formatCurrency.format(3000)}
        </span>
      </div>
    </div>
  );
}

export default PurchasedProductsList;

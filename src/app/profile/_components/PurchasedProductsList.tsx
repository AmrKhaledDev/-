"use client";
import ProfileProductCard from "@/components/ProfileProductCard/ProfileProductCard";
import { formatCurrency } from "@/lib/formatCurrency";
import { OrderDbType } from "@/lib/types";
// =================================================
function PurchasedProductsList({ orders }: { orders: OrderDbType[] }) {
  const totalPrice = orders.reduce((acc, order) => acc + order.totalPrice, 0);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        {orders.map((order) =>
          order.items.map((item) => <ProfileProductCard product={item} />),
        )}
      </div>
      <div className="p-3 bg-white/5 w-140 ring ring-gray-50/20 rounded-md text-white flex items-center justify-between font-bold">
        <p className="flex items-center gap-2">
          مجموع الشراء :
          <span className="text-xs font-bold">
            (شامل الضريبة ومصاريف الشحن)
          </span>
        </p>
        <span className="bg-white/10 ring ring-gray-50/30 font-extrabold py-2 px-6 rounded text-cyan-400">
          {formatCurrency.format(Number(totalPrice))}
        </span>
      </div>
    </div>
  );
}

export default PurchasedProductsList;

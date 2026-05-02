"use client";
import OrderCard from "@/components/OrderCard/OrderCard";
import { OrderDbType } from "@/lib/types";

// =================================================
function OrderProductsList({ orders }: { orders: OrderDbType[] }) {
  return (
    <div className="flex flex-col gap-10 max-w-200 text-white">
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
}

export default OrderProductsList;

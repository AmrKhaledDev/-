import SectionHead from "@/components/SectionHead/SectionHead";
import { formatCurrency } from "@/lib/formatCurrency";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
import { redirect } from "next/navigation";
import OrderForm from "./_components/OrderForm";
import Orders from "./_components/Orders";
import { Metadata } from "next";
// =============================================================
export const metadata: Metadata = {
  title: "إتمام الطلب",
  description: "أدخل بياناتك لإنشاء طلب جديد في متجر لُقطة وإتمام عملية الشراء بسهولة.",
};
async function Order() {
  const userSession = await GetUserSessionWithRelations();
  if (!userSession) return redirect("/login");
  const subTotal = userSession.userProducts.reduce(
    (acc, p) => acc + p.priceAtAdd * p.quantity,
    0,
  );
  const TAX_RATE = 0.14;
  const SHIPPING_FEE = 50;
  const taxPrice = subTotal * TAX_RATE;
  const finalTotal = subTotal + taxPrice + SHIPPING_FEE;
  return (
    <main className="section-p text-white">
      <div className="mycontainer section-flex">
        <SectionHead title="إتمام الطلب" />
        <Link
          href={"/cart"}
          className="ring ring-gray-50/20 flex items-center gap-3 py-3 px-10 hover:bg-white/15 mytransition hover:ring-gray-50/35 rounded-md w-fit font-semibold bg-white/5"
        >
          تعديل المنتجات <ShoppingBag />
        </Link>
        <div className="flex gap-10">
          <div className="w-130">
            <Orders userSession={userSession} />
            <div className="mt-10 flex items-center gap-3">
              <p>
                المجموع الكُلي
                <span className="text-xs mr-1 font-semibold">
                  (شامل الضريبة ومصاريف الشحن)
                </span>
                :
              </p>
              <span className="font-semibold text-xl ring ring-gray-50/20 bg-white/5 rounded py-3 px-6">
                {formatCurrency.format(subTotal ? Number(finalTotal) : 0)}
              </span>
            </div>
          </div>
          <OrderForm userSession={userSession} />
        </div>
      </div>
    </main>
  );
}

export default Order;

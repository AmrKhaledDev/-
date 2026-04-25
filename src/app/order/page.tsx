import SectionHead from "@/components/SectionHead/SectionHead";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency";
import OrderFormField from "./_components/OrderFormField";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
import { redirect } from "next/navigation";
// =============================================================
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
            <div className="flex flex-col gap-2">
              {userSession.userProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-5 rounded-2xl group shadow-xl flex items-center gap-6 ring ring-gray-50/20 bg-white/5"
                >
                  <div className="p-2 rounded-md ring shadow ring-gray-50/20 bg-white/5">
                    <div className="relative size-30 overflow-hidden rounded-md bg-white group-hover:scale-105 mytransition ">
                      <Image
                        src={product.product.productImages[0].image}
                        alt={product.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">
                      {product.product.name}
                    </h2>
                    <p className="flex items-center gap-2">
                      الكمية :
                      <span className="size-6 flex items-center justify-center rounded-full ring ring-gray-50/20 bg-white/5">
                        {product.quantity}
                      </span>
                    </p>
                    <p className="font-semibold text-xl text-[#75c2de]">
                      {formatCurrency.format(product.priceAtAdd)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-3">
              <p>
                المجموع الكُلي
                <span className="text-xs mr-1 font-semibold">(شامل الضريبة ومصاريف الشحن)</span>  :
              </p>
              <span className="font-semibold text-xl ring ring-gray-50/20 bg-white/5 rounded py-3 px-6">
                {formatCurrency.format(Number(finalTotal))}
              </span>
            </div>
          </div>
          <form className="p-5 rounded-2xl flex-1 shadow-xl flex flex-col gap-5 ring ring-gray-50/20 bg-white/5">
            <h2 className="font-semibold text-center text-xl mb-3">
              بيانات الشحن
            </h2>
            <OrderFormField placeholder="الاسم الكامل" />
            <OrderFormField placeholder="العنوان الكامل" />
            <OrderFormField placeholder="المدينة" />
            <OrderFormField placeholder="رقم الهاتف" />
            <button className="bgg-ip py-3 active:scale-96 mytransition rounded shadow cursor-pointer">
              تأكيد الطلب
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Order;

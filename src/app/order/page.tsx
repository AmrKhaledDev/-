import SectionHead from "@/components/SectionHead/SectionHead";
import product_1 from "../../../assets/product_1.png";
import product_2 from "../../../assets/product_2.png";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency";
import OrderFormField from "./_components/OrderFormField";

// =============================================================
function Order() {
  const userProducts = [
    {
      _id: "1",
      name: "بلوزة مخططة أنيقة بأكمام رفرفة وياقة متداخلة",
      image: product_1,
      price: 120.0,
      description:
        "ارتقِ بأسلوبك مع هذه البلوزة الأنيقة والمميزة، تتميز بأكمام رفرفة وحاشية بيبلم جذابة.",
      category: "رجال",
    },
    {
      _id: "2",
      name: "فستان صيفي أنيق بنقشة الزهور مع حزام وفتحة رقبة V",
      image: product_2,
      price: 180.0,
      description:
        "استقبلي الصيف بفستاننا المطبوع بالزهور، المصمم خصيصاً للراحة والرقي.",
      category: "رجال",
    },
  ];
  return (
    <main className="section-p text-white">
      <div className="mycontainer section-flex">
        <SectionHead title="المنتجات الخاصة بك" />
        <div className="flex gap-10">
          <div>
            <div className="flex flex-col gap-2">
              {userProducts.map((product) => (
                <div
                  key={product._id}
                  className="p-5 rounded-2xl group shadow-xl flex items-center gap-5 ring ring-gray-50/20 bg-white/5"
                >
                  <div className="p-4 rounded ring shadow ring-gray-50/20 bg-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="group-hover:scale-105 mytransition"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">{product.name}</h2>
                    <p className="flex items-center gap-2">
                      الكمية :{" "}
                      <span className="size-6 flex items-center justify-center rounded-full ring ring-gray-50/20 bg-white/5">
                        2
                      </span>
                    </p>
                    <p className="font-semibold text-xl text-[#75c2de]">
                      {formatCurrency.format(product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 flex items-center gap-3">
              المجموع الكلي :{" "}
              <span className="font-semibold text-xl ring ring-gray-50/20 bg-white/5 rounded py-3 px-6">
                {formatCurrency.format(1100)}
              </span>
            </p>
          </div>
          <form className="p-5 rounded-2xl flex-1 shadow-xl flex flex-col gap-5 ring ring-gray-50/20 bg-white/5">
            <h2 className="font-semibold text-center text-xl mb-3">
              بيانات الشحن
            </h2>
            <OrderFormField placeholder="الاسم الكامل" />
            <OrderFormField placeholder="العنوان الكامل" />
            <OrderFormField placeholder="المدينة" />
            <OrderFormField placeholder="رقم الهاتف" />
            <button className="bg-linear-to-r from-indigo-600  to-pink-600 py-3 active:scale-96 mytransition rounded shadow cursor-pointer">
              تأكيد الطلب
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Order;

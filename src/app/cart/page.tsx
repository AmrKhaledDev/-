import SectionHead from "@/components/SectionHead/SectionHead";
import product_1 from "../../../assets/product_1.png";
import product_2 from "../../../assets/product_2.png";
import product_3 from "../../../assets/product_3.png";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency/formatCurrency";
import { Plus, Minus, Trash2, CreditCard } from "lucide-react";
// ====================================================
function Cart() {
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
    {
      _id: "3",
      name: "بليزر طويل كلاسيكي بصفين من الأزرار",
      image: product_3,
      price: 160.0,
      description:
        "تألقي بالأناقة والعملية مع هذا البليزر النسائي، مثالي للانتقال من إطلالة النهار إلى المساء.",
      category: "رجال",
    },
  ];
  return (
    <main className="section-p text-white pb-5">
      <div className="mycontainer section-flex">
        <SectionHead title="سلة التسوق الخاص بك" />
        <div className="flex flex-col gap-5">
          {userProducts.map((product) => (
            <div
              key={product._id}
              className="p-5 rounded-2xl shadow-xl flex items-center gap-5 ring ring-gray-50/20 bg-white/5 hover:shadow-2xl  mytransition"
            >
              <div className="p-3 ring ring-gray-50/20 bg-white/5 rounded shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={170}
                  height={170}
                  className="hover:scale-105 mytransition "
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="font-semibold text-xl">{product.name}</h2>
                <p className="text-gray-300 font-normal">
                  {product.description}
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#00d3f3] font-extrabold text-xl">
                    {formatCurrency.format(product.price)}
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Minus className="size-8 rounded-full p-2 bg-white/10 hover:bg-white/20 mytransition ring shadow ring-gray-50/20 flex items-center justify-center cursor-pointer active:scale-97" />
                      <span className="font-serif text-xl">10</span>
                      <Plus className="size-8 rounded-full p-2 bg-white/10 hover:bg-white/20 mytransition ring shadow ring-gray-50/20 flex items-center justify-center cursor-pointer active:scale-97" />
                    </div>
                    <Trash2 className="size-8 flex items-center justify-center bg-red-500 cursor-pointer hover:scale-103 active:scale-97 rounded-full p-2 shadow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 rounded-2xl shadow-xl flex items-center justify-between gap-5 ring ring-gray-50/20 bg-white/5 text-[17px]">
          <h2 className="font-extrabold flex items-center gap-4">
            المجموع الكلي : 
            <span className="text-white ring ring-gray-50/20 shadow bg-white/5 py-2 px-6 rounded-md font-extrabold text-xl">
              {formatCurrency.format(1600)}
            </span>
          </h2>
          <button className="bg-linear-to-r hover:scale-103 active:scale-90 mytransition from-indigo-500 to-pink-500 py-3 px-4 rounded-md shadow font-semibold flex items-center gap-2 cursor-pointer">
            متابعة الشراء <CreditCard />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;

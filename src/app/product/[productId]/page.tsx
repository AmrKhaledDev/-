import Link from "next/link";
import product_1 from "../../../../assets/product_1.png";
import ProductDetails from "./_components/ProductDetails/ProductDetails";
import ProductOpinions from "./_components/ProductOpinions/ProductOpinions";
import { GetUserSession } from "@/lib/Sessions/GetUserSession";

// ========================================================
async function Product() {
  const product = {
    _id: "1",
    name: "بلوزة مخططة أنيقة بأكمام رفرفة وياقة متداخلة",
    image: product_1,
    price: 120.0,
    description:
      "ارتقِ بأسلوبك مع هذه البلوزة الأنيقة والمميزة، تتميز بأكمام رفرفة وحاشية بيبلم جذابة.",
    category: "رجال",
    users: [
      {
        id: "1",
        name: "Amr Khaled",
        image:
          "https://i.pinimg.com/1200x/49/26/32/492632cea650cced53271c48c66be4b5.jpg",
        opinion: "منتج قوي جداً ويستحق",
        star: 2,
      },
      {
        id: "2",
        name: "Yaser Ahmed",
        image:
          "https://i.pinimg.com/736x/06/d9/2c/06d92c5cc7867b9dd03650999e93fc0e.jpg",
        opinion: "خدمه ممتازه احسنتم!",
        star: 4,
      },
      {
        id: "3",
        name: "Mohammed Gamal",
        image: "",
        opinion: "خدمه ممتازه احسنتم!",
        star: 3,
      },
    ],
  };
  const userSession = await GetUserSession();
  return (
    <main className="section-p text-white">
      <div className="mycontainer flex flex-col gap-10">
        {!userSession && (
          <Link
            href={"/login"}
            className="bg-white/5 ring ring-red-500/20 text-red-500 py-2 px-5 rounded text-sm text-center"
          >
            سجل الدخول لترك رأيك عن هذا المنتج
          </Link>
        )}
        <ProductDetails product={product} />
        <ProductOpinions users={product.users} userSession={userSession} />
      </div>
    </main>
  );
}

export default Product;

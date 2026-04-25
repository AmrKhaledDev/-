import SectionHead from "@/components/SectionHead/SectionHead";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
import TotalPrice from "./_components/TotalPrice";
import { redirect } from "next/navigation";
import Products from "./_components/Products";
// ====================================================
async function Cart() {
  const userSession = await GetUserSessionWithRelations();
  if (!userSession) return redirect("/login");
  const totalPrice = userSession.userProducts.reduce(
    (acc, p) => acc + p.priceAtAdd * p.quantity,
    0,
  );
  return (
    <main className="section-p text-white">
      <div className="mycontainer section-flex">
        <SectionHead title="سلة التسوق الخاص بك" />
        <Products products={userSession.userProducts} />
        <TotalPrice totalPrice={Number(totalPrice)} />
      </div>
    </main>
  );
}

export default Cart;

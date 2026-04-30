import SectionHead from "@/components/SectionHead/SectionHead";
import { getProductsOffers } from "@/lib/Db/getProductsOffers";
import { GetUserSession } from "@/lib/Sessions/GetUserSession";
import { Metadata } from "next";
import ProductsOffers from "./_components/ProductsOffers";
// =================================================================
export const metadata: Metadata = {
  title: "الخصومات",
  description:
    "اكتشف أحدث الخصومات والعروض في متجر لُقطة ووفّر على مشترياتك من مختلف المنتجات بأسعار مميزة لفترة محدودة.",
};
async function Offers() {
  const productsOffers = await getProductsOffers();
  const userSession = await GetUserSession();
  return (
    <main className="section-p text-white">
      <div className="mycontainer section-flex space-y-5">
        <SectionHead
          title="الخصومات"
          subtitle="فرصتك الذهبية للتوفير أوشكت على الانتهاء، استمتع بخصوماتنا الحصرية الآن قبل أن تعود الأسعار لوضعها الطبيعي."
        />
        <ProductsOffers userSession={userSession} products={productsOffers} />
      </div>
    </main>
  );
}

export default Offers;

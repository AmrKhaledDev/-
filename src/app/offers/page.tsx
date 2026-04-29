import Products from "@/components/Products/Products";
import SectionHead from "@/components/SectionHead/SectionHead";
import { Metadata } from "next";
// =================================================================
export const metadata: Metadata = {
  title: "الخصومات",
  description: "اكتشف أحدث الخصومات والعروض في متجر لُقطة ووفّر على مشترياتك من مختلف المنتجات بأسعار مميزة لفترة محدودة.",
};
function Offers() {
  return (
    <main className="section-p">
      <div className="mycontainer section-flex">
        <SectionHead
          title="الخصومات"
          subtitle="فرصتك الذهبية للتوفير أوشكت على الانتهاء، استمتع بخصوماتنا الحصرية الآن قبل أن تعود الأسعار لوضعها الطبيعي."
        />
        {/* <Products/> */}
      </div>
    </main>
  );
}

export default Offers;
import Products from "@/components/Products/Products";
import SectionHead from "@/components/SectionHead/SectionHead";
// =================================================================
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
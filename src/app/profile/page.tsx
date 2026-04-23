import { GetUserSession } from "@/lib/GetUserSession";
import product_5 from "../../../assets/product_5.png";
import product_6 from "../../../assets/product_6.png";
import product_7 from "../../../assets/product_7.png";
import product_8 from "../../../assets/product_8.png";
import ProfileDetails from "./_components/ProfileDetails";
import { redirect } from "next/navigation";
// ================================================================
async function Profile() {
  const productBought = [
    {
      _id: "5",
      name: "تنورة ميدي عصرية بخصر عالٍ وتفاصيل أزرار",
      image: product_5,
      price: 250.0,
      description:
        "أضيفي لمسة مميزة لخزانتك مع هذه التنورة المصممة للمرأة العصرية المحبة للموضة.",
      category: "رجال",
    },
    {
      _id: "6",
      name: "حقيبة يد شيك بقطع معدنية ذهبية وحزام قابل للفصل",
      image: product_6,
      price: 140.0,
      description:
        "أكملي مظهرك بهذه الحقيبة المصممة لتكون أنيقة وعملية للاستخدام اليومي.",
      category: "رجال",
    },
    {
      _id: "7",
      name: "حذاء ستيلتو أنيق بمقدمة مدببة وحزام كاحل",
      image: product_7,
      price: 180.0,
      description:
        "انطلقي بثقة مع هذا الحذاء المصنوع ليوفر الراحة والأناقة في كل خطوة.",
      category: "رجال",
    },
    {
      _id: "8",
      name: "معطف شتوي أنيق بقلنسوة وفراء صناعي",
      image: product_8,
      price: 150.0,
      description:
        "ابقَ دافئاً وأنيقاً مع هذا المعطف الشتوي الذي يجمع بين الموضة والوظيفة العملية.",
      category: "رجال",
    },
  ];
  const userSession = await GetUserSession();
  if (!userSession) return redirect("/login");
  return (
    <main className="section-p">
      <div className="mycontainer">
        <ProfileDetails products={productBought} />
      </div>
    </main>
  );
}

export default Profile;

import { Truck, Headphones, RefreshCcw, ShieldCheck } from "lucide-react";
// ===============================================================================
function Features() {
  const features = [
    {
      Icon: Truck,
      title: "شحن مجاني",
      desc: "على الطلبات فوق 100$ في جميع أنحاء العالم.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      Icon: ShieldCheck,
      title: "ضمان المنتجات",
      desc: "استبدال أو استرجاع مجاني خلال 14 يوم.",
      color: "from-green-400 to-emerald-500",
    },
    {
      Icon: RefreshCcw,
      title: "إرجاع سهل",
      desc: "إجراءات بسيطة وسريعة خلال دقائق.",
      color: "from-purple-500 to-pink-500",
    },
    {
      Icon: Headphones,
      title: "دعم 24/7",
      desc: "فريقنا جاهز لمساعدتك في أي وقت.",
      color: "from-yellow-400 to-orange-500",
    },
  ];
  return (
    <section className="flex items-center justify-center flex-col gap-15">
      <h2 className="font-extrabold text-white text-5xl">لماذا تختارنا؟</h2>
      <ul className="flex items-center gap-8 text-white">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="shadow ring ring-white/30 py-10 w-70 hover:scale-105 bg-white/15 hover:shadow-2xl transition-all duration-150 rounded-2xl flex flex-col gap-4 items-center hover:shadow-cyan-600/30"
          >
            <feature.Icon
              className={`bg-linear-to-r p-3 size-20 rounded-2xl ${feature.color}`}
            />
            <h2 className="font-bold text-2xl">{feature.title}</h2>
            <p className="max-w-[70%] text-center">{feature.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;

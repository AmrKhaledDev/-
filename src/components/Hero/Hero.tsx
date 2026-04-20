import Image from "next/image";
import Links from "./_components/Links";
// ==============================================
function Hero() {
  return (
    <section className="h-[90vh] text-white">
      <div className="flex h-full justify-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="block size-4 bg-indigo-100 rounded-full animate-bounce"/>
            <span className="block w-25 h-1 bg-indigo-100 rounded-full"/>
          </div>
          <h1
            title="اكتشف أحدث المنتجات
مع أفضل التخفيضات!"
            className="font-extrabold text-5xl leading-snug"
          >
            اكتشف أحدث المنتجات <br /> مع أفضل التخفيضات!
          </h1>
          <p
            title="تسوق الآن واستمتع بعروض لا تُفوّت على الإلكترونيات، الأزياء،
            والمنتجات المميزة. احصل على خصومات تصل حتى 50% لفترة محدودة!"
            className="font-normal text-gray-300 w-[80%]"
          >
            تسوق الآن واستمتع بعروض لا تُفوّت على الإلكترونيات، الأزياء،
            والمنتجات المميزة. احصل على خصومات تصل حتى 50% لفترة محدودة!
          </p>
          <Links />
        </div>
        <div className="w-fit h-fit rounded-3xl overflow-hidden relative">
          <Image src={"/hero-bg.jpg"} alt="hero" width={400} height={400} />
          <span className="bg-red-400 py-1 text-sm px-3 rounded-full absolute top-2 left-2">
            خصم حتى 50%
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

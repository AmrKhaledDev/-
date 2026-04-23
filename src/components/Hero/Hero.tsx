"use client";
import Image from "next/image";
import Links from "./_components/Links";
import { motion } from "framer-motion";
// ==============================================
function Hero() {
  return (
    <section className="h-[88vh] text-white">
      <div className="flex h-full justify-center items-center">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="block size-4 bg-indigo-100 rounded-full animate-bounce" />
            <span className="block w-25 h-1 bg-indigo-100 rounded-full" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            title="أكتشف أحدث المنتجات مع أفضل التخفيضات"
            className="font-extrabold text-5xl leading-snug"
          >
            اكتشف أحدث المنتجات <br /> مع أفضل التخفيضات!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            title="تسوق الآن واستمتع بعروض لا تُفوّت على الإلكترونيات، الأزياء،
            والمنتجات المميزة. احصل على خصومات تصل حتى 50% لفترة محدودة!"
            className="font-normal text-gray-300 w-[80%]"
          >
            تسوق الآن واستمتع بعروض لا تُفوّت على الإلكترونيات، الأزياء،
            والمنتجات المميزة. احصل على خصومات تصل حتى 50% لفترة محدودة!
          </motion.p>
          <Links />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-fit h-fit rounded-3xl overflow-hidden relative"
        >
          <Image
            src={"/hero-bg.jpg"}
            alt="hero"
            width={400}
            height={400}
            className="w-100 min-h-50"
          />
          <span className="bg-red-400 py-1 text-sm px-3 rounded-full absolute top-2 left-2">
            خصم حتى 50%
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

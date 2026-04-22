"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
// ==================================================
function Links() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 250 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <Link
        href={""}
        title="تسوق الآن"
        className="flex items-center gap-2 w-fit bg-indigo-500 py-3 px-6 rounded-md font-semibold shadow hover:scale-105 active:scale-95 mytransition"
      >
        تسوق الآن <ShoppingCart />
      </Link>
      <Link
        href={"/categories"}
        title="تصفح الفئات"
        className="w-fit ring ring-gray-50/20 bg-white/5 py-3 px-6 rounded-md font-semibold shadow mytransition hover:scale-105 active:scale-95"
      >
        تصفح الفئات
      </Link>
    </motion.div>
  );
}

export default Links;

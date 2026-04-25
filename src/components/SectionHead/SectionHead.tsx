"use client";
import { motion } from "framer-motion";
// ===================================
function SectionHead({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center gap-3"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-extrabold text-white">{title}</h1>
      {subtitle && <p className="font-normal text-gray-300 sm:text-[15px] text-xs sm:text-start text-center">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHead;

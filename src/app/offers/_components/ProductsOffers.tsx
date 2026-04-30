"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ProductDbType } from "@/lib/types";
import Link from "next/link";
import { User } from "@prisma/client";
import ProductOfferImage from "./ProductOfferImage";
import ProductOfferFooter from "./ProductOfferFooter";
import LowStockWarning from "@/components/LowStockWarning/LowStockWarning";
// ==================================================
function ProductsOffers({
  products,
  userSession,
}: {
  products: ProductDbType[];
  userSession: User | null;
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={"auto"}
      className="w-full py-3!"
    >
      {products.map((p) => {
        let discountPercentage = null;
        if (p.price && p.discountPrice && p.price > p.discountPrice) {
          discountPercentage = Math.round(
            ((p.price - p.discountPrice) / p.price) * 100,
          );
        }
        return (
          <SwiperSlide
            key={p.id}
            className="ring hover:shadow-2xl flex! hover:-translate-y-1 flex-col gap-4 h-fit! w-60! ring-gray-50/20 bg-white/5 mytransition! p-5  rounded-2xl"
          >
            <ProductOfferImage product={p} />
            <Link
              href={p.stock > 0 ? `/product/${p.id}` : ""}
              className={`sm:line-clamp-1 line-clamp-2 ${p.stock > 0 ? "hover:underline" : "cursor-default"} font-semibold sm:text-[15px] text-sm`}
            >
              {p.name}
            </Link>
            <p className="sm:text-sm text-xs text-gray-300 sm:line-clamp-2 line-clamp-3 ">
              {p.description}
            </p>
            <ProductOfferFooter userSession={userSession} product={p} />
            <LowStockWarning product={p} />
            <span className="absolute top-1 shadow left-1 bg-red-500 py-1 px-3 rounded-full font-extrabold text-xs">
              خصم {discountPercentage || 0}%
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductsOffers;

"use client";

import { useRef, memo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { products } from "../../../app/api/data";
import ProductCard from "../ProductCard";
import type { PromoSectionProps } from "../../../app/api/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const PromoSection = memo(({ className = "" }: PromoSectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={className}>
      <Image
        src="/images/banner-full.png"
        alt="banner"
        width={1440}
        height={500}
        priority
      />
      <div className="relative bg-[#025FCA] py-14 px-12 rounded-b-xl overflow-visible">
        <div className="overflow-hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.slice(0, 10).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Prev Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className="absolute left-[3rem] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-[#CDE4FE] p-2 rounded-full shadow-lg text-[#013065]
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className="absolute right-[3rem] top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-[#CDE4FE] p-2 rounded-full shadow-lg text-[#013065]
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
});

PromoSection.displayName = "PromoSection";
export default PromoSection;

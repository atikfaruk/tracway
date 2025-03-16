"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// import required modules
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";

const OfferSection = () => {
  const offers = ["/offer.webp", "/offer2.webp"];

  return (
    <section className="content grid-12 mb-28 laptop:mb-24 mobile:mb-20 mt-12 laptop:mt-8">
      <Swiper
        zoom
        loop
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        modules={[EffectFade, Autoplay, Pagination]}
        className="col-span-8 col-start-3 mobile:col-span-full w-full aspect-[21/9] rounded-2xl bg-black relative overflow-hidden"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="w-full h-full absolute inset-0">
            <Image src={offer} alt="offer" fill sizes="100vw" className="w-full h-full object-cover -z-[1]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OfferSection;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { heroBg } from "@/data/HeroBg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const styles = {
  container: "w-full h-full",
  slide: "h-full w-full relative",
  cover: "h-full w-full object-cover",
};

const HeroSlider = () => (
  <Swiper
    loop
    autoplay={{
      delay: 8000,
      disableOnInteraction: false,
    }}
    effect="fade"
    modules={[EffectFade, Autoplay]}
    className={styles.container}
  >
    {/* backgrounds */}
    {heroBg.map((bg, index) => (
      <SwiperSlide key={index} className={styles.slide}>
        {/* cover */}
        <video autoPlay loop muted width={1920} height={1080} className={styles.cover}>
          <source src={bg.cover} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HeroSlider;

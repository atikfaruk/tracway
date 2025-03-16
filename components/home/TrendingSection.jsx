"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Card, CardBody, CardHeader } from "@/material";
import Image from "next/image";
import useDimension from "@/hooks/useDimension";

const TrendingSection = () => {
  const { windowWidth } = useDimension();

  // trending section styles
  const styles = {
    section: "grid-12 px-5 mb-28 laptop:mb-24 mobile:mb-20",
    wrapper: "col-span-full",

    heading: "col-span-full heading-02 text-center mb-12 laptop:mb-10 mobile:mb-8",
  };

  return (
    <section className={styles.section}>
      {/* title */}
      <h2 className={styles.heading}>Trending Destinations</h2>
      <div className={styles.wrapper}>
        {/* trendings */}
        <Swiper slidesPerView={windowWidth > 768 ? 4 : 2} spaceBetween={16} className="w-full">
          {Array.from({ length: 7 }).map((_, index) => (
            <SwiperSlide key={index} className="">
              <Card
                shadow={false}
                className="relative grid w-full aspect-[3/4] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none p-0"
                >
                  <Image
                    src="https://images.pexels.com/photos/30747600/pexels-photo-30747600/free-photo-of-modern-tokyo-skyline-with-river-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="abc"
                    fill
                    sizes="33vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative w-full py-12 laptop:py-10 mobile:py-4">
                  <h4 className="heading-03 text-white">Australia</h4>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {windowWidth < 768 && (
          <Swiper slidesPerView={windowWidth > 768 ? 4 : 2} spaceBetween={16} className=" mt-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  shadow={false}
                  className="relative grid w-full aspect-[3/4] items-end justify-center overflow-hidden text-center"
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none p-0"
                  >
                    <Image
                      src="https://images.pexels.com/photos/30747600/pexels-photo-30747600/free-photo-of-modern-tokyo-skyline-with-river-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="abc"
                      fill
                      sizes="33vw"
                      className="w-full h-full object-cover"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                  </CardHeader>
                  <CardBody className="relative w-full py-12 laptop:py-10 mobile:py-4">
                    <h4 className="heading-03 text-white">Indonesia</h4>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default TrendingSection;

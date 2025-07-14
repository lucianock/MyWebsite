import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { clientimages } from "@/staticData/elements/elements";
import Link from "next/link";
import Image from "next/image";
import useThemeContext from "@/hooks/useThemeContext";

const ClientsLogo = () => {
  const { rtl } = useThemeContext();

  return (
    <div className="clients section-gap">
      <div className="container">
        <div className="section-title">
          <h3 className="subtitle">OUR CLIENT LOGO</h3>
        </div>
        <div className="clientCarousel owl-carousel">
          <Swiper
            dir={rtl ? "ltr" : "ltr"}
            breakpoints={{
              // when window width is >= 400px
              350: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              // when window width is >= 692px
              692: {
                slidesPerView: 2,
              },
              // when window width is >= 800px
              892: {
                slidesPerView: 3,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={4}
            // slidesPerView={"auto"}
            spaceBetween={40}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className={`mySwiper`}
            style={{ padding: "0 10px" }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              waitForTransition: false,
            }}
            loop={true}
          >
            {clientimages?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="item">
                  <Link href={item?.url}>
                    <Image
                      src={item?.image}
                      alt="Our Client"
                      width={300}
                      height={200}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;

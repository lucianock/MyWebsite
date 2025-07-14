import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useEffect, useState } from "react";
import { feebackUsers } from "@/staticData/home/home";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import useThemeContext from "@/hooks/useThemeContext";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [intialLoop, setIntialLoop] = useState(false);
  const { rtl } = useThemeContext();

  const handleOnSetSwiper = (index) => {
    if (swiper && activeSlide !== index) {
      swiper.slideToLoop(index);
      setIntialLoop(true);
    }
  };

  const autoToSlide = () => {
    const initialIndex = 1; // Set the desired initial index
    if (swiper && !intialLoop) {
      swiper.slideToLoop(initialIndex);
      setIntialLoop(true);
    }
    setActiveSlide(initialIndex);
  };

  useEffect(() => {
    autoToSlide();
  }, [swiper]);

  const handleSlideChange = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;

    setActiveSlide(realIndex);
  };

  return (
    <div className="feedback" data-title="Feedback" id="feedback">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>Feedback</span>
          </h2>
        </div>
        <div className="feedbackNav">
          <Swiper
            dir={rtl ? "ltr" : "ltr"}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={isMobile ? 15 : 40}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              // depth: 132,
              depth: 0,
              modifier: 1,
              slideShadows: true,
            }}
            // loop={true}
            speed={500}
            // pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
          >
            {feebackUsers?.map((user, index) => (
              <SwiperSlide
                key={index}
                className="navItem"
                onClick={() => handleOnSetSwiper(index)}
              >
                <Image
                  src={user?.image}
                  alt={user?.alt}
                  width={200}
                  height={200}
                  className="img-fluid w-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="feedbackCarousel">
          {feebackUsers?.map((user, i) => (
            <div
              key={user?.id}
              className="item"
              style={{ display: activeSlide !== i ? "none" : "block" }}
            >
              <div className="details">
                <p className="speech">{user?.speech}</p>
                <div className="feedback-footer">
                  <h3 className="name">{user?.name}</h3>
                  <p className="designation">{user?.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

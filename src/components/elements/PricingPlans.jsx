import { plans } from "@/staticData/elements/elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const PricingPlans = () => {
  return (
    <div className="pricing-plan section-gap">
      <div className="container">
        <div className="section-title">
          <h3 className="subtitle">OUR PRICING PLAN</h3>
        </div>

        {/* pricing-carousel class name is changed into pricing for rendering issue */}
        <div className="pricing">
          <Swiper
            breakpoints={{
              // when window width is >= 400px
              350: {
                slidesPerView: 1,
              },
              // when window width is >= 692px
              692: {
                slidesPerView: 2,
              },
              // when window width is >= 800px
              892: {
                slidesPerView: 2,
              },
              // when window width is >= 1100px
              1200: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={5}
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
            // loop={true}
          >
            {plans?.map((plan) => (
              <SwiperSlide key={plan?.id}>
                <div
                  className={`${plan?.type.toLowerCase()} pricing-plan-item`}
                >
                  <div className="pricing-header">
                    <div className="icon">
                      <Image
                        src={plan?.image}
                        alt={`${
                          plan?.type[0].toUpperCase() +
                          plan?.type?.slice(1).toLowerCase()
                        } plan`}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h2>
                      <span>${plan?.price}</span>
                      {plan?.type}
                    </h2>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      {plan?.benefits?.map((benefit, i) => (
                        <li key={i}>
                          <span className="icon-check">
                            <IoMdCheckmark size={18} />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-footer text-center">
                    <Link href="#" className="theme-btn">
                      ORDER NOW <BsArrowRight className="ms-2" size={25} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;

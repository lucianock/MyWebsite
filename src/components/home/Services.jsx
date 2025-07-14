import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { services } from '@/staticData/home/home';
import SecondaryButton from '../ui/SecondaryButton';
import useThemeContext from '@/hooks/useThemeContext';

const Services = () => {
  const { mode, setMode, rtl, setRtl } = useThemeContext();

  return (
    <div className="service" data-title="Services" id="service">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>Services</span>
          </h2>
        </div>

        <div className="serviceCarousel">
          <Swiper
            dir={rtl ? 'ltr' : undefined}
            breakpoints={{
              // when window width is >= 350px
              350: {
                slidesPerView: 1,
              },
              // when window width is >= 692px
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 800px
              768: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              // when window width is >= 1100px
              1200: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            slidesPerView={5}
            // slidesPerView={"auto"}
            spaceBetween={40}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className={`serviceSlider`}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              waitForTransition: false,
            }}
            loop={true}
          >
            {services?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="service-item">
                  <div className="icon">{item?.Icon}</div>
                  <h3 className="service-title">{item?.title}</h3>
                  <p>{item?.description}</p>
                  <SecondaryButton />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import useMediaQuery from "@/hooks/useMediaQuery";
import useThemeContext from "@/hooks/useThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaImage,
  FaImages,
  FaSoundcloud,
  FaVimeoSquare,
  FaYoutube,
} from "react-icons/fa";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import CustomModal from "../shared/CustomModal";

// import portfilo1Image from "../../../public/assets/images/portfolio/portfolio-item1.webp";
// import portfilo2Image from "../../../public/assets/images/portfolio/portfolio-item2.webp";
// import portfilo3Image from "../../../public/assets/images/portfolio/portfolio-item3.webp";
// import portfilo4Image from "../../../public/assets/images/portfolio/portfolio-item4.webp";
// import portfilo6Image from "../../../public/assets/images/portfolio/portfolio-item5.webp";
import Image from "next/image";

const Portfolio = () => {
  const { rtl } = useThemeContext();
  const [_marginTop, setMarginTop] = useState("60px");
  const isMobile = useMediaQuery("(max-width: 592px)");
  const [active, setActive] = useState("all");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (isMobile) {
      setMarginTop("0px");
    } else {
      setMarginTop("60px");
    }
  }, [isMobile]);

  const portfolios = [
    {
      id: 1,
      types: ["design_portfolio", "brand_portfolio"],
      video: "https://player.vimeo.com/video/312334044",
      image: "portfilo1Image?.src",
      tags: "Inspiration / Book",
      IconType: <FaVimeoSquare size={35} />,
    },
    {
      id: 2,
      types: ["html_portfolio", "graphics_portfolio"],
      video: "https://www.youtube.com/embed/9No-FiEInLA",
      image: "portfilo2Image?.src",
      tags: "Inspiration / Book",
      IconType: <FaYoutube size={35} />,
      // marginTop: marginTop
    },
    {
      id: 3,
      types: ["design_portfolio", "html_portfolio"],
      video:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=truehttps://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      image: "portfilo3Image?.src",
      tags: "Inspiration / Book",
      IconType: <FaSoundcloud size={35} />,
    },
    {
      id: 4,
      types: ["html_portfolio", "graphics_portfolio"],
      video: "/assets/images/portfolio/portfolio-item4.webp",
      image: "portfilo4Image?.src",
      tags: "Inspiration / Book",
      IconType: <FaImage size={35} />,
    },
    {
      id: 5,
      types: ["html_portfolio", "graphics_portfolio", "brand_portfolio"],
      Section: (
        <>
          <div className="item-slider">
            <Swiper
              dir={rtl ? "ltr" : "ltr"}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              modules={[EffectCreative, Pagination, Autoplay]}
              className="mySwiper3"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                waitForTransition: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <Image
                  // src={portfilo1Image?.src}
                  alt="Portfolio Item"
                  width={380}
                  height={510}
                  className="img-fluid w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  // src={portfilo3Image?.src}
                  alt="Portfolio Item"
                  width={380}
                  height={510}
                  className="img-fluid w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  // src={portfilo4Image?.src}
                  alt="Portfolio Item"
                  width={380}
                  height={510}
                  className="img-fluid w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  // src={portfilo6Image?.src}
                  alt="Portfolio Item"
                  width={380}
                  height={510}
                  className="img-fluid w-100"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <Link href="#">
            <div className="item-label">
              <p>Inspiration / Book</p>
            </div>
          </Link>
          <div className="type">
            <FaImages size={35} />
          </div>
        </>
      ),
      // marginTop: marginTop
    },
    {
      id: 6,
      types: ["design_portfolio", "brand_portfolio"],
      // video: "/assets/images/portfolio/portfolio-item5.webp",
      // image: portfilo6Image?.src,
      tags: "Inspiration / Book",
      IconType: <FaImage size={35} />,
    },
  ];

  const menuLists = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Design",
      value: "design_portfolio",
    },
    {
      label: "HTML",
      value: "html_portfolio",
    },
    {
      label: "Graphics",
      value: "graphics_portfolio",
    },
    {
      label: "Brand",
      value: "brand_portfolio",
    },
  ];

  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "tiff",
    "webp",
    "svg",
    "ico",
    "jfif",
  ];

  const containsImageExtension = imageExtensions.some((extension) =>
    selectedImage?.endsWith(`.${extension}`)
  );

  const filteredPortfolios = portfolios.filter((portfolio) => {
    return active === "all" || portfolio.types.includes(active);
  });

  return (
    <div className="portfolio" data-title="Portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>Portfolio</span>
          </h2>
        </div>

        <div className="portfolio-wrapper">
          <ul className="filter-button">
            {menuLists?.map((item, i) => (
              <li
                key={i}
                className={active === item.value ? "active" : ""}
                onClick={() => setActive(item.value)}
              >
                {item?.label}
              </li>
            ))}
          </ul>
          <div className="portfolio-inner row gallery_zoom">
            <AnimatePresence>
              {filteredPortfolios?.map((portfolio) =>
                portfolio?.id !== 5 ? (
                  <motion.div
                    key={portfolio?.id}
                    style={{ transformOrigin: "left bottom" }}
                    className="col-6 col-md-4 portfolio-item design_portfolio brand_portfolio"
                    layout
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="item"
                      // style={{ marginTop: (portfolio?.marginTop && active === "all") ? portfolio?.marginTop : "" }}
                    >
                      <div
                        onClick={() => openModal(portfolio.video)}
                        className="full_link popup-vimeo"
                      >
                        <Image
                          // src={portfolio.image}
                          alt="Portfolio Item"
                          width={380}
                          height={510}
                          className="img-fluid"
                        />
                      </div>
                      <Link href="#">
                        <div className="item-label">
                          <p>Inspiration / Book</p>
                        </div>
                      </Link>
                      <div className="type">{portfolio.IconType}</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    style={{ transformOrigin: "left bottom" }}
                    className="col-6 col-md-4 portfolio-item html_portfolio graphics_portfolio brand_portfolio"
                    key={portfolio?.id}
                    layout
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="item"
                      // style={{ marginTop: (portfolio?.marginTop && active === "all") ? portfolio?.marginTop : "" }}
                    >
                      {portfolio?.Section}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        containsImageExtension={containsImageExtension}
      >
        {selectedImage && !containsImageExtension && (
          <div className="h-100">
            <iframe
              style={{ position: "relative" }}
              title="Vimeo Video"
              // src={selectedImage}
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>

            <button
              className="mfp-close"
              onClick={closeModal}
              style={{ position: "absolute" }}
            >
              &times;
            </button>
          </div>
        )}

        {selectedImage && containsImageExtension && (
          <div>
            <div className="d-flex justify-content-center">
              <div style={{ position: "relative" }}>
                <Image
                  // src={selectedImage}
                  alt="Modal image"
                  width={390}
                  height={510}
                  className="img-fluid"
                ></Image>
                <button
                  className="mfp-close"
                  onClick={closeModal}
                  style={{ position: "absolute" }}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default Portfolio;

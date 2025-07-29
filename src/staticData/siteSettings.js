import AboutMeIcon from "@/components/icons/siteIcons/AboutMeIcon";
import BlogsIcon from "@/components/icons/siteIcons/BlogsIcon";
import ElementsIcon from "@/components/icons/siteIcons/ElementsIcon";
import FeedbackIcon from "@/components/icons/siteIcons/FeedbackIcon";
import HomeIcon from "@/components/icons/siteIcons/HomeIcon";
import PortfolioIcon from "@/components/icons/siteIcons/PortfolioIcon";
import ResumeIcon from "@/components/icons/siteIcons/ResumeIcon";
import ServicesIcon from "@/components/icons/siteIcons/ServicesIcon";
import SkillsIcon from "@/components/icons/siteIcons/SkillsIcon";
import ContactIcon from "@/components/icons/siteIcons/ContactIcon";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export const siteSettings = {
  logo: "L", // Logo de Luciano
  headerMenus: [
    {
      id: 1,
      title: "HOME",
      selector: "#home",
      url: "/",
      Icon: <HomeIcon />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "ABOUT ME",
      selector: "#about",
      url: "/about",
      Icon: <AboutMeIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 3,
      title: "SKILLS",
      selector: "#skill",
      url: "/skill",
      Icon: <SkillsIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 4,
      title: "RESUME",
      selector: "#resume",
      url: "/resume",
      Icon: <ResumeIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 5,
      title: "PORTFOLIO",
      selector: "#portfolio",
      url: "/portfolio",
      Icon: <PortfolioIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 6,
      title: "BLOGS",
      selector: "#blog",
      url: "/blog",
      Icon: <BlogsIcon />,
      notVisibleRoutes: [],
    },
    /* {
      id: 7,
      title: "CONTACT ME",
      selector: "#contact",
      url: "/contact",
      Icon: <ContactIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    }, */
    /* {
      id: 8,
      title: "SERVICES",
      selector: "#service",
      url: "/service",
      Icon: <ServicesIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 9,
      title: "FEEDBACK",
      selector: "#feedback",
      url: "/feedback",
      Icon: <FeedbackIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 10,
      title: "Elements",
      selector: "#elements",
      url: "/elements",
      Icon: <ElementsIcon />,
      notVisibleRoutes: ["/"],
    }, */
  ],
  headerBottom: {
    title: "CONTACT ME",
    url: "#contact",
  },
  footerItems: [
    /* {
      id: 1,
      Icon: <FaTwitter />,
      url: "https://twitter.com/",
      tooltip: "Follow us on Twitter",
    },
    {
      id: 2,
      Icon: <FaPinterestP />,
      url: "https://www.pinterest.com/",
      tooltip: "Follow us on pinterest",
    },
    {
      id: 3,
      Icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
      tooltip: "Follow us on Facebook",
    },
    {
      id: 4,
      Icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
      tooltip: "Connect with us on Linkedin",
    }, */
  ],
  themeData: {
    mode: "light",
    dir: "ltr",
  },
};

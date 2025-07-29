// import member1Image from "../../../public/assets/images/team/team1.png";
// import member2Image from "../../../public/assets/images/team/team2.png";
// import member3Image from "../../../public/assets/images/team/team3.png";
// import member4Image from "../../../public/assets/images/team/team4.png";
// import member5Image from "../../../public/assets/images/team/team5.png";
// import member6Image from "../../../public/assets/images/team/team1.png";

// import plan1Image from "../../../public/assets/images/svg/bulb.svg";
// import plan2Image from "../../../public/assets/images/svg/layers.svg";
// import plan3Image from "../../../public/assets/images/svg/diamond.svg";

// import client1Image from "../../../public/assets/images/clients/client1.png";
// import client2Image from "../../../public/assets/images/clients/client2.png";
// import client3Image from "../../../public/assets/images/clients/client3.png";
// import client4Image from "../../../public/assets/images/clients/client4.png";
// import client5Image from "../../../public/assets/images/clients/client1.png";

// import flag1Image from "../../../public/assets/images/flags/flag3.png";
// import flag2Image from "../../../public/assets/images/flags/flag1.png";
// import flag3Image from "../../../public/assets/images/flags/flag2.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export const elementHero = {
  heading: "elements.heading",
  breadcrumbs: [
    {
      title: "nav.home",
      url: "/",
    },
  ],
  lastBreadcrum: {
    title: "elements.title",
    url: "/",
  },
};

export const members = [
  {
    id: 1,
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: member1Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 2,
    name: "BROOKLYN SIMMONS",
    designation: "UI DESIGNER",
    // image: member2Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 3,
    name: "SAVANNAH NGUYEN",
    designation: "UI DESIGNER",
    // image: member3Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 4,
    name: "BROOKLYN SIMMONS",
    designation: "UI DESIGNER",
    // image: member4Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 5,
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: member5Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 6,
    name: "STELLA RUTH",
    designation: "UI DESIGNER",
    // image: member6Image?.src,
    socialURLs: [
      {
        Icon: <FaTwitter />,
        url: "#",
      },
      {
        Icon: <FaPinterestP />,
        url: "#",
      },
      {
        Icon: <FaFacebookF />,
        url: "#",
      },
      {
        Icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
];

export const plans = [
  {
    id: 1,
    price: 75,
    type: "STATIC",
    // image: plan1Image?.src,
    // bgImage: plan1BgImage?.src,
    benefits: [
      "1 Page with elementor",
      "Responsive Design",
      "2 Plugins/Extensions",
      "Content Upload",
    ],
  },
  {
    id: 2,
    price: 80,
    type: "STANDARD",
    // image: plan2Image?.src,
    benefits: [
      "1 Page with elementor",
      "Responsive Design",
      "2 Plugins/Extensions",
      "Content Upload",
    ],
  },
  {
    id: 3,
    price: 90,
    type: "PREMIUM",
    // image: plan3Image?.src,
    benefits: [
      "1 Page with elementor",
      "Responsive Design",
      "2 Plugins/Extensions",
      "Content Upload",
    ],
  },
];

export const clientimages = [
  {
    id: 1,
    url: "#",
    // image: client1Image?.src,
  },
  {
    id: 2,
    url: "#",
    // image: client2Image?.src,
  },
  {
    id: 3,
    url: "#",
    // image: client3Image?.src,
  },
  {
    id: 4,
    url: "#",
    // image: client4Image?.src,
  },
  {
    id: 5,
    url: "#",
    // image: client5Image?.src,
  },
];

export const languages = [
  {
    id: 1,
    title: "ENGLISH",
    value: 90,
    // image: flag1Image?.src,
  },
  {
    id: 2,
    title: "GERMAN",
    value: 70,
    // image: flag2Image?.src,
  },
  {
    id: 3,
    title: "URDU",
    value: 100,
    // image: flag3Image?.src,
  },
];

export const knowledgeLists = [
  {
    id: 1,
    title: "BRANDING",
    url: "#",
  },
  {
    id: 2,
    title: "ELASTIC SEARCH",
    url: "#",
  },
  {
    id: 3,
    title: "HTML",
    url: "#",
  },
  {
    id: 4,
    title: "JQUERY",
    url: "#",
  },
  {
    id: 5,
    title: "WEB DEVELOPER",
    url: "#",
  },
  {
    id: 6,
    title: "CODEIGNITER",
    url: "#",
  },
  {
    id: 7,
    title: "JAVASCRIPT",
    url: "#",
  },
];

export const tableData = [
  {
    title1: "Deadada swasa",
    title2: "comes from line",
    title3: "Finibus Bonorum",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
  {
    title1: "availa blebut majo",
    title2: "Morbi volutpat",
    title3: "accoied English",
  },
];

export const tabsData = [
  {
    title: "ABOUT ME",
    content: (
      <>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many websites containing Lorem Ipsum passages, and more
          recently desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </>
    ),
  },
  {
    title: "OUR POLICY",
    content: (
      <>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <br />
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many websites containing Lorem Ipsum passages, and more
          recently desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </>
    ),
  },
  {
    title: "OUR POLICY",
    content: (
      <>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many websites containing Lorem Ipsum passages, and more
          recently desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </>
    ),
  },
];

export const accordionData = [
  {
    id: "collapseOne",
    headerText: "SIMPLY RANDOM TEXT IT HAS ROOTS IN A PIECE",
    bodyText:
      "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    expanded: true,
  },
  {
    id: "collapseTwo",
    headerText: "DUCIMUS QUI BLANDITIIS PRAE SENTIUM VOLUP",
    bodyText:
      "Lorem Ipsum whtich looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    expanded: false,
  },
  {
    id: "collapseThree",
    headerText: "BUT I MUST EXPLAIN TO YOU MISTAKENP",
    bodyText:
      "Lorem Ipsum whtich looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    expanded: false,
  },
  {
    id: "collapseFour",
    headerText: "WHO ARE SO DEMORALIZED BY THE CHARMS",
    bodyText:
      "Lorem Ipsum whtich looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    expanded: false,
  },
];

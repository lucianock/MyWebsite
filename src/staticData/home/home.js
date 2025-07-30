import AwardsWinningIcon from "@/components/icons/home/AwardsWinningIcon";
import ContentWriting from "@/components/icons/home/ContentWriting";
import EmailIcon from "@/components/icons/home/EmailIcon";
import GraphicsIcon from "@/components/icons/home/GraphicsIcon";
import HappyCustomersIcon from "@/components/icons/home/HappyCustomersIcon";
import LocationIcon from "@/components/icons/home/LocationIcon";
import MediaMarketingIcon from "@/components/icons/home/MediaMarketingIcon";
import PhoneNumber from "@/components/icons/home/PhoneNumber";
import ProjectDoneIcon from "@/components/icons/home/ProjectDoneIcon";
import SeoServices from "@/components/icons/home/SeoServices";
import WebDesignIcon from "@/components/icons/home/WebDesignIcon";
import WebDevIcon from "@/components/icons/home/WebDevIcon";
import WebsiteIcon from "@/components/icons/home/WebsiteIcon";
import WorkingHours from "@/components/icons/home/WorkingHours";

import aboutImage from "../../../public/assets/images/hero/perfil.png";
import aboutImageDark from "../../../public/assets/images/hero/perfil.png";

// import blog1Image from "../../../public/assets/images/blogs/blog2.webp";
// import blog2Image from "../../../public/assets/images/blogs/blog1.webp";

// import skill1Image from "../../../public/assets/images/skills/skill-bg.webp";
// import skill2Image from "../../../public/assets/images/skills/skill-bg-2.webp";
// import skill3Image from "../../../public/assets/images/skills/skill-bg-3.webp";
// import skill4Image from "../../../public/assets/images/skills/skill-bg-4.webp";

// import feedback1Image from "../../../public/assets/images/testimonials/testimonial-thumb1.webp";
// import feedback2Image from "../../../public/assets/images/testimonials/testimonial-thumb2.webp";
// import feedback3Image from "../../../public/assets/images/testimonials/testimonial-thumb3.webp";
// import feedback4Image from "../../../public/assets/images/testimonials/testimonial-thumb4.webp";

export const aboutMe = {
  aboutImage: aboutImage?.src,
  aboutImageDark: aboutImageDark?.src,
  name: "hero.name",
  designation: "hero.designation",
  desc: "hero.description",
  aboutInfo: [
    {
      id: 1,
      title: "about.location",
      Icon: <LocationIcon viewBox="0 0 18 24" />,
      link: "",
    },
    {
      id: 2,
      title: "about.phone",
      Icon: (
        <PhoneNumber
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
    {
      id: 3,
      title: "about.email",
      Icon: (
        <EmailIcon
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
    {
      id: 4,
      title: "about.website",
      Icon: (
        <WebsiteIcon
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
  ],
  btnText: "hero.downloadCV",
};

export const socialMediaLists = [
  {
    id: 1,
    title: "social.linkedin",
    url: "https://www.linkedin.com/in/lucianock/",
  },
  {
    id: 2,
    title: "social.github",
    url: "https://github.com/lucianock",
  },
  {
    id: 3,
    title: "social.whatsapp",
    url: "https://wa.me/543416589951?text=Hola%20Luciano%2C%20vi%20tu%20perfil%20y%20estoy%20interesado%20en%20hablar%20contigo.",
  },
];

export const funItems = [
  {
    id: 1,
    Svg: <ProjectDoneIcon />,
    startCount: 1,
    endCount: 32,
    title: "funFacts.projectsCompleted",
  },
  {
    id: 2,
    Svg: <HappyCustomersIcon />,
    startCount: 1,
    endCount: 117,
    title: "funFacts.contributions",
  },
  {
    id: 3,
    Svg: <WorkingHours />,
    startCount: 1,
    endCount: 9360,
    title: "funFacts.hoursWorked",
  },
  /* {
    id: 4,
    Svg: <AwardsWinningIcon />,
    startCount: 1,
    endCount: 258,
    title: "AWARDS WON",
  }, */
];

export const expFirstCol = [
  {
    id: 1,
    //range: "2020 - 2024",
    title: "education.softwareDev",
    description: "education.softwareDevDesc",
  },
  {
    id: 2,
    //range: "2024 - 2025",
    title: "education.laravelMVC",
    description: "education.laravelMVCDesc",
  },
  {
    id: 3,
    //range: "2024 - 2025",
    title: "education.phpArchitecture",
    description: "education.phpArchitectureDesc",
  },
  {
    id: 4,
    //range: "2024 - 2025",
    title: "education.advancedJS",
    description: "education.advancedJSDesc",
  },
  {
    id: 5,
    //range: "2024 - 2025",
    title: "education.designPatterns",
    description: "education.designPatternsDesc",
  },
  /* {
    id: 6,
    range: "2024 - 2025",
    title: "education.pythonMaster",
    description: "education.pythonMasterDesc",
  }, */
];

export const expSecondCol = [
  {
    id: 1,
    range: "Febrero 2022 – Actualidad",
    title: "experience.idealsur",
    description: "experience.idealsurDesc",
  },
  /* {
    id: 2,
    range: "Julio - Diciembre 2024",
    title: "experience.nextjob",
    description: "experience.nextjobDesc",
  },
  {
    id: 3,
    range: "2020 - 2022",
    title: "experience.blackpath",
    description: "experience.blackpathDesc",
  },
  {
    id: 4,
    range: "2020 - 2022",
    title: "experience.secudash",
    description: "experience.secudashDesc",
  }, */
];

export const services = [
  {
    id: 1,
    Icon: <WebDevIcon />,
    title: "services.webDevelopment",
    description: "services.webDevelopmentDesc",
  },
  {
    id: 2,
    Icon: <SeoServices />,
    title: "services.seoServices",
    description: "services.seoServicesDesc",
  },
  {
    id: 3,
    Icon: <MediaMarketingIcon />,
    title: "services.mediaMarketing",
    description: "services.mediaMarketingDesc",
  },
  {
    id: 4,
    Icon: <GraphicsIcon />,
    title: "services.graphicsDesign",
    description: "services.graphicsDesignDesc",
  },
  {
    id: 5,
    Icon: <ContentWriting />,
    title: "services.contentWriting",
    description: "services.contentWritingDesc",
  },
  {
    id: 6,
    Icon: <SeoServices />,
    title: "services.seoServices",
    description: "services.seoServicesDesc",
  },
  {
    id: 7,
    Icon: <WebDesignIcon />,
    title: "services.webDesign",
    description: "services.webDesignDesc",
  },
];

export const blogs = [
  {
    id: 1,
    title: "blog.publishingSoftware",
    tags: "blog.technology",
    date: "18 DEC, 2020",
    description: "blog.publishingSoftwareDesc",
    // image: blog1Image?.src,
    link: "#",
    slug: "publishing-software-like-aldus-including-versions",
  },
  {
    id: 2,
    title: "blog.wordpressWebsite",
    tags: "blog.trash",
    date: "18 DEC, 2020",
    description: "blog.wordpressWebsiteDesc",
    // image: blog2Image?.src,
    link: "#",
    slug: "learn-how-to-create-a-business-website-using-wordPress",
  },
];

export const contactInfo = [
  {
    id: 1,
    Icon: <PhoneNumber />,
    title: "contact.phoneNumber",
    data1: "+54 341 658 9951",
    data2: "",
  },
  {
    id: 2,
    Icon: <EmailIcon />,
    title: "contact.emailAddress",
    data1: "lucianocampos.k@gmail.com",
    data2: "",
  },
  {
    id: 3,
    Icon: <LocationIcon />,
    title: "contact.myLocation",
    data1: "Rosario, Argentina",
    data2: "",
  },
  {
    id: 4,
    Icon: <WebsiteIcon />,
    title: "contact.website",
    data1: "www.lucianock.com",
    data2: "",
  },
];

export const progresses = [
  {
    id: 1,
    title: "skills.php",
    value: 90,
    // image: skill1Image?.src,
  },
  {
    id: 2,
    title: "skills.mysql",
    value: 80,
    // image: skill2Image?.src,
  },
  {
    id: 3,
    title: "skills.javascript",
    value: 70,
    // image: skill3Image?.src,
  },
  {
    id: 4,
    title: "skills.laravel",
    value: 70,
    // image: skill4Image?.src,
  },
];

export const feebackUsers = [
  {
    id: 1,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 2,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 3,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 4,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 5,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 6,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 7,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 8,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 9,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 10,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 11,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 12,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 13,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 14,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 15,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 16,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 17,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 18,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 19,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 20,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 21,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    // image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 22,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    // image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 23,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    // image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 24,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    // image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "portfolio.nextjob",
    description: "portfolio.nextjobDesc",
    category: "Web Development",
    technologies: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
    image: "/assets/images/portfolio/nextjob.jpg",
    link: "https://nextjob.lucianock.com/",
    github: "#"
  },
  {
    id: 2,
    title: "portfolio.blackpath",
    description: "portfolio.blackpathDesc",
    category: "Security",
    technologies: ["Laravel", "Vite", "Bitwarden", "LinkedIn API"],
    image: "/assets/images/portfolio/blackpath.jpg",
    link: "https://blackpath.lucianock.com/",
    github: "#"
  },
  {
    id: 3,
    title: "portfolio.secudash",
    description: "portfolio.secudashDesc",
    category: "Security",
    technologies: ["Laravel", "Real-time", "Monitoring", "Automation"],
    image: "/assets/images/portfolio/secudash.jpg",
    link: "https://secudash.lucianock.com/",
    github: "#"
  },
  {
    id: 4,
    title: "portfolio.breeze",
    description: "portfolio.breezeDesc",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/assets/images/portfolio/breeze.jpg",
    link: "https://breeze.lucianock.com/",
    github: "#"
  },
  {
    id: 5,
    title: "portfolio.pythonMaster",
    description: "portfolio.pythonMasterDesc",
    category: "Education",
    technologies: ["Python", "Design Patterns", "Best Practices"],
    image: "/assets/images/portfolio/python-course.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "portfolio.designPatterns",
    description: "portfolio.designPatternsDesc",
    category: "Education",
    technologies: ["SOLID", "Design Patterns", "Architecture"],
    image: "/assets/images/portfolio/design-patterns.jpg",
    link: "#",
    github: "#"
  }
];

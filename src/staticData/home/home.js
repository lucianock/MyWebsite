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

import aboutImage from "../../../public/assets/images/hero/luciano4.jpg";
import aboutImageDark from "../../../public/assets/images/hero/luciano4.jpg";

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
  name: "Luciano Campos Kriegl",
  designation: "Full Stack Developer",
  desc: "Trabajo en el desarrollo y mantenimiento de sistemas de gestión a medida para la industria farmacéutica, incluyendo CRMs personalizados, integración de APIs, desarrollo de módulos específicos y gestión de métricas. Participo activamente en la evolución técnica de estas soluciones, incluyendo despliegues, automatizaciones y configuración de servidores.",
  aboutInfo: [
    {
      id: 1,
      title: "Rosario, Argentina",
      Icon: <LocationIcon viewBox="0 0 18 24" />,
      link: "",
    },
    {
      id: 2,
      title: "+54 341 658 9951",
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
      title: "lucianocampos.k@gmail.com",
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
      title: "www.lucianock.com",
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
  btnText: "DESCARGAR CV",
};

export const socialMediaLists = [
  {
    id: 1,
    title: "LINKEDIN",
    url: "https://www.linkedin.com/in/lucianock/",
  },
  {
    id: 2,
    title: "GITHUB",
    url: "https://github.com/lucianock",
  },
  {
    id: 3,
    title: "WHATSAPP",
    url: "https://wa.me/543416589951?text=Hola%20Luciano%2C%20vi%20tu%20perfil%20y%20estoy%20interesado%20en%20hablar%20contigo.",
  },
];

export const funItems = [
  {
    id: 1,
    Svg: <ProjectDoneIcon />,
    startCount: 1,
    endCount: 32,
    title: "PROYECTOS REALIZADOS",
  },
  /* {
    id: 2,
    Svg: <HappyCustomersIcon />,
    startCount: 1,
    endCount: 598,
    title: "HAPPY CUSTOMERS",
  }, */
  {
    id: 3,
    Svg: <WorkingHours />,
    startCount: 1,
    endCount: 9360,
    title: "HORAS TRABAJADAS",
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
    range: "2020 - 2024",
    title: "TÉCNICO SUPERIOR EN DESARROLLO DE SOFTWARE",
    description: "Instituto Urquiza - Formación completa en desarrollo de software y programación.",
  },
  {
    id: 2,
    range: "2024 - 2025",
    title: "LARAVEL MVC",
    description: "EducacionIT - Curso especializado en Laravel MVC para desarrollo web avanzado.",
  },
  {
    id: 3,
    range: "2024 - 2025",
    title: "ARQUITECTURA PHP AVANZADA",
    description: "EducacionIT - Formación en patrones de diseño y arquitectura avanzada en PHP.",
  },
  {
    id: 4,
    range: "2024 - 2025",
    title: "JAVASCRIPT AVANZADO",
    description: "EducacionIT - Especialización en JavaScript moderno y frameworks.",
  },
  {
    id: 5,
    range: "2024 - 2025",
    title: "PATRONES DE DISEÑO",
    description: "EducacionIT - Formación en patrones de diseño y mejores prácticas de desarrollo.",
  },
  {
    id: 6,
    range: "2024 - 2025",
    title: "MASTER EN PYTHON",
    description: "Udemy - Formación completa en Python para desarrollo backend y automatización.",
  },
];

export const expSecondCol = [
  {
    id: 1,
    range: "2020 - 2022",
    title: "BLACKPATH",
    description: "Desarrollado con Laravel y Vite que permite escanear dominios para detectar vulnerabilidades. Integra herramientas como Nmap, WhatWeb y Gobuster, presentando los resultados en una interfaz sencilla y amigable, pensada para usuarios sin conocimientos técnicos avanzados. Permite exportar reportes claros y organizados, facilitando la identificación rápida de riesgos de seguridad.",
  },
  {
    id: 2,
    range: "2020 - 2022",
    title: "SECUDASH",
    description: "Dashboard de ciberseguridad desarrollado con Laravel y Vite para gestionar accesos, credenciales y publicaciones relevantes. Integración con Bitwarden autohospedado, scraping de LinkedIn por palabras clave y visualización segmentada según roles. Arquitectura escalable, segura y orientada a automatización de tareas.",
  },
  {
    id: 3,
    range: "Julio - Diciembre 2024",
    title: "NEXTJOB",
    description: "Portal de búsqueda y publicación de empleos construido con Laravel y Tailwind CSS. Permite a empresas publicar ofertas y usuarios buscar y filtrar posiciones. Incluye gestión de usuarios con roles, panel de administración y interfaz responsive.",
  },
];

export const services = [
  {
    id: 1,
    Icon: <WebDevIcon />,
    title: "WEB DEVELOPMENT",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 2,
    Icon: <SeoServices />,
    title: "SEO SERVICES",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 3,
    Icon: <MediaMarketingIcon />,
    title: "MEDIA MARKETING",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 4,
    Icon: <GraphicsIcon />,
    title: "GRAPHICS DESIGN",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 5,
    Icon: <ContentWriting />,
    title: "CONTENT WRITING",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 6,
    Icon: <SeoServices />,
    title: "SEO SERVICES",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 7,
    Icon: <WebDesignIcon />,
    title: "WEB DESIGN",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Publishing software like aldus including versions",
    tags: "TECHNOLOGY",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    // image: blog1Image?.src,
    link: "#",
    slug: "publishing-software-like-aldus-including-versions",
  },
  {
    id: 2,
    title: "Learn how to create a business website using WordPress",
    tags: "TRASH",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    // image: blog2Image?.src,
    link: "#",
    slug: "learn-how-to-create-a-business-website-using-wordPress",
  },
];

export const contactInfo = [
  {
    id: 1,
    Icon: <PhoneNumber />,
    title: "PHONE NUMBER",
    data1: "888 - 9999 - 6666",
    data2: "555 - 2222 - 3333",
  },
  {
    id: 2,
    Icon: <EmailIcon />,
    title: "EMAIL ADDRESS",
    data1: "demo123@gmail.com",
    data2: "Ex123@gmail.com",
  },
  {
    id: 3,
    Icon: <LocationIcon />,
    title: "MY LOCATION",
    data1: "London, Captown,",
    data2: "United Kingdom",
  },
  {
    id: 4,
    Icon: <WebsiteIcon />,
    title: "WEBSITE",
    data1: "www.demo123.com",
    data2: "www.demo124.net",
  },
];

export const progresses = [
  {
    id: 1,
    title: "PHP",
    value: 90,
    // image: skill1Image?.src,
  },
  {
    id: 2,
    title: "MySQL",
    value: 80,
    // image: skill2Image?.src,
  },
  {
    id: 3,
    title: "JavaScript",
    value: 70,
    // image: skill3Image?.src,
  },
  {
    id: 4,
    title: "Laravel",
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

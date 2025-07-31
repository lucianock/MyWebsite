// import blog1Main from '../../../public/assets/images/blogs/blog3.webp';
// import blog2Main from '../../../public/assets/images/blogs/blog4.webp';
// import blog3Main from '../../../public/assets/images/blogs/blog5.webp';
// import blog4Main from '../../../public/assets/images/blogs/blog6.webp';
// import blog5Main from '../../../public/assets/images/blogs/blog1.webp';
// import blog6Main from '../../../public/assets/images/blogs/blog2.webp';
// import commentor1Image from '../../../public/assets/images/comment-thumb.png';
// import commentor1ReplyImage from '../../../public/assets/images/comment-thumb2.png';
// import commentor2Image from '../../../public/assets/images/comment-thumb.png';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaMedium,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const blogHero = {
  heading: "blog.hero.heading",
  breadcrumbs: [
    {
      title: "nav.home",
      url: "/",
    },
  ],
  lastBreadcrum: {
    title: "blog.hero.lastBreadcrumb",
    url: "/",
  },
};

export const singleBlogHero = {
  heading: "blog.singleHero.heading",
  breadcrumbs: [
    {
      title: "nav.home",
      url: "/",
    },
    {
      title: "nav.blogs",
      url: "/blog",
    },
  ],
  lastBreadcrum: {
    title: "blog.singleHero.lastBreadcrumb",
    url: "/",
  },
};

export const allBlogs = [
  {
    id: 1,
    title: "blog.laravelBestPractices",
    tags: "blog.technology",
    date: "15 DEC, 2024",
    description: "blog.laravelBestPracticesDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/laravel-best-practices-for-scalable-apis",
    slug: "laravel-best-practices-for-scalable-apis",
    allTags: ["laravel", "api", "php", "development", "best-practices"],
    type: "medium", // Indica que es un post de Medium
    externalUrl: "https://medium.com/@lucianocampos.k/laravel-best-practices-for-scalable-apis",
    readTime: "8 min read",
    featured: true,
  },
  /* Comentados para prueba real
  {
    id: 2,
    title: "blog.modernWebDevelopment",
    tags: "blog.development",
    date: "10 DEC, 2024",
    description: "blog.modernWebDevelopmentDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/modern-web-development-evolution",
    slug: "modern-web-development-evolution",
    allTags: ["javascript", "react", "nodejs", "web-development", "modern-stack"],
    type: "medium",
    externalUrl: "https://medium.com/@lucianocampos.k/modern-web-development-evolution",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "blog.phpSecurityTips",
    tags: "blog.technology",
    date: "05 DEC, 2024",
    description: "blog.phpSecurityTipsDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/php-security-best-practices",
    slug: "php-security-best-practices",
    allTags: ["php", "security", "web-development", "best-practices"],
    type: "medium",
    externalUrl: "https://medium.com/@lucianocampos.k/php-security-best-practices",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "blog.databaseOptimization",
    tags: "blog.development",
    date: "01 DEC, 2024",
    description: "blog.databaseOptimizationDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/mysql-optimization-techniques",
    slug: "mysql-optimization-techniques",
    allTags: ["mysql", "database", "optimization", "performance"],
    type: "medium",
    externalUrl: "https://medium.com/@lucianocampos.k/mysql-optimization-techniques",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "blog.tailwindCssGuide",
    tags: "blog.development",
    date: "25 NOV, 2024",
    description: "blog.tailwindCssGuideDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/tailwind-css-complete-guide",
    slug: "tailwind-css-complete-guide",
    allTags: ["tailwind", "css", "frontend", "design"],
    type: "medium",
    externalUrl: "https://medium.com/@lucianocampos.k/tailwind-css-complete-guide",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: 6,
    title: "blog.deploymentStrategies",
    tags: "blog.technology",
    date: "20 NOV, 2024",
    description: "blog.deploymentStrategiesDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "https://medium.com/@lucianocampos.k/laravel-deployment-strategies",
    slug: "laravel-deployment-strategies",
    allTags: ["laravel", "deployment", "devops", "server"],
    type: "medium",
    externalUrl: "https://medium.com/@lucianocampos.k/laravel-deployment-strategies",
    readTime: "9 min read",
    featured: false,
  },
  */
];

export const blogComments = [
  {
    author: "ALBERT FLORES",
    // imageSrc: commentor1Image?.src,
    date: "02 JUN, 2021",
    content:
      "Rst erat. Sed ut elit fringilla, dapibus augue et, tempus lorem. Ut blandit auctor sapiengravidatristique turpis hendrerit",
    replies: [
      {
        author: "ALBERT FLORE",
        // imageSrc: commentor1ReplyImage?.src,
        date: "02 JUN, 2021",
        content:
          "Rst erat. Sed ut elit fringilla, dapibus augue et, tempus lorem. Ut blandit auctor sapiengravidatristique turpis hendrerit",
      },
    ],
  },
  {
    author: "JENNY WILSON",
    // imageSrc: commentor2Image?.src,
    date: "02 JUN, 2021",
    content:
      "Rst erat. Sed ut elit fringilla, dapibus augue et, tempus lorem. Ut blandit auctor sapiengravidatristique turpis hendrerit",
    replies: [],
  },
];

export const blogSocialIcons = [
  {
    id: 1,
    title: "Twitter",
    url: "https://twitter.com/",
    tooltip: "Share on Twitter",
    Icon: <FaTwitter />,
  },
  {
    id: 2,
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    tooltip: "Share on Pinterest",
    Icon: <FaPinterestP />,
  },
  {
    id: 3,
    title: "Facebook",
    url: "https://www.facebook.com/",
    tooltip: "Share on Facebook",
    Icon: <FaFacebookF />,
  },
  {
    id: 4,
    title: "Linkedin",
    url: "https://www.linkedin.com/",
    tooltip: "Share on Linkedin",
    Icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    title: "Medium",
    url: "https://medium.com/@lucianocampos.k",
    tooltip: "Read on Medium",
    Icon: <FaMedium />,
  },
];

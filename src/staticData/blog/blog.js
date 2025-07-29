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
    title: "blog.publishingSoftware",
    tags: "blog.technology",
    date: "15 DEC, 2024",
    description: "blog.publishingSoftwareDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "building-scalable-apis-with-laravel-best-practices",
    allTags: ["laravel", "api", "php", "development"],
  },
  {
    id: 2,
    title: "blog.wordpressWebsite",
    tags: "blog.development",
    date: "10 DEC, 2024",
    description: "blog.wordpressWebsiteDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "modern-web-development-from-php-to-full-stack-javascript",
    allTags: ["javascript", "react", "nodejs", "web-development"],
  },
  {
    id: 3,
    title: "blog.publishingSoftware",
    tags: "blog.technology",
    date: "05 DEC, 2024",
    description: "blog.publishingSoftwareDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "building-scalable-apis-with-laravel-best-practices-2",
    allTags: ["laravel", "api", "php", "development"],
  },
  {
    id: 4,
    title: "blog.wordpressWebsite",
    tags: "blog.development",
    date: "01 DEC, 2024",
    description: "blog.wordpressWebsiteDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "modern-web-development-from-php-to-full-stack-javascript-2",
    allTags: ["javascript", "react", "nodejs", "web-development"],
  },
  {
    id: 5,
    title: "blog.publishingSoftware",
    tags: "blog.technology",
    date: "25 NOV, 2024",
    description: "blog.publishingSoftwareDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "building-scalable-apis-with-laravel-best-practices-3",
    allTags: ["laravel", "api", "php", "development"],
  },
  {
    id: 6,
    title: "blog.wordpressWebsite",
    tags: "blog.development",
    date: "20 NOV, 2024",
    description: "blog.wordpressWebsiteDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    link: "#",
    slug: "modern-web-development-from-php-to-full-stack-javascript-3",
    allTags: ["javascript", "react", "nodejs", "web-development"],
  },
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
];

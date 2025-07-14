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
  heading: "Blog Post",
  breadcrumbs: [
    {
      title: "HOME",
      url: "/",
    },
  ],
  lastBreadcrum: {
    title: "BLOG POST",
    url: "/",
  },
};

export const singleBlogHero = {
  heading: "Single Post",
  breadcrumbs: [
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "BLOG",
      url: "/blog",
    },
  ],
  lastBreadcrum: {
    title: "BLOG POST",
    url: "/",
  },
};

export const allBlogs = [
  {
    id: 1,
    title: "Get ready for hollywood’s big night with Google",
    tags: "FASHION",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy... ",
    image: {
      // thumbnail: blog1Thumnail?.src,
      // mainImage: blog1Main?.src,
    },
    link: "#",
    slug: "get-ready-for-hollywoods-big-night-with-google",
    allTags: ["travel", "fashion", "cv", "resume"],
  },
  {
    id: 2,
    title: "Bring iconic japanese characters to life with",
    tags: "TECHNOLOGY",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: {
      // thumbnail: blog2Thumnail?.src,
      // mainImage: blog2Main?.src,
    },
    link: "#",
    slug: "bring-iconic-japanese-characters-to-life-with",
    allTags: ["travel", "fashion", "cv", "resume"],
  },
  {
    id: 3,
    title: "Trash to treasure: How google thinks about deconstruction",
    tags: "TRASH",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: {
      // thumbnail: blog3Thumnail?.src,
      // mainImage: blog3Main?.src,
    },
    link: "#",
    slug: "trash-to-treasure-how-google-thinks-about-deconstruction",
    allTags: ["travel", "fashion", "cv", "resume"],
  },
  {
    id: 4,
    title: "A matter of impact: April updates from google.org",
    tags: "FASHION",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: {
      // thumbnail: blog4Thumnail?.src,
      // mainImage: blog4Main?.src,
    },
    link: "#",
    slug: "a-matter-of-impact-april-updates-from-google-org",
    allTags: ["travel", "fashion", "cv", "resume"],
  },
  {
    id: 5,
    title: "New resources on the gender gap in computer science",
    tags: "FASHION",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: {
      // thumbnail: blog5Thumnail?.src,
      // mainImage: blog5Main?.src,
    },
    link: "#",
    slug: "new-resources-on-the-gender-gap-in-computer-science",
    allTags: ["travel", "fashion", "cv", "resume"],
  },
  {
    id: 6,
    title: "The best cities to travel alone in the USA",
    tags: "FASHION",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: {
      // thumbnail: blog6Thumnail?.src,
      // mainImage: blog6Main?.src,
    },
    link: "#",
    slug: "the-best-cities-to-travel-alone-in-the-usa",
    allTags: ["travel", "fashion", "cv", "resume"],
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

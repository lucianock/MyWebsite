export const en = {
  // Navigation
  nav: {
    home: "HOME",
    aboutMe: "ABOUT ME",
    resume: "RESUME",
    skills: "SKILLS",
    portfolio: "PORTFOLIO",
    blogs: "BLOGS",
    contactMe: "CONTACT ME",
    services: "SERVICES",
    feedback: "FEEDBACK",
    elements: "ELEMENTS"
  },

  // Section Titles
  sections: {
    about: "About",
    aboutMe: "Me",
    resume: "Resume",
    skills: "Skills",
    mySkills: "My Skills",
    contact: "Contact",
    services: "Services",
    education: "EDUCATION",
    experience: "EXPERIENCE",
    portfolio: "Portfolio",
    blogs: "Blog"
  },

  // Hero Section
  hero: {
    name: "Luciano Campos Kriegl",
    designation: "Full Stack Developer",
    description: "I work in the development and maintenance of custom management systems for the pharmaceutical industry, including custom CRMs, API integration, specific module development and metrics management. I actively participate in the technical evolution of these solutions, including deployments, automations and server configuration.",
    downloadCV: "DOWNLOAD CV",
    typewriter1: "I'm a Full Stack Developer with a passion for building websites, web apps and software that drive success.",
    typewriter2: "My goal is to create solutions that solve real problems and generate value for people."
  },

  // About Section
  about: {
    location: "Rosario, Argentina",
    phone: "+54 341 658 9951",
    email: "lucianocampos.k@gmail.com",
    website: "www.lucianock.com"
  },

  // Fun Facts
  funFacts: {
    projectsCompleted: "PROJECTS COMPLETED",
    contributions: "CONTRIBUTIONS",
    hoursWorked: "HOURS WORKED"
  },

  // Education
  education: {
    softwareDev: "HIGHER TECHNICIAN IN SOFTWARE DEVELOPMENT",
    softwareDevDesc: "Instituto Urquiza - Complete training in software development and programming.",
    laravelMVC: "LARAVEL MVC",
    laravelMVCDesc: "EducacionIT - Specialized course in Laravel MVC for advanced web development.",
    phpArchitecture: "ADVANCED PHP ARCHITECTURE",
    phpArchitectureDesc: "EducacionIT - Training in design patterns and advanced PHP architecture.",
    advancedJS: "ADVANCED JAVASCRIPT",
    advancedJSDesc: "EducacionIT - Specialization in modern JavaScript and frameworks.",
    designPatterns: "DESIGN PATTERNS",
    designPatternsDesc: "EducacionIT - Training in design patterns and development best practices.",
    pythonMaster: "PYTHON MASTER",
    pythonMasterDesc: "Udemy - Complete Python training for backend development and automation."
  },

  // Experience
  experience: {
    blackpath: "BLACKPATH",
    blackpathDesc: "Web application developed with Laravel that allows scanning domains to detect vulnerabilities. Integrates tools like Nmap, WhatWeb and Gobuster, presenting results in a simple and user-friendly interface, designed for users without advanced technical knowledge. Allows exporting clear and organized reports, facilitating quick identification of security risks.",
    secudash: "SECUDASH",
    secudashDesc: "Cybersecurity dashboard developed with Laravel and Vite to manage access, credentials and relevant publications. Integration with self-hosted Bitwarden, LinkedIn scraping by keywords and segmented visualization according to roles. Scalable, secure architecture oriented to task automation.",
    nextjob: "NextJob - Job Portal",
    nextjobDesc: "Comprehensive job search and posting platform with advanced filtering and user management. Features include company profiles, job applications, admin dashboard, and responsive design. Built with Laravel and Tailwind CSS.",
    idealsur: "Idealsur.com – Remote (CABA)",
    idealsurDesc: "Development of CRMs oriented to the pharmaceutical industry, mainly with PHP, JavaScript and MySQL. Participation in the entire cycle: requirements analysis, design, development, testing and support. Integration of external APIs and generation of custom reports for clients. Server configuration and support, deployments from local to production environment, and database management. Technical collaboration in agile environments, code review and promotion of best practices."
  },

  // Services
  services: {
    webDevelopment: "WEB DEVELOPMENT",
    webDevelopmentDesc: "Full-stack web development with modern technologies and best practices.",
    seoServices: "SEO SERVICES",
    seoServicesDesc: "Search engine optimization to improve your website's visibility.",
    mediaMarketing: "MEDIA MARKETING",
    mediaMarketingDesc: "Digital marketing strategies to promote your business online.",
    graphicsDesign: "GRAPHICS DESIGN",
    graphicsDesignDesc: "Creative design solutions for your brand and marketing materials.",
    contentWriting: "CONTENT WRITING",
    contentWritingDesc: "Professional content creation for websites, blogs and marketing campaigns.",
    webDesign: "WEB DESIGN",
    webDesignDesc: "User-centered web design with modern UI/UX principles."
  },

  // Contact
  contact: {
    phoneNumber: "PHONE NUMBER",
    emailAddress: "EMAIL ADDRESS",
    myLocation: "MY LOCATION",
    website: "WEBSITE"
  },

  // Skills
  skills: {
    php: "PHP",
    mysql: "MySQL",
    javascript: "JavaScript",
    laravel: "Laravel"
  },

  // Social Media
  social: {
    linkedin: "LINKEDIN",
    github: "GITHUB",
    whatsapp: "WHATSAPP",
  },

  // Blog
  blog: {
    awsEc2Gratis: "How to Have Your Own Free Website with EC2 (Without Going Crazy)",
    awsEc2GratisDesc: "Yes, you read that right: free. Or almost. In this post I tell you how to put your website online using Amazon EC2 without paying a penny (at least for a good while).",
    dockerPrincipiantes: "Docker for Beginners: Practical Guide (No Complications)",
    dockerPrincipiantesDesc: "Are you afraid of Docker? Don't worry, in this post I explain in the simplest way possible how to start using containers without going crazy. It's easier than you think!",
    // Complete article content in English
    awsEc2GratisContent: `
      <h3>✋ Before starting: what is EC2?</h3>
      <p>EC2 (Elastic Compute Cloud) is an Amazon Web Services (AWS) service that allows you to launch a virtual machine (like a remote PC) and use it as a server. Ideal for hosting your website, running tests, setting up APIs, or working on personal projects.</p>
      
      <p>AWS gives you <strong>one year free</strong> under the Free Tier plan. Take advantage of it!</p>
      
      <h3>🚀 Step 1 – Create your AWS account</h3>
      <ol>
        <li>Go to <a href="https://aws.amazon.com/" target="_blank">aws.amazon.com</a> and register.</li>
        <li>You'll need a credit card. Don't worry, they won't charge you while you're on the free plan.</li>
        <li>Activate your account and that's it, you enter the dashboard.</li>
      </ol>
      
      <h3>🖥️ Step 2 – Launch your EC2 instance</h3>
      <ol>
        <li>In the search bar, type "EC2" and click.</li>
        <li>Choose "Launch instance".</li>
        <li>Choose a system image (I recommend Ubuntu Server 22.04).</li>
        <li>In "Instance type" select <code>t2.micro</code> (it's the free one).</li>
        <li>Choose or create a new key pair (save it well, without this you won't be able to access).</li>
        <li>Click "Launch instance".</li>
      </ol>
      
      <p>You already have your server online!</p>
      
      <h3>🔐 Step 3 – Access via SSH</h3>
      <p>If you're on Linux or Mac:</p>
      <pre><code>chmod 400 your-file.pem
ssh -i "your-file.pem" ubuntu@your-public-ip</code></pre>
      
      <p>On Windows you can use PuTTY or the new Windows terminal with OpenSSH.</p>
      
      <h3>🌐 Step 4 – Install your web</h3>
      <p>A quick example with Apache:</p>
      <pre><code>sudo apt update && sudo apt install apache2 -y</code></pre>
      
      <p>Then, copy your files to the <code>/var/www/html/</code> directory.</p>
      
      <p>You can upload your portfolio, a Laravel project, a landing page... whatever you want.</p>
      
      <h3>📡 Step 5 – Open port 80</h3>
      <p>You need to allow HTTP traffic:</p>
      <ol>
        <li>In the EC2 panel, go to your instance.</li>
        <li>In "Security groups" edit the inbound rules.</li>
        <li>Add a new one:
          <ul>
            <li>Type: HTTP</li>
            <li>Port: 80</li>
            <li>Source: Anywhere</li>
          </ul>
        </li>
      </ol>
      
      <p>Done. Open your IP in the browser... and magic! 🪄</p>
      
      <h3>💡 Final tips</h3>
      <ul>
        <li>Use a free domain from <a href="https://www.freenom.com/" target="_blank">Freenom</a> and point it to your IP.</li>
        <li>You can set up a PHP server or even Node.js if you want.</li>
        <li>Make backups: EC2 can restart and lose changes if you don't use persistent volumes.</li>
      </ul>
      
      <h3>My personal experience</h3>
      <p>I discovered this almost by chance, and it blew my mind. Being able to have a <em>free</em> server, without depending on external platforms and with total control, is a gem for any developer or curious person. I'm using it to set up my personal projects and test new tools safely.</p>
    `,
    // Blog page translations
    hero: {
      heading: "Blog",
      subtitle: "Articles about web development, Laravel and modern technologies",
      lastBreadcrumb: "BLOG"
    },
    singleHero: {
      heading: "Article",
      lastBreadcrumb: "ARTICLE"
    },
    technology: "Technology",
    development: "Development",
    loadMore: "LOAD MORE",
    readArticle: "Continue Read",
    viewAllArticles: "MORE BLOGS",
    backToBlog: "← Back to Blog"
  },

  // Language switch translations
  languageSwitch: {
    toSpanish: "Switch to Spanish",
    toEnglish: "Switch to English"
  },

  // Form labels
  form: {
    fullName: "Full Name",
    emailAddress: "Email Address",
    subject: "Subject",
    yourMessage: "Your Message",
    sendMessage: "SEND MESSAGE"
  },

  // Common
  common: {
    hello: "Hello",
    iAm: "I am",
    chat: "Chat"
  },

  // Elements
  elements: {
    heading: "Components",
    title: "COMPONENTS"
  },

  // Portfolio Section
  portfolio: {
    blackpath: "BlackPath - Security Scanner",
    blackpathDesc: "Web vulnerability scanning application for domain analysis using Nmap, WhatWeb, and Gobuster. Features multiple scan levels with detailed results and exportable reports for security audits.",
    nextjob: "NextJob - Job Portal",
    nextjobDesc: "Comprehensive job search and posting platform with advanced filtering, company profiles, and user management. Includes admin dashboard and responsive design for seamless user experience.",
    secudash: "SecuDash - Security Management",
    secudashDesc: "Enterprise security dashboard with real-time monitoring and automated threat detection. Features vulnerability scanning, incident response workflows, and role-based access control.",
    breeze: "BrandFlow - Laravel Product Manager",
    breezeDesc: "Brand and product management application built with Laravel and Vite. Features complete authentication system, Eloquent ORM, Blade templates, and advanced CRUD operations with form validation.",
    viewDemo: "View Demo",
    viewCode: "View Code"
  }
};
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
    title: "blog.awsEc2Gratis",
    tags: "blog.technology",
    date: "30 JUL, 2025",
    description: "blog.awsEc2GratisDesc",
    image: {
      thumbnail: "/assets/images/placeholder.jpg",
      mainImage: "/assets/images/placeholder.jpg",
    },
    slug: "como-tener-sitio-web-gratis-con-ec2",
    allTags: ["aws", "ec2", "web-hosting", "cloud", "servers"],
    readTime: "3 min read",
    featured: false,
    content: `
      <h3>✋ Antes de empezar: ¿qué es EC2?</h3>
      <p>EC2 (Elastic Compute Cloud) es un servicio de Amazon Web Services (AWS) que te permite levantar una máquina virtual (como si fuera una PC remota) y usarla como servidor. Ideal para alojar tu web, hacer pruebas, levantar APIs o jugar con proyectos personales.</p>
      
      <p>AWS te da <strong>un año gratis</strong> del plan Free Tier. ¡Aprovechalo!</p>
      
      <h3>🚀 Paso 1 – Crear tu cuenta en AWS</h3>
      <ol>
        <li>Andá a <a href="https://aws.amazon.com/" target="_blank">aws.amazon.com</a> y registrate.</li>
        <li>Vas a necesitar una tarjeta de crédito. Tranca, no te cobran mientras estés en el plan gratuito.</li>
        <li>Activás tu cuenta y listo, entrás al dashboard.</li>
      </ol>
      
      <h3>🖥️ Paso 2 – Lanzar tu instancia EC2</h3>
      <ol>
        <li>En el buscador poné "EC2" y hacé clic.</li>
        <li>Elegí "Launch instance".</li>
        <li>Elegí una imagen de sistema (te recomiendo Ubuntu Server 22.04).</li>
        <li>En "Instance type" seleccioná <code>t2.micro</code> (es la gratuita).</li>
        <li>Elegí o creá un nuevo par de llaves (guardalo bien, sin esto no accedés).</li>
        <li>Hacé clic en "Launch instance".</li>
      </ol>
      
      <p>¡Ya tenés tu servidor online!</p>
      
      <h3>🔐 Paso 3 – Acceder por SSH</h3>
      <p>Si estás en Linux o Mac:</p>
      <pre><code>chmod 400 tu-archivo.pem
ssh -i "tu-archivo.pem" ubuntu@tu-ip-publica</code></pre>
      
      <p>En Windows podés usar PuTTY o el nuevo terminal de Windows con OpenSSH.</p>
      
      <h3>🌐 Paso 4 – Instalar tu web</h3>
      <p>Un ejemplo rápido con Apache:</p>
      <pre><code>sudo apt update && sudo apt install apache2 -y</code></pre>
      
      <p>Luego, copiá tus archivos al directorio <code>/var/www/html/</code>.</p>
      
      <p>Podés subir tu portfolio, un proyecto Laravel, una landing… lo que sea.</p>
      
      <h3>📡 Paso 5 – Abrir el puerto 80</h3>
      <p>Tenés que permitir el tráfico HTTP:</p>
      <ol>
        <li>En el panel de EC2, andá a tu instancia.</li>
        <li>En "Security groups" editá las reglas de ingreso.</li>
        <li>Agregá una nueva:
          <ul>
            <li>Type: HTTP</li>
            <li>Port: 80</li>
            <li>Source: Anywhere</li>
          </ul>
        </li>
      </ol>
      
      <p>Listo. Abrí tu IP en el navegador… ¡y magia! 🪄</p>
      
      <h3>💡 Tips finales</h3>
      <ul>
        <li>Usá un dominio gratis de <a href="https://www.freenom.com/" target="_blank">Freenom</a> y apuntalo a tu IP.</li>
        <li>Podés levantar un servidor PHP o incluso Node.js si querés.</li>
        <li>Hacé backups: EC2 puede reiniciarse y perder cambios si no usás volumenes persistentes.</li>
      </ul>
      
      <h3>Mi experiencia personal</h3>
      <p>Descubrí esto casi de casualidad, y me voló la cabeza. Poder tener un servidor <em>gratis</em>, sin depender de plataformas externas y con control total, es una joyita para cualquier developer o curioso. Lo estoy usando para montar mis proyectos personales y probar herramientas nuevas de forma segura.</p>
    `
  }
];

export const blogComments = [
  {
    id: 1,
    name: "John Doe",
    date: "30 JUL, 2025",
    comment: "Excelente artículo. Muy útil para mi proyecto.",
    image: "/assets/images/comment-thumb.png",
    replies: [
      {
        id: 1,
        name: "Luciano Campos",
        date: "31 JUL, 2025",
        comment: "¡Gracias! Me alegra que te haya sido útil.",
        image: "/assets/images/comment-thumb2.png",
      },
    ],
  },
];

export const blogSocialIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: "https://twitter.com",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com",
  },
  {
    id: 4,
    icon: <FaPinterestP />,
    url: "https://pinterest.com",
  },
];

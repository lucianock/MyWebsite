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
      thumbnail: "/assets/images/aws.jpg",
      mainImage: "/assets/images/aws.jpg",
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
  },
  {
    id: 2,
    title: "blog.dockerPrincipiantes",
    tags: "blog.technology",
    date: "08 AUG, 2025",
    description: "blog.dockerPrincipiantesDesc",
    image: {
      thumbnail: "/assets/images/docker.webp",
      mainImage: "/assets/images/docker.webp",
    },
    slug: "docker-para-principiantes-guia-practica",
    allTags: ["docker", "containers", "devops", "deployment", "development"],
    readTime: "4 min read",
    featured: true,
    content: `
      <h3>🐳 ¿Qué es Docker y por qué debería importarte?</h3>
      <p>Docker es como tener una "caja mágica" donde podés meter tu aplicación con todo lo que necesita para funcionar. Imaginate que tu app es como una receta de cocina: Docker te permite empaquetar todos los ingredientes (librerías, configuraciones, dependencias) en un contenedor que funciona igual en cualquier lado.</p>
      
      <p>La magia está en que <strong>funciona en mi PC, en tu PC, en el servidor, en la nube</strong>... siempre igual. No más "en mi máquina funciona" 😅</p>
      
      <h3>🚀 Paso 1 – Instalar Docker</h3>
      <ol>
        <li>Andá a <a href="https://docker.com/" target="_blank">docker.com</a> y descargá Docker Desktop.</li>
        <li>Instalalo (es súper fácil, solo "siguiente, siguiente, siguiente").</li>
        <li>Reiniciá tu PC y listo.</li>
      </ol>
      
      <p>Para verificar que funcionó, abrí una terminal y escribí:</p>
      <pre><code>docker --version</code></pre>
      
      <h3>📦 Paso 2 – Tu primer contenedor</h3>
      <p>Vamos a probar que todo funciona con un contenedor simple:</p>
      <pre><code>docker run hello-world</code></pre>
      
      <p>Si ves un mensaje de bienvenida, ¡todo está funcionando perfecto!</p>
      
      <h3>🌐 Paso 3 – Levantar un servidor web</h3>
      <p>Ahora vamos a levantar un servidor web real. Probá esto:</p>
      <pre><code>docker run -d -p 8080:80 nginx</code></pre>
      
      <p>Explicación rápida:
      <ul>
        <li><code>-d</code>: ejecuta en segundo plano</li>
        <li><code>-p 8080:80</code>: conecta el puerto 8080 de tu PC con el puerto 80 del contenedor</li>
        <li><code>nginx</code>: es el servidor web</li>
      </ul>
      </p>
      
      <p>Ahora abrí tu navegador y andá a <code>http://localhost:8080</code>. ¡Deberías ver la página de bienvenida de nginx!</p>
      
      <h3>📝 Paso 4 – Crear tu propio Dockerfile</h3>
      <p>Ahora vamos a crear tu primera aplicación con Docker. Creá una carpeta nueva y dentro poné estos archivos:</p>
      
      <p><strong>index.html:</strong></p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mi primera app con Docker&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;¡Hola desde Docker! 🐳&lt;/h1&gt;
    &lt;p&gt;Mi primera aplicación containerizada&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <p><strong>Dockerfile:</strong></p>
      <pre><code>FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80</code></pre>
      
      <h3>🔨 Paso 5 – Construir y ejecutar</h3>
      <p>En la terminal, desde tu carpeta:</p>
      <pre><code>docker build -t mi-primera-app .
docker run -d -p 3000:80 mi-primera-app</code></pre>
      
      <p>Ahora andá a <code>http://localhost:3000</code> y ¡voilà! Tenés tu app corriendo en Docker.</p>
      
      <h3>📋 Comandos útiles para principiantes</h3>
      <ul>
        <li><code>docker ps</code> - ver contenedores corriendo</li>
        <li><code>docker ps -a</code> - ver todos los contenedores (incluso los parados)</li>
        <li><code>docker stop [id]</code> - parar un contenedor</li>
        <li><code>docker rm [id]</code> - eliminar un contenedor</li>
        <li><code>docker images</code> - ver las imágenes que tenés</li>
        <li><code>docker rmi [nombre]</code> - eliminar una imagen</li>
      </ul>
      
      <h3>💡 Tips para no volverte loco</h3>
      <ul>
        <li><strong>Nombres descriptivos:</strong> Usá nombres claros para tus contenedores: <code>docker run --name mi-app-node mi-app</code></li>
        <li><strong>Puertos diferentes:</strong> Si tenés varios contenedores, usá puertos distintos: 3000, 3001, 3002...</li>
        <li><strong>Limpieza regular:</strong> <code>docker system prune</code> para limpiar contenedores e imágenes que no usás</li>
        <li><strong>Volúmenes para datos:</strong> Si tu app guarda datos, usá volúmenes para que no se pierdan</li>
      </ul>
      
      <h3>🚀 Caso práctico: Node.js con Docker</h3>
      <p>¿Querés probar algo más real? Creá una app Node.js simple:</p>
      
      <p><strong>app.js:</strong></p>
      <pre><code>const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Node.js en Docker! 🐳');
});

app.listen(port, () => {
  console.log(\`App corriendo en puerto \${port}\`);
});</code></pre>
      
      <p><strong>package.json:</strong></p>
      <pre><code>{
  "name": "mi-app-node",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}</code></pre>
      
      <p><strong>Dockerfile:</strong></p>
      <pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]</code></pre>
      
      <p>Construí y ejecutá:</p>
      <pre><code>docker build -t mi-app-node .
docker run -d -p 3001:3000 mi-app-node</code></pre>
      
      <h3>Mi experiencia personal</h3>
      <p>Docker me cambió la vida como developer. Antes pasaba horas configurando entornos, instalando dependencias, peleándome con versiones... Ahora es como tener un "botón mágico" que hace que todo funcione igual en cualquier lado. Es especialmente útil cuando trabajás en equipo o cuando tenés que desplegar en diferentes servidores.</p>
      
      <p>Lo mejor es que <em>no necesitás ser un experto</em> para empezar. Con estos comandos básicos ya podés hacer mucho. ¡Y una vez que le agarrás la mano, no hay vuelta atrás!</p>
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

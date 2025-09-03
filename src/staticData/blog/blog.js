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
    isoDate: "2025-07-30",
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
    isoDate: "2025-08-08",
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
  },
  {
    id: 3,
    title: "blog.linuxCheatsheet",
    tags: "blog.technology",
    date: "02 SEP, 2025",
    isoDate: "2025-09-02",
    description: "blog.linuxCheatsheetDesc",
    image: {
      thumbnail: "/assets/images/wp13498907.png",
      mainImage: "/assets/images/wp13498907.png",
    },
    slug: "guia-rapida-comandos-utiles-para-servidor-linux",
    allTags: ["linux", "sysadmin", "devops", "servers", "security"],
    readTime: "5 min read",
    featured: true,
    content: `
      <h2>🖥️ Guía rápida — Comandos esenciales para tu servidor Linux</h2>
      <p>Tener un servidor en la nube (AWS, DigitalOcean, Hetzner...) es fantástico — hasta que necesitás un comando y no lo recordás. Esta guía compacta combina <strong>comandos listos para copiar</strong>, <strong>ejemplos prácticos</strong>, <strong>mejores prácticas</strong> y una versión corta para publicar.</p>

      <hr />

      <h3>🔍 Información del sistema (rápido)</h3>
      <pre><code>uname -a
lsb_release -a
uptime
htop
df -h
du -sh *
free -h</code></pre>
      <p><strong>Tip:</strong> <code>watch -n 2 df -h</code> refresca cada 2s.</p>

      <h3>📂 Manejo de archivos y búsquedas</h3>
      <pre><code>ls -lh
cp -r origen/ destino/
mv archivo1 archivo2
rm -rf carpeta/
find / -name "archivo*" 2&gt;/dev/null
locate archivo</code></pre>
      <p><strong>Ejemplo útil:</strong> borrar .log viejos:</p>
      <pre><code>find /var/log -type f -name '*.log' -mtime +30 -exec rm -f {} \\;</code></pre>

      <h3>👥 Usuarios, sudo y permisos</h3>
      <pre><code>adduser usuario
passwd usuario
usermod -aG sudo usuario
chown -R user:group carpeta/
chmod 750 archivo.sh
getent passwd usuario</code></pre>
      <p><strong>Mejor práctica:</strong> evitá <code>chmod 777</code> en producción.</p>

      <h3>🌐 Redes y conectividad</h3>
      <pre><code>ip a
curl -s ifconfig.me
ping 8.8.8.8 -c 4
ss -lntup
iptables -L -n --line-numbers</code></pre>
      <p><strong>SSH:</strong> endurecé <code>/etc/ssh/sshd_config</code> (sin root login, solo llaves).</p>

      <h3>⚙️ Servicios y procesos</h3>
      <pre><code>systemctl status nginx
systemctl restart nginx
journalctl -u nginx -f
ps aux | grep nombre_proceso
kill PID</code></pre>
      <p><strong>Tip:</strong> si un restart falla, mirá <code>journalctl -xe</code>.</p>

      <h3>🔐 Seguridad y firewall</h3>
      <pre><code>ufw status
ufw allow 22/tcp
ufw allow 80,443/tcp
ufw enable
fail2ban-client status</code></pre>
      <ul>
        <li><code>PermitRootLogin no</code></li>
        <li><code>PasswordAuthentication no</code></li>
        <li><code>AllowUsers tu_usuario</code></li>
      </ul>

      <h3>🛠️ Paquetes y actualizaciones</h3>
      <pre><code>apt update && apt upgrade -y
apt install htop git curl unzip
dpkg -l | grep paquete</code></pre>
      <p>En CentOS/RHEL usá <code>yum</code> o <code>dnf</code>.</p>

      <h3>🗂️ Logs y diagnóstico</h3>
      <pre><code>tail -n 200 /var/log/syslog
tail -f /var/log/nginx/error.log
dmesg | less
journalctl -b --no-pager</code></pre>

      <h3>📈 Monitorización y alertas (básico)</h3>
      <ul>
        <li>Instalá <code>netdata</code> o <code>prometheus + grafana</code>.</li>
        <li>Alertas con <code>alertmanager</code> o <code>healthchecks</code>.</li>
      </ul>
      <p><strong>Chequeo rápido:</strong> <code>curl -I http://localhost:80</code>.</p>

      <h3>💾 Backup y recuperación</h3>
      <p><strong>Backup simple con rsync:</strong></p>
      <pre><code>rsync -avz --delete /var/www/ backup@backup.example:/backups/www/</code></pre>
      <p><strong>Dump de MySQL:</strong></p>
      <pre><code>mysqldump -u root -pBDPASS dbname | gzip > /backups/dbname-$(date +%F).sql.gz</code></pre>

      <h3>🧰 Script útil: ~/cheatsheet.sh</h3>
      <pre><code>#!/usr/bin/env bash
case "$1" in
  disk) df -h ;;
  mem) free -h ;;
  top) htop ;;
  ip) ip a ;;
  logs) tail -n 200 /var/log/syslog ;;
  *) echo "Usage: $0 {disk|mem|top|ip|logs}" ;;
esac</code></pre>

      <h3>🧾 Tips rápidos</h3>
      <ul>
        <li>Documentá cambios en <code>CHANGELOG.md</code> o <code>/var/log/custom_changes.log</code>.</li>
        <li>Usá <code>ssh-agent</code> y passphrase en llaves.</li>
        <li>Automatizá con <code>cron</code> o <code>systemd timers</code>.</li>
        <li>Alertas por disco/memoria baja.</li>
        <li>Probá primero en staging.</li>
      </ul>

      <h3>⚠️ Advertencias</h3>
      <ul>
        <li>No ejecutes <code>rm -rf /</code> ni comandos dudosos.</li>
        <li>Tené backups antes de cambios críticos.</li>
        <li>Evitá exponer puertos innecesarios.</li>
      </ul>
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

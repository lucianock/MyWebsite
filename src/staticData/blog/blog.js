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
    contentKey: "blog.awsEc2GratisContent",
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
  ,
  {
    id: 4,
    title: "blog.tiendanubeApiPostman",
    tags: "blog.technology",
    date: "16 SEP, 2025",
    isoDate: "2025-09-16",
    description: "blog.tiendanubeApiPostmanDesc",
    image: {
      thumbnail: "/assets/images/mitiendanube.png",
      mainImage: "/assets/images/mitiendanube.png",
    },
    slug: "guia-api-tiendanube-postman",
    allTags: ["api", "tiendanube", "postman", "oauth", "partners"],
    readTime: "4 min read",
    featured: true,
    // When language is EN, we will use this content key for translated HTML
    contentKey: "blog.tiendanubeApiPostmanContent",
    content: `
      <h3>🚀 Paso 1 – Crear tu aplicación en Tiendanube Partners</h3>
      <ol>
        <li>Dirígete al <a href="https://partners.tiendanube.com/" target="_blank">Portal de Socios de Tiendanube</a> y regístrate o inicia sesión.</li>
        <li>En el panel de administración, ve a la sección <strong>"Mis aplicaciones"</strong> y haz clic en <strong>"Crear nueva aplicación"</strong>.</li>
        <li>Completa los campos requeridos:
          <ul>
            <li><strong>Nombre de la aplicación</strong>: Elige un nombre representativo.</li>
            <li><strong>URL de redirección</strong>: La URL a la que se redirigirá al usuario después de autorizar la aplicación.</li>
            <li><strong>Scopes</strong>: Selecciona los permisos necesarios, por ejemplo, <code>read_products</code>, <code>write_products</code>, etc.</li>
          </ul>
        </li>
        <li>Una vez creada, toma nota del <strong>ID de la aplicación</strong> y el <strong>Secreto de cliente</strong>.</li>
      </ol>

      <hr />

      <h3>🔐 Paso 2 – Obtener el token de acceso</h3>
      <ol>
        <li><strong>Redirige al usuario a la URL de autorización</strong>:</li>
      </ol>
      <pre><code>https://www.tiendanube.com/apps/{app_id}/authorize?scope=read_products,write_products&state=csrf-token</code></pre>
      <p>Reemplaza <code>{app_id}</code> por el ID de tu aplicación. <code>state</code> es opcional pero recomendado para prevenir ataques CSRF.</p>

      <p><strong>El usuario será redirigido</strong> a tu URL de redirección con un código de autorización:</p>
      <pre><code>https://tu-dominio.com/callback?code=authorization_code&state=csrf-token</code></pre>

      <p><strong>Intercambia el código por un token de acceso</strong>:</p>
      <p>POST a:</p>
      <pre><code>https://www.tiendanube.com/apps/authorize/token</code></pre>
      <p>Body JSON:</p>
      <pre><code>{
  "client_id": "tu_client_id",
  "client_secret": "tu_client_secret",
  "code": "authorization_code",
  "grant_type": "authorization_code"
}</code></pre>
      <p>La respuesta contiene el <code>access_token</code>.</p>

      <hr />

      <h3>🛒 Paso 3 – Consultar productos</h3>
      <ol>
        <li>Configura un request GET en POSTMAN:</li>
      </ol>
      <ul>
        <li>URL: <code>https://api.tiendanube.com/v1/{store_id}/products.json</code></li>
        <li>Header: <code>Authorization: Bearer token_de_acceso</code></li>
      </ul>
      <p>Ejecuta y recibirás un JSON con los productos.</p>

      <hr />

      <h3>📝 Paso 4 – Crear un nuevo producto</h3>
      <p>Configura un request POST:</p>
      <ul>
        <li>URL: <code>https://api.tiendanube.com/v1/{store_id}/products.json</code></li>
        <li>Headers:
          <ul>
            <li><code>Authorization: Bearer token_de_acceso</code></li>
            <li><code>Content-Type: application/json</code></li>
          </ul>
        </li>
      </ul>
      <p>Body JSON:</p>
      <pre><code>{
  "product": {
    "title": "Nombre del producto",
    "price": 1000,
    "description": "Descripción del producto",
    "available_on": "2025-09-16",
    "tags": ["etiqueta1", "etiqueta2"]
  }
}</code></pre>

      <hr />

      <h3>💡 Tips finales</h3>
      <ul>
        <li>Usa variables de entorno en POSTMAN para manejar el <code>access_token</code> y URLs.</li>
        <li>Maneja errores y respuestas de la API para integraciones robustas.</li>
        <li>Consulta la <a href="https://tiendanube.github.io/api-documentation/" target="_blank">documentación oficial</a> para explorar más endpoints.</li>
      </ul>

      <h3>🧪 Mi experiencia personal</h3>
      <p>Probar la API de Tiendanube me permitió entender cómo autenticar, leer y modificar datos de una tienda real sin riesgos. Postman se vuelve indispensable para probar endpoints y automatizar requests, sobre todo en integraciones con Laravel o Node.</p>
    `
  }
  ,
  {
    id: 5,
    title: "blog.postmanApiGuide",
    tags: "blog.technology",
    date: "16 SEP, 2025",
    isoDate: "2025-09-16",
    description: "blog.postmanApiGuideDesc",
    image: {
      thumbnail: "/assets/images/postman.png",
      mainImage: "/assets/images/postman.png",
    },
    slug: "guia-postman-apis-reqres",
    allTags: ["postman", "api", "rest", "reqres", "testing"],
    readTime: "4 min read",
    featured: true,
    contentKey: "blog.postmanApiGuideContent",
    content: `
      <h3>🚀 Paso 1 – Descargar e instalar POSTMAN</h3>
      <ol>
        <li>Andá a <a href="https://www.postman.com/downloads/" target="_blank">postman.com/downloads</a> y descargá la versión para tu sistema.</li>
        <li>Instalalo y abrilo.</li>
        <li>Creá una cuenta para guardar tus colecciones en la nube (opcional).</li>
      </ol>

      <hr />

      <h3>🖥️ Paso 2 – Crear tu colección</h3>
      <ol>
        <li>En la barra lateral izquierda hacé clic en "Collections".</li>
        <li>Presioná "+ New Collection" y poné nombre: <code>PruebaReqRes</code>.</li>
        <li>Ahí vamos a guardar todos nuestros requests.</li>
      </ol>

      <hr />

      <h3>🔗 Paso 3 – Probar un GET (obtener usuarios)</h3>
      <ol>
        <li>Agregá un nuevo request a la colección y nombralo <strong>Obtener usuarios</strong>.</li>
        <li>Método: <code>GET</code></li>
        <li>URL:</li>
      </ol>
      <pre><code>https://reqres.in/api/users?page=2</code></pre>
      <p>Hacé clic en "Send" y vas a recibir un JSON con usuarios reales de prueba.</p>

      <hr />

      <h3>✏️ Paso 4 – Probar un POST (crear usuario)</h3>
      <ol>
        <li>Nuevo request: <strong>Crear usuario</strong></li>
        <li>URL:</li>
      </ol>
      <pre><code>https://reqres.in/api/users</code></pre>
      <p>Método: <code>POST</code>. En "Body" → <code>raw</code> → <code>JSON</code>:</p>
      <pre><code>{
  "name": "Luciano",
  "job": "Developer"
}</code></pre>
      <p>"Send" y vas a ver la respuesta con el <code>id</code> y <code>createdAt</code>.</p>

      <hr />

      <h3>🔄 Paso 5 – Probar PUT (actualizar usuario)</h3>
      <ol>
        <li>Nuevo request: <strong>Actualizar usuario</strong></li>
        <li>URL:</li>
      </ol>
      <pre><code>https://reqres.in/api/users/2</code></pre>
      <p>Método: <code>PUT</code>. Body → <code>raw</code> → <code>JSON</code>:</p>
      <pre><code>{
  "name": "Luciano",
  "job": "Senior Developer"
}</code></pre>
      <p>Send → verás la fecha de actualización <code>updatedAt</code>.</p>

      <hr />

      <h3>🗑️ Paso 6 – Probar DELETE (borrar usuario)</h3>
      <ol>
        <li>Nuevo request: <strong>Eliminar usuario</strong></li>
        <li>URL:</li>
      </ol>
      <pre><code>https://reqres.in/api/users/2</code></pre>
      <p>Método: <code>DELETE</code>. La API devuelve <code>204 No Content</code> si se borró correctamente.</p>

      <hr />

      <h3>🛠️ Paso 7 – Usar variables de entorno</h3>
      <ol>
        <li>En Postman → "Environments" → "Add".</li>
        <li>Variable: <code>{{base_url}}</code> = <code>https://reqres.in/api</code>.</li>
        <li>Usá <code>{{base_url}}/users/2</code> en lugar de escribir la URL completa.</li>
      </ol>

      <hr />

      <h3>✅ Paso 8 – Agregar tests automáticos</h3>
      <p>En la pestaña "Tests" del request GET:</p>
      <pre><code>pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response tiene datos de usuarios", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.data.length).to.be.above(0);
});</code></pre>
      <p>Postman correrá estas pruebas cada vez que ejecutes el request.</p>

      <hr />

      <h3>💡 Tips finales</h3>
      <ul>
        <li>Guardá siempre tus requests en colecciones.</li>
        <li>Usá variables de entorno para no editar URLs constantemente.</li>
        <li>Agregá tests automáticos para validar APIs sin escribir código extra.</li>
      </ul>

      <h3>🧪 Mi experiencia personal</h3>
      <p>Al probar APIs reales, todo cambia. No solo entendés cómo funciona GET y POST, sino que aprendés a manejar errores, validar respuestas y automatizar pruebas. Postman se volvió mi compañero para cualquier proyecto Laravel o Node, y me ahorra tiempo y dolores de cabeza.</p>
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

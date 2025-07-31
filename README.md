# 🚀 Portfolio Personal - Luciano Campos Kriegl

Portfolio personal desarrollado con Next.js, React y Tailwind CSS. Incluye sistema de blog interno para generar tráfico y mostrar expertise.

## 🎯 **Características Principales**

- ✅ **Portfolio Profesional** con diseño moderno
- ✅ **Sistema de Blog Interno** con contenido propio
- ✅ **Multiidioma** (Español/Inglés)
- ✅ **Responsive Design** para todos los dispositivos
- ✅ **SEO Optimizado** con metadatos
- ✅ **Integración LinkedIn** para networking

## 📝 **INSTRUCCIONES PARA IA - CREAR POSTS AUTOMÁTICAMENTE**

### **Cuando el usuario diga "Crea un post sobre [TEMA]", seguir estos pasos:**

#### **PASO 1: Generar Contenido**
- Crear título atractivo y profesional
- Escribir descripción corta (2-3 líneas)
- Generar contenido HTML completo con:
  - `<h2>` para títulos principales
  - `<h3>` para subtítulos
  - `<p>` para párrafos
  - `<ul>` y `<li>` para listas
  - `<ol>` y `<li>` para listas numeradas
  - `<pre><code>` para bloques de código
  - `<code>` para código inline
  - `<a href="">` para enlaces

#### **PASO 2: Estructura de Datos**
```javascript
{
  id: [NÚMERO_SECUENCIAL],
  title: "blog.[NOMBRE_ARTICULO]",
  tags: "blog.technology", // o "blog.development"
  date: "[FECHA_ACTUAL]",
  description: "blog.[NOMBRE_ARTICULO]Desc",
  image: {
    thumbnail: "/assets/images/placeholder.jpg",
    mainImage: "/assets/images/placeholder.jpg",
  },
  slug: "[SLUG_UNICO]",
  allTags: ["tag1", "tag2", "tag3"],
  readTime: "[X] min read",
  featured: true, // o false
  content: `[CONTENIDO_HTML_COMPLETO]`
}
```

#### **PASO 3: Traducciones**
**En `src/staticData/translations/en.js`:**
```javascript
blog: {
  [NOMBRE_ARTICULO]: "[TÍTULO_EN_INGLÉS]",
  [NOMBRE_ARTICULO]Desc: "[DESCRIPCIÓN_EN_INGLÉS]",
  // Traducciones del blog (si no existen)
  hero: {
    heading: "Blog Posts",
    lastBreadcrumb: "BLOG POSTS"
  },
  singleHero: {
    heading: "Blog Post", 
    lastBreadcrumb: "BLOG POST"
  },
  technology: "Technology",
  development: "Development"
}
```

**En `src/staticData/translations/es.js`:**
```javascript
blog: {
  [NOMBRE_ARTICULO]: "[TÍTULO_EN_ESPAÑOL]",
  [NOMBRE_ARTICULO]Desc: "[DESCRIPCIÓN_EN_ESPAÑOL]",
  // Traducciones del blog (si no existen)
  hero: {
    heading: "Artículos del Blog",
    lastBreadcrumb: "ARTÍCULOS DEL BLOG"
  },
  singleHero: {
    heading: "Artículo del Blog",
    lastBreadcrumb: "ARTÍCULO DEL BLOG"
  },
  technology: "Tecnología",
  development: "Desarrollo"
}
```

#### **PASO 4: Archivos a Modificar**
1. **`src/staticData/blog/blog.js`** - Agregar nuevo artículo
2. **`src/staticData/translations/en.js`** - Traducción inglés
3. **`src/staticData/translations/es.js`** - Traducción español

#### **PASO 5: Reglas Importantes**
- **Slug único**: Usar guiones, sin espacios, descriptivo
- **Tags relevantes**: Para SEO y categorización
- **Contenido técnico**: Mostrar expertise real
- **HTML válido**: Solo tags permitidos
- **Longitud**: 5-15 minutos de lectura
- **Estructura**: Introducción → Desarrollo → Conclusión
- **Imágenes**: Usar placeholder.jpg o imágenes reales
- **Enlaces**: Incluir target="_blank" para externos

#### **PASO 6: Ejecutar Cambios**
1. Editar `blog.js` - Agregar artículo completo
2. Editar `en.js` - Agregar traducciones inglés
3. Editar `es.js` - Agregar traducciones español
4. Confirmar que todo funciona

### **🎯 Formato de Respuesta:**
```
✅ POST CREADO: "[TÍTULO]"
📁 Archivos modificados: 3
🌐 URL: /blog/[SLUG]
📝 Contenido: [X] párrafos, [Y] bloques de código
⏱️ Tiempo de lectura: [Z] min
```

## 🚀 **Instalación y Uso**

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start
```

## 📁 **Estructura del Proyecto**

```
src/
├── components/     # Componentes React
├── staticData/     # Datos y traducciones
├── pages/         # Páginas Next.js
└── hooks/         # Hooks personalizados
```

---

**¡Listo para crear posts automáticamente!** 🚀 
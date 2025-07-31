# 🚀 Portfolio Personal - Luciano Campos Kriegl

Portfolio personal desarrollado con Next.js, React y Tailwind CSS. Incluye sistema de blog integrado con Medium para generar tráfico y mostrar expertise.

## 🎯 **Características Principales**

- ✅ **Portfolio Profesional** con diseño moderno
- ✅ **Sistema de Blog** integrado con Medium
- ✅ **Multiidioma** (Español/Inglés)
- ✅ **Responsive Design** para todos los dispositivos
- ✅ **SEO Optimizado** con metadatos
- ✅ **Integración LinkedIn** para networking

## 📝 **Sistema de Blog - Pasos Rápidos**

### 1. **Crear Post en Medium**
```bash
# Escribe tu artículo en Medium
# Publica y copia la URL
# Ejemplo: https://medium.com/@lucianocampos.k/tu-articulo
```

### 2. **Agregar al Sistema**
Edita `src/staticData/blog/blog.js`:
```javascript
{
  id: 1,
  title: "blog.tuPost",
  tags: "blog.technology",
  date: "20 DEC, 2024",
  description: "blog.tuPostDesc",
  link: "https://medium.com/@lucianocampos.k/tu-articulo",
  slug: "tu-articulo",
  type: "medium",
  externalUrl: "https://medium.com/@lucianocampos.k/tu-articulo",
  readTime: "8 min read",
  featured: true
}
```

### 3. **Agregar Traducciones**
En `src/staticData/translations/en.js`:
```javascript
blog: {
  tuPost: "Tu Título",
  tuPostDesc: "Descripción corta"
}
```

En `src/staticData/translations/es.js`:
```javascript
blog: {
  tuPost: "Tu Título en Español",
  tuPostDesc: "Descripción en español"
}
```

### 4. **Compartir en LinkedIn**
- Comparte preview del artículo
- Enlaza a tu portfolio
- Genera tráfico y networking

## 🎨 **Indicadores Visuales**

- **Posts Medium**: Badge "Medium" + "READ ON MEDIUM"
- **Posts Destacados**: Badge "Featured"
- **Tiempo de lectura**: Icono reloj + tiempo estimado

## 📊 **Flujo de Tráfico**

```
LinkedIn → Tu Portfolio → Medium → Retorno
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

## 🎯 **Próximos Pasos**

- [ ] Sistema de categorías avanzado
- [ ] Búsqueda en posts
- [ ] Newsletter signup
- [ ] Analytics detallados

---

**¡Listo para generar tráfico y mostrar tu expertise!** 🚀 
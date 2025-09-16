*Guía práctica para probar la API de Tiendanube Partners usando POSTMAN*

## 🚀 Paso 1 – Crear tu aplicación en Tiendanube Partners

1. Dirígete al [Portal de Socios de Tiendanube](https://partners.tiendanube.com/) y regístrate o inicia sesión.
2. En el panel de administración, ve a la sección **"Mis aplicaciones"** y haz clic en **"Crear nueva aplicación"**.
3. Completa los campos requeridos:
   - **Nombre de la aplicación**: Elige un nombre representativo.
   - **URL de redirección**: La URL a la que se redirigirá al usuario después de autorizar la aplicación.
   - **Scopes**: Selecciona los permisos necesarios, por ejemplo, `read_products`, `write_products`, etc.
4. Una vez creada, toma nota del **ID de la aplicación** y el **Secreto de cliente**.

---

## 🔐 Paso 2 – Obtener el token de acceso

Para autenticarte y obtener un token de acceso:

1. **Redirige al usuario a la URL de autorización**:

```
https://www.tiendanube.com/apps/{app_id}/authorize?scope=read_products,write_products&state=csrf-token
```

Reemplaza `{app_id}` por el ID de tu aplicación. `state` es opcional pero recomendado para prevenir ataques CSRF.

2. El usuario será redirigido a tu **URL de redirección** con un código de autorización:

```
https://tu-dominio.com/callback?code=authorization_code&state=csrf-token
```

3. **Intercambia el código por un token de acceso**:

POST a:
```
https://www.tiendanube.com/apps/authorize/token
```

Body JSON:
```json
{
  "client_id": "tu_client_id",
  "client_secret": "tu_client_secret",
  "code": "authorization_code",
  "grant_type": "authorization_code"
}
```

La respuesta contiene el `access_token`.

---

## 🛒 Paso 3 – Consultar productos

1. Configura un request GET en POSTMAN:
   - URL: `https://api.tiendanube.com/v1/{store_id}/products.json`
   - Header: `Authorization: Bearer token_de_acceso`

2. Ejecuta y recibirás un JSON con los productos.

---

## 📝 Paso 4 – Crear un nuevo producto

1. Configura un request POST:
   - URL: `https://api.tiendanube.com/v1/{store_id}/products.json`
   - Headers:
     - `Authorization: Bearer token_de_acceso`
     - `Content-Type: application/json`
   - Body JSON:
```json
{
  "product": {
    "title": "Nombre del producto",
    "price": 1000,
    "description": "Descripción del producto",
    "available_on": "2025-09-16",
    "tags": ["etiqueta1", "etiqueta2"]
  }
}
```

2. Ejecuta y verifica que el producto se haya creado.

---

## 💡 Tips finales

- Usa variables de entorno en POSTMAN para manejar el `access_token` y URLs.
- Maneja errores y respuestas de la API para integraciones robustas.
- Consulta la [documentación oficial](https://tiendanube.github.io/api-documentation/) para explorar más endpoints.

---

##  Mi experiencia personal

Probar la API de Tiendanube me permitió entender cómo autenticar, leer y modificar datos de una tienda real sin riesgos. Postman se vuelve indispensable para probar endpoints y automatizar requests, sobre todo en integraciones con Laravel o Node.


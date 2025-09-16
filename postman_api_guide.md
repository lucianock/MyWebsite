*Guía práctica para probar APIs RESTful con POSTMAN usando una API real*

## 🚀 Paso 1 – Descargar e instalar POSTMAN

1. Andá a [https://www.postman.com/downloads/](https://www.postman.com/downloads/) y descargá la versión para tu sistema.
    
2. Instalalo y abrilo.  
   
3. Creá una cuenta para guardar tus colecciones en la nube (opcional, pero recomendado).

---

## 🖥️ Paso 2 – Crear tu colección

1. En la barra lateral izquierda hacé clic en “Collections”.  
   
2. Presioná “+ New Collection” y poné nombre: `PruebaReqRes`.  
   
3. Ahí vamos a guardar todos nuestros requests.

---

## 🔗 Paso 3 – Probar un GET (obtener usuarios)

1. Agregá un nuevo request a la colección.  
   
2. Nombre: `Obtener usuarios`.  
   
3. URL:

```
https://reqres.in/api/users?page=2
```

4. Método: `GET`.  
   
5. Hacé clic en “Send” y vas a recibir un JSON con usuarios reales de prueba.

---

## ✏️ Paso 4 – Probar un POST (crear usuario)

1. Nuevo request: `Crear usuario`.  
   
2. URL:

```
https://reqres.in/api/users
```

3. Método: `POST`.  
   
4. En “Body” → `raw` → `JSON`, pegá:

```json
{
  "name": "Luciano",
  "job": "Developer"
}
```

5. “Send” y vas a ver la respuesta con el `id` y `createdAt`.

---

## 🔄 Paso 5 – Probar PUT (actualizar usuario)

1. Nuevo request: `Actualizar usuario`.  
   
2. URL:

```
https://reqres.in/api/users/2
```

3. Método: `PUT`.  

4. Body → `raw` → `JSON`:

```json
{
  "name": "Luciano",
  "job": "Senior Developer"
}
```

5. “Send” → verás la fecha de actualización `updatedAt`.

---

## 🗑️ Paso 6 – Probar DELETE (borrar usuario)

1. Nuevo request: `Eliminar usuario`.  

2. URL:

```
https://reqres.in/api/users/2
```

3. Método: `DELETE`.  

4. “Send” → la API devuelve un `204 No Content` indicando que se borró correctamente.

---

## 🛠️ Paso 7 – Usar variables de entorno

1. En Postman → “Environments” → “Add”.  

2. Variable: `{{base_url}} = https://reqres.in/api`.  

3. Ahora tus requests pueden usar `{{base_url}}/users/2` en lugar de escribir la URL completa.  

4. Cambiá de entorno y todos los requests usan la nueva base sin editar nada.

---

## ✅ Paso 8 – Agregar tests automáticos

1. Abrí un request GET y en la pestaña “Tests” pegá:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response tiene datos de usuarios", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.length).to.be.above(0);
});
```

2. Hacé “Send” y Postman correrá automáticamente estas pruebas cada vez que ejecutes el request.

---

## 💡 Tips finales

- Guardá siempre tus requests en colecciones.  
- Usá variables de entorno para no editar URLs constantemente.  
- Aprendé a usar tests automáticos para validar APIs sin escribir código extra.  
- Podés combinar esto con APIs reales como OpenWeatherMap para probar cosas más complejas.  

---

##  Mi experiencia personal

Al probar APIs reales, todo cambia. No solo entendés cómo funciona GET y POST, sino que aprendés a manejar errores, validar respuestas y automatizar pruebas. Postman se volvió mi compañero para cualquier proyecto Laravel o Node, y me ahorra tiempo y dolores de cabeza. Además, probar APIs de prueba públicas permite experimentar sin miedo a romper nada.


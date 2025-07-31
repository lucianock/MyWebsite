
## 🚀 Paso 1 – Crear tu cuenta en AWS

1. Andá a [aws.amazon.com](https://aws.amazon.com/) y registrate.
    
2. Vas a necesitar una tarjeta de crédito. Tranca, no te cobran mientras estés en el plan gratuito.
    
3. Activás tu cuenta y listo, entrás al dashboard.
    

---

## 🖥️ Paso 2 – Lanzar tu instancia EC2

1. En el buscador poné “EC2” y hacé clic.
    
2. Elegí “Launch instance”.
    
3. Elegí una imagen de sistema (te recomiendo Ubuntu Server 22.04).
    
4. En “Instance type” seleccioná `t2.micro` (es la gratuita).
    
5. Elegí o creá un nuevo par de llaves (guardalo bien, sin esto no accedés).
    
6. Hacé clic en “Launch instance”.
    

¡Ya tenés tu servidor online!

---

## 🔐 Paso 3 – Acceder por SSH

Si estás en Linux o Mac:

```bash
chmod 400 tu-archivo.pem
ssh -i "tu-archivo.pem" ubuntu@tu-ip-publica
```

En Windows podés usar PuTTY o el nuevo terminal de Windows con OpenSSH.

---

## 🌐 Paso 4 – Instalar tu web

Un ejemplo rápido con Apache:

```bash
sudo apt update && sudo apt install apache2 -y
```

Luego, copiá tus archivos al directorio `/var/www/html/`.

Podés subir tu portfolio, un proyecto Laravel, una landing… lo que sea.

---

## 📡 Paso 5 – Abrir el puerto 80

Tenés que permitir el tráfico HTTP:

1. En el panel de EC2, andá a tu instancia.
    
2. En “Security groups” editá las reglas de ingreso.
    
3. Agregá una nueva:
    
    - Type: HTTP
        
    - Port: 80
        
    - Source: Anywhere
        

Listo. Abrí tu IP en el navegador… ¡y magia! 🪄

---

## 💡 Tips finales

- Usá un dominio gratis de [Freenom](https://www.freenom.com/) y apuntalo a tu IP.
    
- Podés levantar un servidor PHP o incluso Node.js si querés.
    
- Hacé backups: EC2 puede reiniciarse y perder cambios si no usás volumenes persistentes.
    

---

##  Mi experiencia personal

Descubrí esto casi de casualidad, y me voló la cabeza. Poder tener un servidor _gratis_, sin depender de plataformas externas y con control total, es una joyita para cualquier developer o curioso. Lo estoy usando para montar mis proyectos personales y probar herramientas nuevas de forma segura.

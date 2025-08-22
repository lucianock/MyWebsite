# 🖥️ Guía rápida — Comandos esenciales para tu servidor Linux

Tener un servidor en la nube (AWS, DigitalOcean, Hetzner...) es fantástico — hasta que necesitás un comando y no lo recordás. Esta guía compacta combina **comandos listos para copiar**, **ejemplos prácticos**, **mejores prácticas** y una versión corta pensada para publicar en LinkedIn.

---

## 🚀 ¿Para quién es esta guía?

Para desarrolladores, SREs, administradores de sistemas y cualquier persona que mantenga servidores en producción o staging. Ideal si querés un "cheatsheet" rápido que también puedas transformar en post técnico.

---

## 🔍 Información del sistema (rápido)

```bash
uname -a              # Info del kernel y SO
lsb_release -a        # Distro y versión (Debian/Ubuntu)
uptime                # Tiempo encendido y carga
htop                  # Monitor interactivo (instalar si falta)
df -h                 # Uso de discos (human readable)
du -sh *              # Tamaño de archivos/carpetas en cwd
free -h               # Memoria disponible/ocupada
```

**Tip:** `watch -n 2 df -h` refresca cada 2s.

---

## 📂 Manejo de archivos y búsquedas

```bash
ls -lh                        # listar con tamaños
cp -r origen/ destino/         # copiar recursivo
mv archivo1 archivo2           # mover/renombrar
rm -rf carpeta/                # eliminar (⚠️ peligroso)
find / -name "archivo*" 2>/dev/null  # buscar por nombre
locate archivo                 # usar mlocate para búsquedas rápidas (indexa)
```

**Ejemplo útil:** borrar .log viejos:
```bash
find /var/log -type f -name '*.log' -mtime +30 -exec rm -f {} \;
```

---

## 👥 Usuarios, sudo y permisos

```bash
adduser usuario
passwd usuario
usermod -aG sudo usuario        # agregar a sudo
chown -R user:group carpeta/
chmod 750 archivo.sh
getent passwd usuario           # verificar existencia de usuario
```

**Mejor práctica:** nunca uses `chmod 777` en producción. Usa permisos mínimos.

---

## 🌐 Redes y conectividad

```bash
ip a                          # ver interfaces y IPs
curl -s ifconfig.me            # IP pública
ping 8.8.8.8 -c 4              # check de red
ss -lntup                      # sockets escuchando (recomendado)
iptables -L -n --line-numbers  # reglas actuales (si usás iptables)
```

**SSH:** editar `/etc/ssh/sshd_config` para hardening (Deshabilitar root login, cambiar puerto, usar only-key auth).

---

## ⚙️ Servicios y procesos

```bash
systemctl status nginx        # estado de servicio
systemctl restart nginx       # reiniciar
journalctl -u nginx -f        # logs en vivo por servicio
ps aux | grep nombre_proceso
kill PID
```

**Consuelo rápido:** si un `systemctl restart` falla, ver `journalctl -xe`.

---

## 🔐 Seguridad y firewall

```bash
ufw status
ufw allow 22/tcp
ufw allow 80,443/tcp
ufw enable
fail2ban-client status        # bloqueo de intentos de login
```

**Hardening SSH (ejemplo mínimo):**
- `PermitRootLogin no`
- `PasswordAuthentication no` (usar llaves)
- `AllowUsers tu_usuario`

---

## 🛠️ Paquetes y actualizaciones

```bash
apt update && apt upgrade -y
apt install htop git curl unzip
dpkg -l | grep paquete
```

**Si usás CentOS/RHEL:** `yum` o `dnf` en lugar de `apt`.

---

## 🗂️ Logs y diagnóstico

```bash
tail -n 200 /var/log/syslog
tail -f /var/log/nginx/error.log
dmesg | less
journalctl -b --no-pager
```

**Rotación de logs:** configurar `logrotate` para evitar discos llenos.

---

## 📈 Monitorización y alertas (básico)

- Instala `netdata` o `prometheus + grafana` para métricas completas.
- Alertas: `prometheus` + `alertmanager` o usar `healthchecks` + webhook.

**Chequeo rápido:** `curl -I http://localhost:80` para ver respuesta HTTP.

---

## 💾 Backup y recuperación (imprescindible)

**Backup simple con rsync:**
```bash
rsync -avz --delete /var/www/ backup@backup.example:/backups/www/
```

**Dump de MySQL:**
```bash
mysqldump -u root -pBDPASS dbname | gzip > /backups/dbname-$(date +%F).sql.gz
```

**Sugerencia:** automatizá y probá restores periódicos.

---

## 🧰 Scripts útiles: `~/cheatsheet.sh`

Guardá esto como `~/cheatsheet.sh` y hacelo ejecutable (`chmod +x ~/cheatsheet.sh`).

```bash
#!/usr/bin/env bash
case "$1" in
  disk) df -h ;;
  mem) free -h ;;
  top) htop ;;
  ip) ip a ;;
  logs) tail -n 200 /var/log/syslog ;;
  *) echo "Usage: $0 {disk|mem|top|ip|logs}" ;;
esac
```

---

## 🧾 Tips rápidos y mejores prácticas

- Documentá cada cambio en un `CHANGELOG.md` o en el mismo servidor (`/var/log/custom_changes.log`).
- Usá `ssh keys` con passphrase y `ssh-agent` para mayor seguridad.
- Automatizá tareas repetitivas con `cron` o `systemd timers`.
- Monitorizá espacio en disco y memoria (alertas en < 10% libre).
- Probas siempre en staging antes de mover a producción.

---

## ⚠️ Advertencias críticas

- **No** ejecutés `rm -rf /` o comandos de confianza dudosa.
- Tené respaldo antes de cambios que afecten datos.
- Evitá exponer puertos innecesarios a Internet.

---

## ✍️ Versión para publicar en LinkedIn (short & punchy)

> 🖥️ **Cheatsheet rápido para servidores Linux**
>
> Tener un servidor en la nube es una responsabilidad: conocer 10 comandos puede salvarte horas. Aquí la versión corta para usar ahora: `uname -a`, `htop`, `df -h`, `ss -lntp`, `journalctl -u nginx -f`, `ufw status`. Guardá un `~/cheatsheet.sh` y automatizá backups con `rsync` / `mysqldump`. ¿Querés que lo deje listo para publicar y con imagen? 🚀

**Hashtags sugeridos:** `#Linux #DevOps #Sysadmin #Cloud #Tips`

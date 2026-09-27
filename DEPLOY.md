# Cómo publicar la web / Deployment

Alojamiento: **Vercel** (plan Hobby, gratuito).
Repositorio: `https://github.com/karimelhou/conductos-instalaciones`

---

## ⚠️ Dos cosas ANTES de conectar el dominio

### 1. El dominio tiene que estar puesto antes de compilar

Ahora mismo `src/config/site.ts` dice:

```ts
export const SITE_URL = 'https://conductosinstalaciones.es';
```

Ese dominio **no está contratado todavía**. Las direcciones canónicas, las
etiquetas hreflang, el sitemap y las imágenes para redes sociales se escriben
**dentro del HTML al compilar**, con el dominio completo. Si se indexa apuntando
a un dominio que no es tuyo, el daño en Google cuesta meses de arreglar.

Desplegar ahora en la URL `.vercel.app` que te da Vercel **es seguro**: Vercel
pone automáticamente una cabecera `X-Robots-Tag: noindex` en los despliegues de
vista previa, y la web no se indexa. Cuando tengas el dominio: cámbialo en
`SITE_URL` → `git push` → conecta el dominio.

### 2. La dirección del taller (obligatorio por ley)

El artículo 10 de la LSSI exige que una web comercial española muestre titular,
NIF y dirección. Rellena `BUSINESS.address` y `BUSINESS.legal` en
`src/config/site.ts`. Mientras estén vacíos, el aviso legal dice "Pendiente de
facilitar": es honesto, pero no cumple.

---

## Paso 1 — Subir el código a GitHub

Desde la carpeta del proyecto:

```bash
git init && git branch -M main && git add . && git commit -m "Sitio web Conductos Instalaciones" && git remote add origin https://github.com/karimelhou/conductos-instalaciones.git && git push -u origin main
```

Si GitHub pide credenciales, usa tu usuario y un **Personal Access Token** como
contraseña (github.com → Settings → Developer settings → Tokens).

---

## Paso 2 — Conectar Vercel

1. Entra en [vercel.com/new](https://vercel.com/new) con tu cuenta de GitHub.
2. Elige el repositorio **conductos-instalaciones** → *Import*.
3. **No cambies nada** en la pantalla de configuración. El archivo `vercel.json`
   que ya está en el proyecto fija todo lo importante:

   | Ajuste | Valor | De dónde sale |
   | --- | --- | --- |
   | Framework | Astro | `vercel.json` |
   | Build command | `npm run build` | `vercel.json` |
   | Output directory | `dist` | `vercel.json` |
   | Trailing slash | activado | `vercel.json` |
   | Versión de Node | la que decida Vercel | `engines` en `package.json` |

4. Pulsa **Deploy**. Tarda uno o dos minutos y te da una URL `…vercel.app`.

A partir de ahí **cada `git push` republica sola**. Y si una compilación falla
(por ejemplo porque falta una traducción), **la versión anterior sigue en pie**:
no se puede tirar la web publicada con un push malo.

### Por qué `vercel.json` importa

Vercel **no lee** el archivo `_headers` (ese formato es de Netlify y Cloudflare).
Las cabeceras de seguridad, la política de contenidos y la caché de un año para
las imágenes y las tipografías están duplicadas en `vercel.json` para que se
apliquen aquí. El `_headers` y el `.htaccess` se quedan en el proyecto por si
algún día se cambia de alojamiento.

`trailingSlash: true` también es importante: hace que `/climatizacion` redirija
a `/climatizacion/`, que es exactamente la dirección canónica que declara cada
página. Sin eso habría dos direcciones para cada página y Google se reparte la
fuerza entre las dos.

### Si la compilación falla por la versión de Node

Vercel usa por defecto la última LTS. El proyecto declara `>=20.3.0` en
`package.json`, así que Vercel escoge la más nueva disponible. Si alguna vez
falla por eso, cambia esa línea a una versión concreta y vuelve a hacer push:

```json
"engines": { "node": "22.x" }
```

> Nota: **Vercel retira Node 20 el 1 de octubre de 2026.** No lo fijes a `20.x`.

---

## Paso 3 — Conectar el dominio (comprado en Hostinger)

El dominio **conductosinstalaciones.es** ya está registrado en Hostinger, y
`SITE_URL` en `src/config/site.ts` ya apunta exactamente ahí. **No hay que tocar
ni una línea de código.**

### 3.1 — Añadir el dominio en Vercel

En Vercel: tu proyecto → *Settings* → *Domains* → **Add Domain** →
`conductosinstalaciones.es`. Vercel te ofrecerá añadir también
`www.conductosinstalaciones.es`: acéptalo.

Vercel te mostrará entonces **los valores DNS exactos de tu proyecto**.

> ⚠️ **Copia los valores de TU pantalla, no de ningún tutorial.** Vercel ya no
> usa un CNAME común para todos: cada proyecto tiene el suyo, con una pinta
> parecida a `d1d4fc829fe7bc7c.vercel-dns-017.com`. Si copias el de otro sitio,
> el dominio no valida nunca.

### 3.2 — Poner esos valores en Hostinger

**Mantén los servidores de nombres de Hostinger** (`atlas.dns-parking.com` y
`hyperion.dns-parking.com`). No los cambies por los de Vercel: si lo haces,
tendrás que rehacer en Vercel todos los registros de correo cuando quieras el
email `@conductosinstalaciones.es`, y es un lío innecesario. Con cambiar dos
registros basta.

En hPanel: *Noms de domaine* → **conductosinstalaciones.es** → *DNS / Serveurs
de noms* → **Gérer les enregistrements DNS**.

1. **Borra primero los registros de aparcamiento.** Hostinger crea por defecto
   un registro `A` en `@` y un `CNAME` en `www` que apuntan a su página de
   aparcamiento. Si los dejas, chocan con los nuevos y el dominio no valida.
   Borra los dos.

2. Crea estos dos, con los valores que te enseñó Vercel:

   | Tipo | Nombre | Valor | TTL |
   | --- | --- | --- | --- |
   | `A` | `@` | el que indique Vercel (normalmente `76.76.21.21`) | 3600 |
   | `CNAME` | `www` | el valor propio de tu proyecto, `…vercel-dns-0XX.com` | 3600 |

3. Guarda. La propagación suele tardar entre 10 minutos y 2 horas. Vercel emite
   el certificado HTTPS solo en cuanto detecta los registros: no hay que tocar
   nada de SSL. El aviso de "Installation du SSL en cours" que ves ahora en
   Hostinger es de su página de aparcamiento y deja de tener sentido.

### 3.3 — Cuál de los dos manda ⚠️ HAY QUE CORREGIRLO

Vercel, al añadir el dominio, pone **www como principal** y hace que el dominio
sin www redirija hacia él. **Para esta web es justo al revés** y hay que
cambiarlo a mano.

El motivo: las 12 direcciones del sitemap, todas las etiquetas `canonical` y
todos los `hreflang` están escritos **sin `www`** (salen de `SITE_URL`). Si se
queda como lo deja Vercel, le estás diciendo a Google "la página buena es la del
dominio sin www" mientras que esa misma dirección echa al visitante a www. Es
una contradicción que cuesta posiciones.

Cómo se ve el problema en *Settings* → *Domains*:

```
conductosinstalaciones.es        308 →  www.conductosinstalaciones.es    ← MAL
```

Cómo tiene que quedar:

```
conductosinstalaciones.es                                          ← principal
www.conductosinstalaciones.es    308 →  conductosinstalaciones.es  ← redirige
```

Para arreglarlo, en *Settings* → *Domains*:

1. En la fila de **`conductosinstalaciones.es`**, abre **Edit**. Donde ponga
   *Redirect to `www.conductosinstalaciones.es`*, cámbialo a **No Redirect**
   (que sirva el despliegue de producción). Guarda.
2. En la fila de **`www.conductosinstalaciones.es`**, abre **Edit** y ponlo a
   *Redirect to* → **`conductosinstalaciones.es`**, código **308**. Guarda.

> Las dos filas dirán *Invalid Configuration* hasta que los registros DNS del
> paso 3.2 estén puestos y propagados. Es normal: ahora mismo el dominio no
> apunta a ninguna parte. El sentido de la redirección se puede dejar bien
> configurado desde ya, sin esperar al DNS.

### 3.4 — Comprobar que quedó bien

Cuando propague, estas cuatro direcciones tienen que acabar todas en
`https://conductosinstalaciones.es/` :

```
http://conductosinstalaciones.es
https://www.conductosinstalaciones.es
http://www.conductosinstalaciones.es
https://conductosinstalaciones.es/climatizacion   (debe añadir la barra final)
```

---

## Alternativa sin git — subida manual

Para enseñárselo a alguien hoy mismo: `npm run build` y arrastra la carpeta
**`dist`** a [app.netlify.com/drop](https://app.netlify.com/drop). URL en
segundos. Cada actualización hay que volver a arrastrarla a mano, así que como
sistema definitivo es peor que Vercel.

---

## Después de publicar — esto es lo que de verdad trae clientes

Por orden de impacto real:

**1. Google Business Profile.** Mueve el teléfono mucho más que la web. Date de
alta en business.google.com, verifica en la dirección del taller, categoría
principal **"Contratista de calefacción, ventilación y aire acondicionado"**,
añade los municipios y sube 20 fotos de las que ya están preparadas en
`src/assets/photos/`.

**2. Pide reseñas.** Cero reseñas es la mayor desventaja frente a la competencia
y no hay nada en la web que lo compense. Guarda el enlace de reseñas como
respuesta rápida de WhatsApp y mándalo al terminar cada trabajo.

**3. Google Search Console.** Verifica el dominio por registro DNS TXT y envía:

```
https://TU-DOMINIO.es/sitemap-index.xml
```

A los pocos días, en *Segmentación internacional*, comprueba que no hay errores
de hreflang; en *Páginas* deberían aparecer 12 indexadas.

**4. Comprueba el WhatsApp.** Abre `https://wa.me/34602128302` desde el móvil.
**Tiene que abrir un chat.** Si sale "número no válido", ese número no tiene
WhatsApp y todos los botones verdes están perdiendo clientes.

**5. Repasa con las herramientas de Google.**
`search.google.com/test/rich-results` (la home y una página de servicio) y
`pagespeed.web.dev` en versión móvil.

**6. Directorios.** Páginas Amarillas, QDQ, Habitissimo, Cronoshare. Nombre,
dirección y teléfono **escritos exactamente igual** que en la web: Google los
cruza y las diferencias restan.

---

## Recordatorio

**No añadas Google Analytics ni un mapa de Google incrustado sin pensarlo.** La
web no usa cookies y por eso no necesita cartel de consentimiento. En cuanto
entra cualquiera de los dos, el cartel pasa a ser obligatorio por ley, la web va
más lenta y hay que rehacer el aviso legal. La compilación **falla a propósito**
si detecta un script externo en el HTML.

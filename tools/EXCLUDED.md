# Fotos que NO se publican / Photographs that are not published

Los 27 JPEG originales están en `raw/`, intactos. Se publican 15. Estos son los
motivos de los que faltan, para que la decisión quede registrada y no haya que
volver a tomarla.

The 27 original JPEGs are in `raw/`, untouched. Fifteen are published. These are
the reasons for the rest, recorded so the decision does not have to be retaken.

---

## Excluidas por contenido / Excluded on content grounds

| Archivo | Motivo |
| --- | --- |
| `WhatsApp Image 2026-08-30 at 1.39.30 PM.jpeg` | Es una foto de un monitor mostrando **la página de la Cuenta de Google de la empresa**, con el avatar y el correo en pantalla. No es contenido de obra y publicar una pantalla de sesión invita a spam y a ataques de credenciales. |
| `WhatsApp Image 2026-08-30 at 1.48.33 assas.jpeg` | Un operario en el **borde del parapeto de una cubierta sin arnés ni línea de vida visible**. Publicarla anuncia mala práctica de PRL justo a los clientes comerciales que la auditan. Ningún recorte arregla eso. |
| `WhatsApp Image 2026-08-30 at 1.48.29 PM.jpeg` | Cara identificable de un operario, a contraluz y subexpuesta, y el logotipo dominante es el del proveedor, no el de la empresa. Requeriría consentimiento por escrito o difuminado. |

## Excluidas por calidad / Excluded on quality grounds

| Archivo | Motivo |
| --- | --- |
| `WhatsApp Image 2026-08-30 at 1.48.28 PM.jpeg` | Captura de pantalla de una captura de pantalla: dos barras de estado, cabecera del visor y barra de navegación Android superpuestas. Blanda y de baja resolución. |
| `WhatsApp Image 2026-08-30 at 1.48.28 PMhhh.jpeg` | Buen motivo (tirada de conducto helicoidal sobre caballetes) pero es una captura con la interfaz quemada encima y la foto está movida. **Merece la pena repetirla.** |
| `WhatsApp Image 2026-08-30 at 1.48.25 PM.jpeg` | Dominante naranja muy fuerte, altas luces quemadas en el aluminio, horizonte torcido y suelo lleno de escombro. |
| `asaasas.jpeg` | Muy poca luz, dominante tungsteno, y el equipo aparece recién descargado sobre calzos de madera: se lee como "material sin instalar", no como trabajo terminado. |
| `WhatsApp Image 2026-08-30 at 1.48.33 PMggg.jpeg` | Subexpuesta y movida, y el motivo (bastidores de acero soldados) no se identifica como trabajo de conductos. No debe rotularse como HVAC. |

## Duplicados / Duplicates

Confirmados por hash perceptual — se publica una de cada pareja.

- `toooooooooooo.jpeg` ≡ `to.jpeg` → se publica `to.jpeg`
- `tooooooooooooooo.jpeg` ≡ `too.jpeg` → se publica `too.jpeg`
- `WhatsApp Image 2026-08-30 at 1.49.22 PM.jpeg` ≡ `toooooooooooooooooooo.jpeg`
  → se publica `toooooooooooooooooooo.jpeg`

## Marca / Brand

| Archivo | Motivo |
| --- | --- |
| `qwqw.jpeg` | Son **dos versiones del mismo banner apiladas en un archivo**, sobre un collage de fotografías que parecen de banco de imágenes. Se ha usado únicamente como fuente de los datos de contacto y de los colores de marca; el logotipo se ha reconstruido como texto (`Wordmark.astro`) para que sea nítido y recoloreable. El collage no va a la web. |

---

## Publicadas con reservas / Published with caveats

Estas **sí** están en la web porque el cliente las eligió expresamente, pero
conviene confirmar su procedencia antes de dar por buena la publicación:

- `toooooooooooooo.jpeg` — cocina de exposición con campana de catálogo,
  iluminada en estudio. Va rotulada como **"imagen de referencia"**, nunca como
  trabajo propio.
- `toooooooooooooooooooo.jpeg` — panel preaislado sobre fondo blanco. Es una foto
  de producto de fabricante. Va rotulada como **"imagen de producto del
  fabricante"** y vive solo en el bloque de materiales, nunca en la galería de
  trabajos.
- `too.jpeg` — techo de sala de máquinas, recomprimida y blanda, sin
  características de original de cámara.

Si alguna de las tres fue descargada en lugar de fotografiada, es una exposición
de derechos de autor y además un problema con la política de fotos de Google
Business Profile. **Sustitúyelas por fotos propias en cuanto se pueda.**

## Retoques aplicados a las publicadas / Edits applied to the published set

- `WhatsApp Image 2026-08-30 at 1.48.26 PMhhh.jpeg` — recortada la barra de
  estado del móvil (Lycamobile, 64 %, 21:12) y la barra de navegación: se queda
  solo la franja fotográfica, caja `(0, 510, 738, 1064)`.
- `WhatsApp Image 2026-08-30 at 1.48.26 PM.jpeg` — recortada por encima de la
  línea de cabecera del software, que contenía `FICHERO:GAVIA.PL1`. **GAVIA es
  el nombre del trabajo de un cliente y no debe publicarse.** El dibujo
  `DiagPlegado.astro` reproduce la misma información (espesor y formato de chapa)
  sin el nombre del cliente.
- `WhatsApp Image 2026-08-30 at 1.48.33 PM.jpeg` — recortada por debajo de la
  grúa torre, que llevaba el rótulo **ETOSA**: identificaba a la contrata
  principal y por tanto la obra concreta.

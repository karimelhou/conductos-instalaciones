# Cómo editar la web

Guía para el dueño. No hace falta saber programar. Todo lo que se cambia a
menudo está en **un solo archivo**.

---

## 1. Lo primero que hay que rellenar

Abre el archivo **`src/config/site.ts`**. Ahí están todos los datos de la
empresa. Los que están marcados con `TODO` están pendientes y hay que
completarlos **antes de publicar la web**.

### Obligatorio por ley antes de publicar

El artículo 10 de la LSSI obliga a que cualquier web comercial en España
muestre el titular, el NIF y una dirección. Ahora mismo el aviso legal dice
"Pendiente de facilitar". Rellena esto:

```
  address: {
    street: 'Calle Ejemplo 12, Nave 3',   <-- la dirección del taller
    postalCode: '28914',
    locality: 'Leganés',
    ...
  },

  legal: {
    holder: 'Nombre y Apellidos',          <-- si eres autónomo
                                           <-- o 'Conductos Instalaciones S.L.'
    taxId: '12345678A',                    <-- tu NIF, o el CIF de la sociedad
    registry: '',                          <-- solo si es S.L.
    riteNumber: '',                        <-- nº de empresa instaladora, si lo tienes
  },
```

En cuanto pongas la dirección, aparece **sola** en el pie de página, en la
página de contacto, en el aviso legal y en los datos que lee Google. No hay que
tocarlo en cinco sitios: se cambia en uno.

### Lo demás que puedes cambiar ahí

| Quiero cambiar… | Busca en `site.ts` |
| --- | --- |
| El teléfono principal y el de WhatsApp | `phone:` |
| El segundo teléfono | `phone2:` |
| El correo | `email:` |
| El horario | `hours:` |
| Los municipios donde trabajáis | `SERVICE_AREAS` |
| El año de fundación | `foundedYear` (déjalo en `0` si no quieres ponerlo) |
| Facebook, Instagram, Google… | `social: []` |
| El dominio, cuando lo contrates | `SITE_URL` arriba del todo |

---

## 2. Cambiar un texto de una página

Los textos están en la carpeta **`src/copy/`**, un archivo por página:

| Archivo | Página |
| --- | --- |
| `home.ts` | Inicio |
| `ventilacion.ts` | Conductos de ventilación |
| `humos.ts` | Extracción de humos de cocina |
| `clima.ts` | Climatización |
| `taller.ts` | Taller y trabajos |
| `contacto.ts` | Contacto |
| `legal.ts` | Aviso legal |

Cada archivo tiene **dos mitades**: `es:` arriba (español) y `en:` abajo
(inglés). **Si cambias algo en una, cámbialo también en la otra.** Si te
olvidas, la web no se construye y te avisa de qué falta: eso es a propósito,
para que el inglés no se quede cojo sin que nadie se entere.

Cosas que puedes cambiar con confianza:

- `title` — lo que sale en la pestaña del navegador y en Google. Máximo 60 letras.
- `description` — el texto gris que sale debajo en Google. Entre 140 y 160 letras.
- `h1` — el titular grande de la página.
- `lede` — el párrafo de debajo del titular.
- `faq` — las preguntas frecuentes. Puedes añadir o quitar, pero **tiene que
  haber el mismo número en español que en inglés**.
- `spec` — la tabla de la ficha técnica.
- `steps` — los pasos de "Cómo trabajamos".

⚠️ **No toques** las líneas que ponen `photos:` ni `diagram:`. Esas son los
nombres internos de las fotos y los dibujos.

### Cuidado con las comillas

Los textos van entre comillas simples: `'así'`. Si tu texto lleva un apóstrofo,
escápalo con una barra: `'la campana d\'obra'`. Más fácil: evita los apóstrofos.

---

## 3. Cambiar o añadir una foto

1. Pon la foto original en la carpeta `raw/`.
2. Abre `tools/images.manifest.json` y copia uno de los bloques que ya hay,
   cambiando `id` (el nombre interno, sin espacios ni acentos), `src` (el nombre
   del archivo en `raw/`), y los textos `alt` y `caption` en los dos idiomas.
3. Ejecuta `npm run images`.
4. Añade el `id` nuevo en la lista `photos:` de la página donde quieras que salga.

El programa recorta, corrige el color y deja todas las fotos con el mismo
aspecto. **Nunca amplía una foto** más allá de su tamaño real: por eso se ven
nítidas aunque sean pequeñas.

---

## 4. Publicar los cambios

```bash
npm run build
```

Esto comprueba que todo está bien y genera la carpeta `dist/`. **Esa carpeta es
la web**: se sube tal cual al hosting.

Si algo está mal, el comando falla y te dice qué es. No sube nada roto.

Para ver cómo ha quedado antes de subirla:

```bash
npm run preview
```

Y abre `http://localhost:4321` en el navegador.

---

## 5. Cosas importantes que conviene saber

**No añadas Google Analytics, Google Maps ni vídeos de YouTube sin avisar.**
Ahora mismo la web no usa cookies de ningún tipo, y por eso **no necesita el
cartel de cookies** que sale en todas partes. En cuanto se añade cualquiera de
esas tres cosas, el cartel pasa a ser obligatorio por ley, la web va más lenta y
hay que rehacer el aviso legal. El mapa que sale en la web está dibujado a mano
precisamente para evitarlo.

**Comprueba que el 602 12 83 02 tiene WhatsApp activo.** Todos los botones
verdes llevan a ese número. Si ese número no tuviera WhatsApp, saldría un error
y se perderían los clientes que escriban por ahí.

**Lo que más va a ayudar a que te encuentren no está en la web.** Es la ficha de
**Google Business Profile**: darla de alta, verificarla, poner las fotos y, sobre
todo, **pedir reseñas**. Una reseña después de cada trabajo terminado vale más
que cualquier cambio en la página. Guárdate el enlace de reseñas como respuesta
rápida de WhatsApp y mándalo al acabar cada obra.

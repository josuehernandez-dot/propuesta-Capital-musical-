# Capital Musical — Propuesta de rediseño (Equipo WEECOM)

Réplica navegable de capitalmusical.com.mx. Un interruptor arriba cambia entre **Actual** y **Propuesta**. La propuesta mantiene la estructura y el orden del sitio (sin filtros nuevos) y rediseña cada bloque. "Ver cambios" explica los 14 cambios: qué hay hoy, qué cambia y por qué.

## Qué cambia en la propuesta

- Buscador debajo del hero (la foto se ve completa) y franja de confianza en 4 tarjetas.
- Todas las fotos de producto recortadas sin fondo, sobre un mismo panel suave (inicio, ficha, carrito y sucursales).
- Marcas, colecciones (bloques en lugar de círculos), carruseles, Mercado Pago, blog, newsletter, tiendas y ayuda rediseñados.
- Tarjeta de producto con mensualidad, aviso de stock amable y botón + para añadir.
- Páginas de sucursal (Acapulco, Cuernavaca, Huatulco) rediseñadas; Cuernavaca incluye sus servicios técnicos.
- Ficha con mensualidad junto al precio y carrito con sugerencias del mismo tipo.

## Qué contiene

```
index.html      la página completa
assets/         estilos, scripts, tipografía e imágenes
README.md       este archivo
```

## Cómo publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **el contenido** de esta carpeta (no la carpeta en sí): `index.html` y `assets/` deben quedar en la raíz del repositorio.
3. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Para tener en cuenta

- GitHub Pages es **público**: cualquiera con el enlace puede verla. La página lleva `noindex` y solo muestra porcentajes (sin ingresos ni ticket promedio).
- Los botones de WhatsApp solo muestran un aviso; no enlazan al número real.
- Los datos de las sucursales (dirección, horario, teléfono, redes) salen de las páginas públicas del sitio. «Abierto ahora» se calcula con la hora de Ciudad de México; como el sitio no publica horario en domingo, ese día dice «sin horario publicado».
- Los mapas usan Google Maps y necesitan internet para verse.
- Los recortes de producto son automáticos: conviene revisar los bordes. Las fotos de accesorios son de baja resolución, por eso se ven pequeñas en las sucursales.
- La página «Actual» de sucursal es una aproximación con los datos públicos del sitio.
- Para ver solo el sitio actual: `?modo=actual`. Para abrir un cambio directo: `?cambio=1` a `?cambio=14`.
- La versión de celular es una referencia: el video de la visita se grabó en escritorio.

# Diseño: Editar Observaciones + Verificar Texto en Web

**Fecha:** 2026-04-14  
**Proyectos afectados:** revisionEquiposWeb (principal), revisionEquiposApi (lectura)

---

## Contexto

La app web actualmente muestra las observaciones de los reportes en modo **solo lectura**. La app mobile tiene funcionalidad completa de edición (observaciones, comentarios) y corrección gramatical con IA ("Verificar texto"). El API ya soporta todos los endpoints necesarios.

---

## Objetivo

Agregar a la vista `detalle-reportes` de la web:
1. **Edición inline** de los campos de texto de cada observación
2. **Edición y creación de comentarios** (recomendaciones) por observación
3. **Verificar texto (IA)** en todos los campos de texto usando OpenAI via el API

---

## Decisiones de diseño

| Pregunta | Decisión |
|---|---|
| Modo de edición | Inline toggle por observación individual |
| Verificar texto | En todos los campos de texto (observación, diagnóstico, fallas, comentarios entrega) |
| Control de acceso | Cualquier usuario autenticado puede editar |

---

## Comportamiento esperado

### Edición de observación (inline)
1. Cada sección de observación tiene botón `✏️ Editar` en el header
2. Al hacer click, los `<p>` de los campos de texto se reemplazan por `<mat-form-field><textarea>` 
3. Junto a cada textarea aparece botón `🔍 Verificar`
4. Botones `Guardar` y `Cancelar` aparecen al final de la sección
5. Al guardar: `PATCH /observaciones/:id` + recarga el reporte
6. Al cancelar: restaura los valores originales sin llamar al API

### Edición de comentarios (recomendaciones)
1. Junto a cada comentario existente hay un icono `✏️`
2. Al hacer click abre un `MatDialog` con textarea y botón Guardar
3. Dialog usa `PUT /observaciones/editarComentario/:id`
4. Debajo de la lista hay campo de texto + botón `+ Agregar recomendación`
5. Al agregar: `POST /observaciones/agregarComentario`

### Verificar texto (IA)
1. Botón `🔍 Verificar` junto a cada textarea en modo edición
2. Envía texto a `POST /users/correccion`
3. Muestra respuesta en `MatDialog` con opciones **Aceptar** / **Cancelar**
4. Si acepta: reemplaza el texto en el campo local (no guarda aún, requiere el Guardar general)

---

## Archivos a crear/modificar

### Crear
- `src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.ts`
- `src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.html`
- `src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.ts`
- `src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.html`

### Modificar
- `src/app/pages/reportes/services/reporte.service.ts` — agregar métodos: `editarObservacion`, `editarComentario`, `agregarComentario`, `textoCorreccionIA`
- `src/app/pages/reportes/detalle-reportes/detalle-reportes.component.ts` — lógica de edit mode, guardar, verificar
- `src/app/pages/reportes/detalle-reportes/detalle-reportes.component.html` — toggle inline edición
- `src/app/pages/reportes/reportes.module.ts` — declarar nuevos componentes dialog

---

## API Endpoints usados

| Método | Endpoint | Uso |
|---|---|---|
| `GET` | `/reportes/:id` | Ya existe — cargar reporte |
| `PATCH` | `/observaciones/:id` | Editar observación |
| `PUT` | `/observaciones/editarComentario/:id` | Editar comentario |
| `POST` | `/observaciones/agregarComentario` | Agregar comentario |
| `POST` | `/users/correccion` | Corrección gramatical IA |

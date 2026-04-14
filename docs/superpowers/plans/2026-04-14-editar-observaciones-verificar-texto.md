# Editar Observaciones + Verificar Texto Implementation Plan

**Spec:** docs/superpowers/specs/2026-04-14-editar-observaciones-verificar-texto.md  
**Date:** 2026-04-14  
**Project:** revisionEquiposWeb

---

## File Map

### New Files
| File | Responsibility |
|---|---|
| `src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.ts` | MatDialog para editar o agregar un comentario a una observación |
| `src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.html` | Template del dialog de editar/agregar comentario |
| `src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.ts` | MatDialog para mostrar el texto corregido por IA |
| `src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.html` | Template del dialog de verificación IA |

### Modified Files
| File | What changes |
|---|---|
| `src/app/pages/reportes/services/reporte.service.ts` | +4 métodos HTTP: editarObservacion, editarComentario, agregarComentario, textoCorreccionIA |
| `src/app/pages/reportes/reportes.module.ts` | Declarar 2 nuevos componentes dialog |
| `src/app/pages/reportes/detalle-reportes/detalle-reportes.component.ts` | Estado de edición por obs, guardar, cancelar, verificar |
| `src/app/pages/reportes/detalle-reportes/detalle-reportes.component.html` | Toggle inline edit, textareas, botones verificar, edit comentarios |

---

## Tasks

### TASK 1 — Agregar métodos al service

**File:** `src/app/pages/reportes/services/reporte.service.ts`

Agregar los 4 métodos al service existente:
```typescript
editarObservacion(id: number, data: any) {
  return this._httpClient.patch(environment.API_URL + `/observaciones/${id}`, data);
}

editarComentario(id: number, data: any) {
  return this._httpClient.put(environment.API_URL + `/observaciones/editarComentario/${id}`, data);
}

agregarComentario(data: any) {
  return this._httpClient.post(environment.API_URL + `/observaciones/agregarComentario`, data);
}

textoCorreccionIA(data: { text: string }) {
  return this._httpClient.post(environment.API_URL + `/users/correccion`, data);
}
```

**Verify:** El service compila sin errores. No tocar métodos existentes.

---

### TASK 2 — Crear VerificarTextoDialogComponent

**Files to create:**

`src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.ts`
```typescript
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface VerificarTextoDialogData {
  textoOriginal: string;
  textoCorregido: string;
}

@Component({
  selector: 'app-verificar-texto-dialog',
  templateUrl: './verificar-texto-dialog.component.html',
})
export class VerificarTextoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VerificarTextoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VerificarTextoDialogData,
  ) {}

  aceptar() { this.dialogRef.close(this.data.textoCorregido); }
  cancelar() { this.dialogRef.close(null); }
}
```

`src/app/pages/reportes/detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component.html`
```html
<h2 mat-dialog-title>Texto Verificado por IA</h2>
<mat-dialog-content>
  <p class="mat-body-2" style="color: #78909c; margin-bottom: 8px;">Texto sugerido:</p>
  <p style="white-space: pre-wrap;">{{ data.textoCorregido }}</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-stroked-button (click)="cancelar()">Cancelar</button>
  <button mat-flat-button color="primary" (click)="aceptar()">Aceptar</button>
</mat-dialog-actions>
```

---

### TASK 3 — Crear EditarComentarioDialogComponent

**Files to create:**

`src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.ts`
```typescript
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface EditarComentarioDialogData {
  comentario: string;
  modo: 'editar' | 'agregar';
}

@Component({
  selector: 'app-editar-comentario-dialog',
  templateUrl: './editar-comentario-dialog.component.html',
})
export class EditarComentarioDialogComponent {
  texto: string;

  constructor(
    public dialogRef: MatDialogRef<EditarComentarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditarComentarioDialogData,
  ) {
    this.texto = data.comentario || '';
  }

  guardar() {
    if (!this.texto.trim()) return;
    this.dialogRef.close(this.texto.trim());
  }
  cancelar() { this.dialogRef.close(null); }
}
```

`src/app/pages/reportes/detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component.html`
```html
<h2 mat-dialog-title>{{ data.modo === 'editar' ? 'Editar recomendación' : 'Agregar recomendación' }}</h2>
<mat-dialog-content>
  <mat-form-field appearance="outline" style="width: 100%; min-width: 420px;">
    <mat-label>Recomendación</mat-label>
    <textarea matInput [(ngModel)]="texto" cdkTextareaAutosize cdkAutosizeMinRows="3" cdkAutosizeMaxRows="10"></textarea>
  </mat-form-field>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-stroked-button (click)="cancelar()">Cancelar</button>
  <button mat-flat-button color="primary" (click)="guardar()">Guardar</button>
</mat-dialog-actions>
```
**Note:** Necesita `FormsModule` y `TextFieldModule` (cdkTextareaAutosize).

---

### TASK 4 — Actualizar reportes.module.ts

Declarar los 2 nuevos componentes y agregar `TextFieldModule` si no está:

```typescript
import { TextFieldModule } from '@angular/cdk/text-field';
import { VerificarTextoDialogComponent } from './detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component';
import { EditarComentarioDialogComponent } from './detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component';

// En declarations:
VerificarTextoDialogComponent,
EditarComentarioDialogComponent,

// En imports:
TextFieldModule,
```

---

### TASK 5 — Lógica de edición en DetalleReportesComponent

**File:** `src/app/pages/reportes/detalle-reportes/detalle-reportes.component.ts`

**Agregar:**
1. Inyectar `MatDialog` y `MatSnackBar`
2. Mapa de estado `editModes: { [id: number]: boolean } = {}`
3. Mapa de datos de edición `editData: { [id: number]: any } = {}`
4. Método `activarEdicion(obs: any)` — copia obs a editData, activa modo
5. Método `cancelarEdicion(id: number)` — desactiva modo, descarta cambios
6. Método `guardarObservacion(id: number)` — llama `editarObservacion()`, recarga, desactiva modo
7. Método `verificarCampo(id: number, campo: string)` — llama `textoCorreccionIA`, abre `VerificarTextoDialogComponent`, aplica si acepta
8. Método `abrirEditarComentario(comentario: any, obsId: number)` — abre `EditarComentarioDialogComponent` en modo 'editar', llama `editarComentario()`
9. Método `abrirAgregarComentario(obsId: number)` — abre `EditarComentarioDialogComponent` en modo 'agregar', llama `agregarComentario()`, recarga

**Imports a agregar:**
```typescript
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VerificarTextoDialogComponent } from './verificar-texto-dialog/verificar-texto-dialog.component';
import { EditarComentarioDialogComponent } from './editar-comentario-dialog/editar-comentario-dialog.component';
```

---

### TASK 6 — Actualizar template HTML (detalle-reportes.component.html)

**Sección de observación:** Reemplazar el display estático del card de "Observaciones" (y demás campos de texto) con lógica dinámica:

```html
<!-- Modo LECTURA -->
<ng-container *ngIf="!editModes[item.idObservacion]">
  <p class="detalle-texto">{{item.observacion || 'No tiene observaciones'}}</p>
</ng-container>
<!-- Modo EDICIÓN -->
<ng-container *ngIf="editModes[item.idObservacion]">
  <mat-form-field appearance="outline" style="width:100%">
    <textarea matInput cdkTextareaAutosize cdkAutosizeMinRows="3"
      [(ngModel)]="editData[item.idObservacion].observacion"></textarea>
  </mat-form-field>
  <button mat-stroked-button (click)="verificarCampo(item.idObservacion, 'observacion')">
    <mat-icon>auto_fix_high</mat-icon> Verificar
  </button>
</ng-container>
```

Lo mismo aplica para: `diagnosticoTecnico`, `fallaDetectadaDuraSer`, `comentariosEntregaEquip`.

**Header del card de Observaciones:** Agregar botón ✏️ / Guardar / Cancelar:
```html
<mat-card-header>
  <mat-card-title>Ítem {{item?.identificador}}</mat-card-title>
  <div class="m-l-auto">
    <ng-container *ngIf="!editModes[item.idObservacion]">
      <button mat-icon-button (click)="activarEdicion(item)" matTooltip="Editar observación">
        <mat-icon>edit</mat-icon>
      </button>
    </ng-container>
    <ng-container *ngIf="editModes[item.idObservacion]">
      <button mat-flat-button color="primary" (click)="guardarObservacion(item.idObservacion)">Guardar</button>
      <button mat-stroked-button (click)="cancelarEdicion(item.idObservacion)" style="margin-left: 8px;">Cancelar</button>
    </ng-container>
  </div>
</mat-card-header>
```

**Sección de Recomendaciones:** Agregar botón ✏️ en cada item y botón Agregar al final:
```html
<mat-list-item *ngFor="let com of item['comentarios']">
  ...contenido existente...
  <button mat-icon-button matListItemMeta (click)="abrirEditarComentario(com, item.idObservacion)" matTooltip="Editar">
    <mat-icon>edit</mat-icon>
  </button>
</mat-list-item>
<!-- Al final de mat-list -->
<div style="padding: 8px 16px;">
  <button mat-stroked-button (click)="abrirAgregarComentario(item.idObservacion)">
    <mat-icon>add</mat-icon> Agregar recomendación
  </button>
</div>
```

---

### TASK 7 — Verificar compilación

```bash
cd /Users/alex/Documents/proyectos-personales/revisionEquiposWeb
npx ng build --configuration=development 2>&1 | tail -30
```

Resolver cualquier error de TypeScript antes de continuar.

---

### TASK 8 — Prueba manual

1. Iniciar el API (`npm run start:dev` en revisionEquiposApi)
2. Iniciar la web (`ng serve` en revisionEquiposWeb)
3. Ir a un reporte con observaciones
4. Verificar:
   - [ ] Botón ✏️ aparece en cada observación
   - [ ] Campos se vuelven editables al hacer click
   - [ ] Botón "Verificar" llama al API y muestra sugirencia
   - [ ] Guardar actualiza la observación en la DB
   - [ ] Botón ✏️ en comentarios abre dialog
   - [ ] Guardar comentario actualiza en la DB
   - [ ] "+ Agregar recomendación" crea nuevo comentario
   - [ ] Cancelar descarta cambios sin llamar al API

---

## Notas técnicas

- `MatSnackBarModule` ya debería estar en `MaterialModule` — verificar antes de agregar
- `MatDialogModule` ya está en `material.module.ts` ✅
- `FormsModule` ya está en `reportes.module.ts` ✅
- El campo `idObservacion` existe en la entidad y se incluye en la respuesta del API
- Para `agregarComentario` el DTO requiere: `{ comentario, userId, observacionId, dateString }`
  - `userId` se obtiene desde localStorage/sessionStorage (ver cómo auth guard lo guarda)
  - `dateString` = fecha formateada legible (ej: "14 Abril 2026")

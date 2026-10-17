import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { FormArticuloComponent } from './form-articulo/form-articulo.component';
import { ModalMovimientoComponent } from './modal-movimiento/modal-movimiento.component';
import { ModalHistorialComponent } from './modal-historial/modal-historial.component';
import { ListaGruposComponent } from './lista-grupos/lista-grupos.component';
import { FormGrupoComponent } from './form-grupo/form-grupo.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

const routes: Routes = [
  {
    path: '',
    component: ListaGruposComponent
  },
  {
    path: ':grupoId/articulos',
    component: ListaArticulosComponent
  }
];

@NgModule({
  declarations: [
    ListaArticulosComponent,
    FormArticuloComponent,
    ModalMovimientoComponent,
    ModalHistorialComponent,
    ListaGruposComponent,
    FormGrupoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TablerIconsModule.pick(TablerIcons),
    RouterModule.forChild(routes)
  ]
})
export class InventarioDinamicoModule { }

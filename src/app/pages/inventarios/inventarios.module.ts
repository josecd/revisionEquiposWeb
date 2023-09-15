import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventariosRoutingModule } from './inventarios-routing.module';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { DetalleInventarioComponent } from './detalle-inventario/detalle-inventario.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatNativeDateModule } from '@angular/material/core';

import * as TablerIcons from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    ListaInventarioComponent,
    DetalleInventarioComponent,
  
  ],
  imports: [
    CommonModule,
    InventariosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ]
})
export class InventariosModule { }

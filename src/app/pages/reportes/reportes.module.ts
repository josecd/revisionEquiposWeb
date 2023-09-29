import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { DetalleReportesComponent } from './detalle-reportes/detalle-reportes.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';


@NgModule({
  declarations: [
    DetalleReportesComponent,
    ListaReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ]
})
export class ReportesModule { }

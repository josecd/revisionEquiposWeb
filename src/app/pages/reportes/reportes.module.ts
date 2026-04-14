import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from '@angular/cdk/text-field';

import { ReportesRoutingModule } from './reportes-routing.module';
import { DetalleReportesComponent } from './detalle-reportes/detalle-reportes.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { VerificarTextoDialogComponent } from './detalle-reportes/verificar-texto-dialog/verificar-texto-dialog.component';
import { EditarComentarioDialogComponent } from './detalle-reportes/editar-comentario-dialog/editar-comentario-dialog.component';


@NgModule({
  declarations: [
    DetalleReportesComponent,
    ListaReportesComponent,
    VerificarTextoDialogComponent,
    EditarComentarioDialogComponent,
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    TextFieldModule,
  ]
})
export class ReportesModule { }

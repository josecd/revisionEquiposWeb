import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { DetalleReportesComponent } from './detalle-reportes/detalle-reportes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista',
        component: ListaReportesComponent,
      },
      {
        path: 'detalle/:id',
        component: DetalleReportesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }

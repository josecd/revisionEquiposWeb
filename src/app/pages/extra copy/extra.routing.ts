import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AppDetalleReporteComponent } from './detalle-reporte/detalle-reporte.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        component: AppIconsComponent,
      },
      {
        path: 'lista',
        component: AppSamplePageComponent,
      },
      {
        path: 'detalle/:id',
        component: AppDetalleReporteComponent,
      },
    ],
  },
];

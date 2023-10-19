import { ExtraModules } from './pages/extra copy/extra.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { authGuardFn } from './guards/auth-fn.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    // canActivate: [authGuardFn],
    children: [
      {
        path: '',
        redirectTo: '/reportes/lista',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'reportesAlta',
        loadChildren: () =>
          import('./pages/extra copy/extra.module').then((m) => m.ExtraModules),
      },
      {
        path: 'inventario',
        loadChildren: () =>
          import('./pages/inventarios/inventarios.module').then((m) => m.InventariosModule),
      },
      {
        path: 'reportes',
        loadChildren: () =>
          import('./pages/reportes/reportes.module').then((m) => m.ReportesModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true ,bindToComponentInputs:true})],
  exports: [RouterModule],

})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zona-horaria',
    loadChildren: () => import('./+modules/time-zone/time-zone.module').then(m => m.TimeZoneModule)
  },
  {
    path: 'cronometro',
    loadChildren: () => import('./+modules/stopwatch/stopwatch.module').then(m => m.StopwatchModule)
  },
  {
    path: '**',
    redirectTo: 'zona-horaria'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

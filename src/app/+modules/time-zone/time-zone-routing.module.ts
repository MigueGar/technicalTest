import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeZoneComponent } from './components/time-zone/time-zone.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: TimeZoneComponent},
      {path: '**', redirectTo: 'zona-horaria'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeZoneRoutingModule { }

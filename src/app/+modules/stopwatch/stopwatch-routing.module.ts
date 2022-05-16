import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: StopwatchComponent},
      {path: '**', redirectTo: 'cronometro'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StopwatchRoutingModule { }

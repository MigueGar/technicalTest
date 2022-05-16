import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { StopwatchRoutingModule } from './stopwatch-routing.module';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';


@NgModule({
  declarations: [
    StopwatchComponent
  ],
  imports: [
    SharedModule,
    StopwatchRoutingModule
  ]
})
export class StopwatchModule { }

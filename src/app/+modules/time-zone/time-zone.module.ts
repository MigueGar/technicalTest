import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TimeZoneRoutingModule } from './time-zone-routing.module';
import { TimeZoneServiceModule } from './time-zone.service.module';

import { TimeZoneComponent } from './components/time-zone/time-zone.component';


@NgModule({
  declarations: [
    TimeZoneComponent
  ],
  imports: [
    SharedModule,
    TimeZoneRoutingModule,
    TimeZoneServiceModule
  ]
})
export class TimeZoneModule { }

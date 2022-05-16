import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeZoneDto } from 'src/app/models/time-zone';
import { TimeZoneServiceModule } from '../../time-zone.service.module';

@Injectable({
  providedIn: TimeZoneServiceModule
})
export class TimeZoneService {

  url: string = 'http://worldtimeapi.org/api/timezone/';

  constructor(
    private http: HttpClient
  ) { }

  getAllZone() {
    return this.http.get<string[]>(this.url);
  }

  getZoneTime(zone: string) {
    return this.http.get<TimeZoneDto>(this.url + zone)
  }
}

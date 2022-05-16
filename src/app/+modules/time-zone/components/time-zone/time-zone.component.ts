import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeZoneService } from '../../services/time-zone.service/time-zone.service';
import { TimeZoneDto } from '../../../../models/time-zone';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit, OnDestroy {

  dataFormat: TimeZoneDto = {} as TimeZoneDto;
  zones: string[] = [];
  zone: string = '';
  
  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private timeZoneService: TimeZoneService
  ) { }

  ngOnInit(): void {
    this.timeZoneService.getAllZone()
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        this.zones = resp;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.dataFormat = this.dataFormat = {} as TimeZoneDto;
    this.zones = [];
    this.zone = '';
  }

  changeValue(event: any): void {
    this.zone = event.target.value;
    if (this.zone === 'Seleccione un valor') {
      this.dataFormat = {} as TimeZoneDto;
    }
  }

  changeZone(): void {
    this.timeZoneService.getZoneTime(this.zone)
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        this.dataFormat = resp;
      })
  }

}

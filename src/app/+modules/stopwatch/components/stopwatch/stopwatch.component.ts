import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {

  millisecond: any = '0' + 0;
  second: any = '0' + 0;
  minute: any = '0' + 0;
  hour: any = '0' + 0;

  startTimer: any;
  running: boolean = false;

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    clearInterval(this.startTimer);
  }

  startStopwatch(): void {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {

        this.setMillisecond();

        if (this.millisecond === 100) {
          this.setSecond();
        }

        if (this.second === 60) {
          this.setMinute();
        }

        if (this.minute === 60) {
          this.setHour();
        }
      }, 10);
    } else {
      this.stopStopwatch();
    }
  }

  stopStopwatch(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  resetStopwatch(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.hour = this.minute = this.second = this.millisecond = '0' + 0;
  }

  private setMillisecond(): void {
    this.millisecond++;
    this.millisecond = this.lessThanZero(this.millisecond);
  }

  private setSecond(): void {
    this.second++;
    this.second = this.lessThanZero(this.second);
    this.millisecond = '0' + 0;
  }

  private setMinute(): void {
    this.minute++;
    this.minute = this.lessThanZero(this.minute);
    this.second = '0' + 0;
  }

  private setHour(): void {
    this.hour++;
    this.hour = this.lessThanZero(this.hour);
    this.minute = '0' + 0;
  }

  private lessThanZero(time: any) {
    return time < 10 ? '0' + time : time;
  }

}

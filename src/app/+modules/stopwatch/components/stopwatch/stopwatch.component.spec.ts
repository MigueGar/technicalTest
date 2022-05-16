import { StopwatchComponent } from './stopwatch.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator'
import { fakeAsync, tick } from '@angular/core/testing';

describe('StopwatchComponent', () => {
  let spectator: Spectator<StopwatchComponent>;
  let component: StopwatchComponent;
  const createComponent = createComponentFactory({
    component: StopwatchComponent,
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDestroy', () => {
    component.ngOnDestroy();
    expect(component['destroy$']).toBeDefined();
  });

  it('startStopwatch running', () => {
    component.startStopwatch();
    expect(component['startStopwatch']).toBeTruthy();
  });

  it('startStopwatch', fakeAsync(() => {
    component.startStopwatch();
    tick(10);
    component.startStopwatch();
    expect(component['startStopwatch']).toBeTruthy();
   }));

  it('stopStopwatch', () => {
    component.stopStopwatch();
    expect(component['stopStopwatch']).toBeTruthy();
  });

  it('resetStopwatch', () => {
    component.resetStopwatch();
    expect(component['resetStopwatch']).toBeTruthy();
  });

  it('setSecond', () => {
    component['setSecond']();
    expect(component['setSecond']).toBeTruthy();
  });

  it('setMinute', () => {
    component['setMinute']();
    expect(component['setMinute']).toBeTruthy();
  });

  it('setHour', () => {
    component['setHour']();
    expect(component['setHour']).toBeTruthy();
  });
});

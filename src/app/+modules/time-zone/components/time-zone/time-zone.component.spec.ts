import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';

import { TimeZoneComponent } from './time-zone.component';
import { TimeZoneService } from '../../services/time-zone.service/time-zone.service';
import { Zone } from '../../../../models/zone';
import { from, of } from 'rxjs';

describe('TimeZoneComponent', () => {
  let spectator: Spectator<TimeZoneComponent>;
  let component: TimeZoneComponent;
  const createComponent = createComponentFactory({
    component: TimeZoneComponent,
    shallow: true,
    componentProviders: [
      mockProvider(TimeZoneService, {
        getAllZone: () => {
          return of([
            Zone.africa,
            Zone.america
          ]);
        },
        getZoneTime: () => {
          return of(null)
        }
      })
    ]
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

  it('changeValue', () => {
    const event = {
      target: {
        value: Zone.africa
      }
    }
    component.changeValue(event);
    expect(component['changeValue']).toBeTruthy();
  });

  it('changeValue', () => {
    const event = {
      target: {
        value: 'Seleccione un valor'
      }
    }
    component.changeValue(event);
    expect(component['changeValue']).toBeTruthy();
  });

  it('changeZone', () => {
    component.zone = Zone.america;
    component.changeZone();
    expect(component['changeZone']).toBeTruthy();
  });
});

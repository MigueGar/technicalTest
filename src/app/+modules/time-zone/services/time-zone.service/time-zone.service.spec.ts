import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { TimeZoneService } from './time-zone.service';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../../../../models/zone';

describe('TimeZoneService', () => {
  let spectator: SpectatorService<TimeZoneService>;
  let service: TimeZoneService;
  const createService = createServiceFactory({
    service: TimeZoneService,
    mocks: [HttpClient]
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getAllZone', () => {
    service.getAllZone();
    expect(service.getAllZone).toBeTruthy();
  });

  it('getZoneTime', () => {
    service.getZoneTime(Zone.africa);
    expect(service.getZoneTime).toBeTruthy();
  });
});

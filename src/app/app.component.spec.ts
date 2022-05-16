import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

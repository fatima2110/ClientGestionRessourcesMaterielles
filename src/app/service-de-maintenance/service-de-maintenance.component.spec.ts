import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeMaintenanceComponent } from './service-de-maintenance.component';

describe('ServiceDeMaintenanceComponent', () => {
  let component: ServiceDeMaintenanceComponent;
  let fixture: ComponentFixture<ServiceDeMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDeMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

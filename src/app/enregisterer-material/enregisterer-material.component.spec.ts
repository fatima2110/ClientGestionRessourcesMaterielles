import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistererMaterialComponent } from './enregisterer-material.component';

describe('EnregistererMaterialComponent', () => {
  let component: EnregistererMaterialComponent;
  let fixture: ComponentFixture<EnregistererMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistererMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistererMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

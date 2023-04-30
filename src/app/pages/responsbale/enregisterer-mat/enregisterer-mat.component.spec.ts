import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistererMatComponent } from './enregisterer-mat.component';

describe('EnregistererMatComponent', () => {
  let component: EnregistererMatComponent;
  let fixture: ComponentFixture<EnregistererMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistererMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistererMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

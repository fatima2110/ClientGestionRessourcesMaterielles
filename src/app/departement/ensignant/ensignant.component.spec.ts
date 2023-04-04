import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsignantComponent } from './ensignant.component';

describe('EnsignantComponent', () => {
  let component: EnsignantComponent;
  let fixture: ComponentFixture<EnsignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

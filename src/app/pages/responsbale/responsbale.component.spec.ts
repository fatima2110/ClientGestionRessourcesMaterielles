import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsbaleComponent } from './responsbale.component';

describe('ResponsbaleComponent', () => {
  let component: ResponsbaleComponent;
  let fixture: ComponentFixture<ResponsbaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsbaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsbaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

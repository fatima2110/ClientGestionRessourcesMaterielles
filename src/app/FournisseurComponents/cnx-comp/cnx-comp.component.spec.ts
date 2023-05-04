import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnxCompComponent } from './cnx-comp.component';

describe('CnxCompComponent', () => {
  let component: CnxCompComponent;
  let fixture: ComponentFixture<CnxCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnxCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

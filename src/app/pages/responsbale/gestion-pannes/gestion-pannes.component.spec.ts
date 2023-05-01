import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPannesComponent } from './gestion-pannes.component';

describe('GestionPannesComponent', () => {
  let component: GestionPannesComponent;
  let fixture: ComponentFixture<GestionPannesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPannesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

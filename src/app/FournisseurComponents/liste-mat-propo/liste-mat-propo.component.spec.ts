import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatPropoComponent } from './liste-mat-propo.component';

describe('ListeMatPropoComponent', () => {
  let component: ListeMatPropoComponent;
  let fixture: ComponentFixture<ListeMatPropoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMatPropoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMatPropoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

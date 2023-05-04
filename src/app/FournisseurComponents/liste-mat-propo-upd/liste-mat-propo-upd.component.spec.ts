import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatPropoUpdComponent } from './liste-mat-propo-upd.component';

describe('ListeMatPropoUpdComponent', () => {
  let component: ListeMatPropoUpdComponent;
  let fixture: ComponentFixture<ListeMatPropoUpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMatPropoUpdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMatPropoUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConstatsComponent } from './liste-constats.component';

describe('ListeConstatsComponent', () => {
  let component: ListeConstatsComponent;
  let fixture: ComponentFixture<ListeConstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeConstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

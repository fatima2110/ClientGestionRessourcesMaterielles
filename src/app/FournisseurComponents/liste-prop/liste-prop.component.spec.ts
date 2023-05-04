import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePropComponent } from './liste-prop.component';

describe('ListePropComponent', () => {
  let component: ListePropComponent;
  let fixture: ComponentFixture<ListePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

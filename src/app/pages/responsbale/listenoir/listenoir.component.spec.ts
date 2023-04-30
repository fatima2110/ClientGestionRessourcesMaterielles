import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenoirComponent } from './listenoir.component';

describe('ListenoirComponent', () => {
  let component: ListenoirComponent;
  let fixture: ComponentFixture<ListenoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

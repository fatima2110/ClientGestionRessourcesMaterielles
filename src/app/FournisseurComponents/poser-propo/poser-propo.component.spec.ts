import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoserPropoComponent } from './poser-propo.component';

describe('PoserPropoComponent', () => {
  let component: PoserPropoComponent;
  let fixture: ComponentFixture<PoserPropoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoserPropoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoserPropoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterConstatComponent } from './ajouter-constat.component';

describe('AjouterConstatComponent', () => {
  let component: AjouterConstatComponent;
  let fixture: ComponentFixture<AjouterConstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterConstatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterConstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

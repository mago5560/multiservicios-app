import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientotecleoComponent } from './movimientotecleo.component';

describe('MovimientotecleoComponent', () => {
  let component: MovimientotecleoComponent;
  let fixture: ComponentFixture<MovimientotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

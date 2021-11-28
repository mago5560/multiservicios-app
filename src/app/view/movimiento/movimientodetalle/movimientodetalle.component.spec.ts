import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientodetalleComponent } from './movimientodetalle.component';

describe('MovimientodetalleComponent', () => {
  let component: MovimientodetalleComponent;
  let fixture: ComponentFixture<MovimientodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientodetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

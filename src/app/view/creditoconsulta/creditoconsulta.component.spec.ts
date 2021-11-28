import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoconsultaComponent } from './creditoconsulta.component';

describe('CreditoconsultaComponent', () => {
  let component: CreditoconsultaComponent;
  let fixture: ComponentFixture<CreditoconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

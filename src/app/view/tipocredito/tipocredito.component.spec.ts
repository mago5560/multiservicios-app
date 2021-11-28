import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocreditoComponent } from './tipocredito.component';

describe('TipocreditoComponent', () => {
  let component: TipocreditoComponent;
  let fixture: ComponentFixture<TipocreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipocreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

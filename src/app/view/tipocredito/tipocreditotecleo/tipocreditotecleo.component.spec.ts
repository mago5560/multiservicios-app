import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocreditotecleoComponent } from './tipocreditotecleo.component';

describe('TipocreditotecleoComponent', () => {
  let component: TipocreditotecleoComponent;
  let fixture: ComponentFixture<TipocreditotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocreditotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipocreditotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

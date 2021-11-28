import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopagotecleoComponent } from './tipopagotecleo.component';

describe('TipopagotecleoComponent', () => {
  let component: TipopagotecleoComponent;
  let fixture: ComponentFixture<TipopagotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopagotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopagotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

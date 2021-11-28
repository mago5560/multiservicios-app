import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditotecleoComponent } from './creditotecleo.component';

describe('CreditotecleoComponent', () => {
  let component: CreditotecleoComponent;
  let fixture: ComponentFixture<CreditotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

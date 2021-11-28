import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoabonoComponent } from './creditoabono.component';

describe('CreditoabonoComponent', () => {
  let component: CreditoabonoComponent;
  let fixture: ComponentFixture<CreditoabonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoabonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoabonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

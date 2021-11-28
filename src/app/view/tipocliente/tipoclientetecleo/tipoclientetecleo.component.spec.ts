import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoclientetecleoComponent } from './tipoclientetecleo.component';

describe('TipoclientetecleoComponent', () => {
  let component: TipoclientetecleoComponent;
  let fixture: ComponentFixture<TipoclientetecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoclientetecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoclientetecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

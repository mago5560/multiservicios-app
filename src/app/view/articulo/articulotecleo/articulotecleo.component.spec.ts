import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulotecleoComponent } from './articulotecleo.component';

describe('ArticulotecleoComponent', () => {
  let component: ArticulotecleoComponent;
  let fixture: ComponentFixture<ArticulotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

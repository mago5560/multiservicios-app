import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmensajeComponent } from './dialogmensaje.component';

describe('DialogmensajeComponent', () => {
  let component: DialogmensajeComponent;
  let fixture: ComponentFixture<DialogmensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

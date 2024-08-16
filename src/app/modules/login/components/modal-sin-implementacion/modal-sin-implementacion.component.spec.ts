import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSinImplementacionComponent } from './modal-sin-implementacion.component';

describe('ModalSinImplementacionComponent', () => {
  let component: ModalSinImplementacionComponent;
  let fixture: ComponentFixture<ModalSinImplementacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSinImplementacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSinImplementacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

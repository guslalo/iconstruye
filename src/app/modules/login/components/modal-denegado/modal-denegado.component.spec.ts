import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDenegadoComponent } from './modal-denegado.component';

describe('ModalDenegadoComponent', () => {
  let component: ModalDenegadoComponent;
  let fixture: ComponentFixture<ModalDenegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDenegadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDenegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

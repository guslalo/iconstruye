import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-sin-implementacion',
  templateUrl: './modal-sin-implementacion.component.html',
  styleUrl: './modal-sin-implementacion.component.scss'
})
export class ModalSinImplementacionComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

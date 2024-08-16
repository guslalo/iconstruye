import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-denegado',
  templateUrl: './modal-denegado.component.html',
  styleUrl: './modal-denegado.component.scss'
})
export class ModalDenegadoComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

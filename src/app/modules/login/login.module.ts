import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDenegadoComponent } from './components/modal-denegado/modal-denegado.component';

@NgModule({
  declarations: [
    IndexComponent,
    ModalDenegadoComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgbModule 
  ]
})
export class LoginModule { }

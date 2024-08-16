import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent implements OnInit {
  public loginForm!: FormGroup;
  public loginFormEnterprise!: FormGroup;
  private formatDatalogin!:string;
  public loader!:boolean;
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;

  constructor(
    private fb: FormBuilder, 
    private loginService:LoginService, 
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(){
    //form user
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

     //form empresa
     this.loginFormEnterprise = this.fb.group({
      name: ['', [Validators.required, ]],
      enterprise: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    }); 
  }

  //submit form
  onSubmit() {
    if (this.loginForm.valid) {
      this.loader = true;
      this.formatDatalogin = btoa(`${this.loginForm.value.email}:${this.loginForm.value.password}`);
      this.login(this.formatDatalogin);
    } 
  }

  //subscripcion al servicio
  login(data: string): void {
    this.loginService.login(data).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.loader = false;
        this.router.navigate(['/index']);
      },
      error: (error) => {
        this.loader = false;
        this.modalNoAautorizado();
        console.error('Error:', error);
      }
    });
  }

  modalNoAautorizado(){
   this.modalService.open(this.modalContent, { centered: true });
  }

  //llamada al modal
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userRegister: UserRegister
  dataResult: DataResult
  form: FormGroup
  submitted: boolean = false  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notify: NotifyService,
    private service: RegisterService
  ) {
    // redireciona para dashboard se já estiver logado
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.createForm()
  }

  onSubmit() {
    this.submitted = true;    
    if (this.form.invalid)
      return
    this.register()
  }  

  register() {
    this.userRegister = this.form.value
    this.dataResult = this.service.register(this.userRegister)
    this.showMessage()
  }  

  showMessage() {
    if (this.dataResult.success) {      
      this.notify.ShowMessageSuccessTopCenter(this.dataResult.message, 3000)      
      this.router.navigate(['/login'])      
    }
    else
      this.notify.ShowMessageErrorTopCenter(this.dataResult.message, 3000)
  }


  createForm() {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
      passwordConfirm: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
    },
      {
        validator: MustMatch('password', 'passwordConfirm')
      });
  }

  get f() { return this.form.controls; }
}


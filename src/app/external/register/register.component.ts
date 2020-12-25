import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
  dataResult: DataResult
  form: FormGroup
  loading = false
  submitted = false

  constructor(
    private fb: FormBuilder,
    private router: Router,    
    private authService: AuthService,
    private notify: NotifyService
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
      return;
        
    this.loading = true;
    this.authService
      .register(this.frm.username.value, this.frm.password.value)
      .subscribe(
        data => {
          this.dataResult = data
          this.showMessage()
        },
        error => {
          this.notify.ShowMessageError(error, 2000)
        })
  }

  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccess(this.dataResult.message, 2000)
      this.router.navigate(['/login'])
    }
    else
      this.notify.ShowMessageError(this.dataResult.message, 2000)
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
        ])
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }
  
  get frm() { return this.form.controls; }
}

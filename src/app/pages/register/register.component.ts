import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  loading = false
  submitted = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService,
  ) {
    // redireciona para dashboard se já estiver logado
    if (this.authenticationService.currentUserValue) {
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
    this.userService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          // se o DataResult for 'true', redireciona pra tela de login
          this.router.navigate(['/login']);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }

  
  createForm() {
    this.form = this.fb.group({
      name: [
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

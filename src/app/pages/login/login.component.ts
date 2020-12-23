import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  dataResult: DataResult
  submitted = false
  returnUrl: string

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private notify: NotifyService) {
    if (this.authService.currentUserValue) {  // <-- redirecionar para dashboard se já estiver logado
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.createForm()
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'  // <--obtém o url de retorno 
  }


  onSubmit() {
    this.submitted = true
    if (this.form.invalid)
      return;
    
    this.authService
      .login(this.frm.username.value, this.frm.password.value)
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
    if (this.dataResult.success)
      this.router.navigate(['/dashboard'])
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
      ]
    });
  }

  get frm() { return this.form.controls; }
}
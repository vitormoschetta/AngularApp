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

    this.dataResult = this.authService.login(this.f.username.value, this.f.password.value)
    this.showMessage()
  }


  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccessBottomCenter(`Olá ${this.dataResult.object.userName}!`, 3000)
      this.router.navigate(['/dashboard'])
    }
    else
      this.notify.ShowMessageErrorTopCenter(this.dataResult.message, 3000)
  }


  createForm() {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required         
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required          
        ])
      ]
    });
  }

  get f() { return this.form.controls; }
}